import {LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts'

import './index.css'

const LineChartItem = props => {
  const {timeLineData, DataFormatter, dataType} = props

  let colorfill
  switch (dataType) {
    case 'active':
      colorfill = '#0A4FA0'
      break
    case 'recovered':
      colorfill = '#216837'
      break
    case 'deceased':
      colorfill = '#474C57'
      break
    default:
      colorfill = '#9A0E31'
      break
  }
  return (
    <div>
      <LineChart
        width={900}
        height={300}
        data={timeLineData}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
      >
        <XAxis
          dataKey="date"
          style={{
            fontFamily: 'Roboto',
            fontWeight: 500,
            textTransform: 'uppercase',
          }}
        />
        <YAxis dataKey={`${dataType}`} tickFormatter={DataFormatter} />
        <Tooltip />
        <Legend verticalAlign="top" align="right" iconSize={0} />
        <Line type="monotone" dataKey={dataType} stroke={colorfill} />
      </LineChart>
    </div>
  )
}

export default LineChartItem
