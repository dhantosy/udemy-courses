import { useEffect } from 'react'
import axios from 'axios'

const CountryTest = (props) => {
  const { shows } = props

  // fetch api from client side
  // useEffect(() => {
  //   axios.get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01')
  //     .then(response => console.log(response.data))
  // }, [])

  return (
    <div>country test</div>
  )
}

CountryTest.getInitialProps = async () => {
  const response = await axios.get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01')

  return {
    shows: response.data
  }
}

export default CountryTest
