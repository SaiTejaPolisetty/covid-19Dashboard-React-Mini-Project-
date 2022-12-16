import {XAxis, Tooltip, BarChart, LabelList, Bar} from 'recharts'

const BarChartItem = props => {
  const {barChartType, arrayOfRecentData, formatDateFunc} = props

  let colorfill
  switch (barChartType) {
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

  /* width={750} height={450}  <div className="bar-chart-container">  </div> */

  return (
    <BarChart width={950} height={450} data={arrayOfRecentData}>
      <XAxis
        dataKey="date"
        tickFormatter={formatDateFunc}
        stroke={`${colorfill}`}
        style={{
          fontFamily: 'Roboto',
          fontWeight: 500,
          textTransform: 'uppercase',
        }}
        axisLine={false}
        tickSize={0}
        barGap={50}
      />
      <Tooltip />

      <Bar
        dataKey={`${barChartType}`}
        fill={`${colorfill}`}
        radius={[8, 8, 0, 0]}
      >
        <LabelList
          dataKey={`${barChartType}Label`}
          position="top"
          fill={`${colorfill}`}
          style={{
            fontFamily: 'Roboto',
            fontWeight: 1000,
            fontSize: 14,
            marginBottom: 20,
          }}
        />
      </Bar>
    </BarChart>
  )
}

export default BarChartItem
