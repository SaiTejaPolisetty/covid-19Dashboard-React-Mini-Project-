import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import CovidCharts from '../CovidCharts'

import './index.css'

import OverAllDataSection from '../OverAllDataSection'

import DistrictCasesItem from '../DistrictCasesItem'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

/* const tabIds = {
  confirmed: 'CONFIRMED',
  active: 'ACTIVE',
  recovered: 'RECOVERED',
  deceased: 'DECEASED',
} */

class StateWiseDataPage extends Component {
  state = {
    isLoading: true,
    stateData: {},
    ActiveDataCategory: 'confirmed',
  }

  componentDidMount() {
    this.getStateData()
  }

  getStateData = async () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    /* console.log(stateCode) */

    const url = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {method: 'GET'}

    const response = await fetch(url, options)
    const data = await response.json()
    const currentStateData = data[stateCode]
    /* const districtData = currentStateData.districts */
    /* console.log(currentStateData) */
    /* console.log(currentStateData) */
    /* const {districts} = currentStateData */
    /* const listOfStateData = Object.keys(districts).map(districtsName => ({
      districtsName: districts[districtsName],
    })) */

    this.setState({
      isLoading: false,
      stateData: currentStateData,
    })
  }

  getStateName = () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params

    const stateName = statesList.filter(obj => obj.state_code === stateCode)[0]
      .state_name

    return stateName
  }

  renderLoadingView = () => (
    <div testid="stateDetailsLoader" className=" loader-container">
      <Loader type="Oval" color="#007BFF" height="50" width="50" />
    </div>
  )

  renderDistrictWiseCases = () => {
    const {stateData, ActiveDataCategory} = this.state
    /* console.log(stateData) */
    const {districts} = stateData
    /* console.log(districts) */
    const districtsNameList = Object.keys(districts)
    /* console.log(districtsNameList) */
    let requiredCaseDetails
    if (ActiveDataCategory !== 'active') {
      requiredCaseDetails = districtsNameList.map(districtName => ({
        name: districtName,
        data: districts[districtName].total[ActiveDataCategory]
          ? districts[districtName].total[ActiveDataCategory]
          : 0,
      }))
      requiredCaseDetails.sort((obj1, obj2) => obj2.data - obj1.data)
    } else {
      const allCasesData = districtsNameList.map(districtName => ({
        name: districtName,
        confirmed: districts[districtName].total.confirmed
          ? districts[districtName].total.confirmed
          : 0,
        deceased: districts[districtName].total.deceased
          ? districts[districtName].total.deceased
          : 0,
        recovered: districts[districtName].total.recovered
          ? districts[districtName].total.recovered
          : 0,
      }))

      requiredCaseDetails = allCasesData.map(obj => ({
        name: obj.name,
        data: obj.confirmed - obj.deceased - obj.recovered,
      }))

      requiredCaseDetails.sort((obj1, obj2) => obj2.data - obj1.data)
    }

    /* console.log(requiredCaseDetails) */
    return (
      <ul
        className="district-wise-cases-list"
        testid="topDistrictsUnorderedList"
      >
        {requiredCaseDetails.map(obj => (
          <DistrictCasesItem districtData={obj} key={obj.name} />
        ))}
      </ul>
    )
  }

  changeCategory = category => {
    this.setState({ActiveDataCategory: category})
  }

  renderCategoryTabs = () => {
    const {ActiveDataCategory, stateData} = this.state
    /* console.log(stateData) */
    const {total} = stateData

    return (
      <OverAllDataSection
        changeCategoryFunc={this.changeCategory}
        ActiveDataCategory={ActiveDataCategory}
        overAllData={total}
      />
    )
    /* const arrayOfTabs = Object.keys(total).slice(0, 4) */
    /* console.log(arrayOfTabs) */
  }

  formatDate = date => {
    const dateObject = new Date(date)

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const formatedDate = `${
      months[dateObject.getMonth()]
    } ${dateObject.getDate()}th ${dateObject.getFullYear()}`

    return formatedDate
  }
  /*  <p className="last-date">{`last update on ${this.formatDate(
            stateData.meta.date,
          )}`}</p> 
          {`last update on ${stateData.meta.last_updated}`} 
          */

  renderStateView = () => {
    const {ActiveDataCategory, stateData} = this.state

    return (
      <>
        <div className="state-name-row">
          <h1 className="state-title">{this.getStateName()}</h1>
          <div className="testNo-container">
            <p className="test-title">Tested</p>
            <p className="testNo">{stateData.total.tested}</p>
          </div>
        </div>

        <div>
          <p className="last-date">{stateData.meta.last_updated}</p>
        </div>

        <div className="country-stats">{this.renderCategoryTabs()}</div>

        <div className="total-district-data-block">
          <h1 className={`district-heading ${ActiveDataCategory}`}>
            Top Districts
          </h1>

          {this.renderDistrictWiseCases()}

          <div className="graphs-data">
            <CovidCharts barChartType={ActiveDataCategory} />
          </div>
        </div>
      </>
    )
  }

  render() {
    /* console.log(this.props) */
    /* this.renderCategoryTabs() */
    const {isLoading} = this.state

    return (
      <>
        <Header />
        <div className="state-wise-data-main-container">
          <div className="state-content-container">
            {isLoading ? this.renderLoadingView() : this.renderStateView()}
          </div>
        </div>
      </>
    )
  }
}

export default StateWiseDataPage
