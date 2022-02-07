import { Line as LineJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

export default function LineChart({ coinHistory, currentPrice, coinName }) {
  const coinPrice = coinHistory?.data.history.map(item => item.price)
  const coinTimestamp = coinHistory?.data.history.map(item => new Date(item.timestamp).toLocaleDateString())

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: `Price in USD`,
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd'
      }
    ]
  }

  const options = {
    scales: [{
      yAxes: {
        beginAtZero: true
      }
    }]
  }

  return (
    <>
      <Row className='chart-header'>
        <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
        <Col className='price-container'>
          <Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
          <Title level={5} className='current-price'>Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  )
}