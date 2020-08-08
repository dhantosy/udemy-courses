import axios from 'axios'
import Thumbnail from '../../components/Thumbnail'

const Home = ({ shows }) => {

  // fetch api from client side
  // useEffect(() => {
  //   axios.get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01')
  //     .then(response => console.log(response.data))
  // }, [])

  const renderShows = () => {
    return shows.map((showItem, index) => {
      const { show } = showItem
      
      return (
        <li key={index}>
          <Thumbnail imageUrl={show.image?.medium || ''} caption={show.name} />
        </li>
      )
    })
  }

  return (
    <ul className='tvshows'>
      {renderShows()}
    </ul>
  )
}

Home.getInitialProps = async context => {
  const country = context.query.country || 'us'
  //getInitialprops
  //can only access props from the params passed in this component
  //not compatible with client side props

  const response = await axios.get(
    `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
  )

  return {
    shows: response.data
  }
}

export default Home
