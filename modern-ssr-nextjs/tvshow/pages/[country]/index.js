import axios from 'axios'
import Thumbnail from '../../components/Thumbnail'
import CustomError from '../_error'

const Home = ({ shows, country, statusCode }) => {

  if (statusCode) {
    return <CustomError statusCode={statusCode} />
  }

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
          <Thumbnail 
            imageUrl={show.image?.medium || undefined} 
            caption={show.name} 
            href='/[country]/[showId]'
            as={`/${country}/${show.id}`}
          />
        </li>
      )
    })
  }

  return (
    <div>
      <ul className='tvshows-grid'>
        {renderShows()}
      </ul>

      <style>
        {`
          .tvshows-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            gap: 10px;
          }

          @media only screen and (max-width: 768px) {
            .tvshows-grid {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }

          @media only screen and (max-width: 480px) {
            .tvshows-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  )
}

Home.getInitialProps = async context => {
  //getInitialprops
  //can only access props from the params passed in this component
  //not compatible with client side props

  try {
    const country = context.query.country || 'us'

    const response = await axios.get(
      `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
    )

    return {
      shows: response.data,
      country
    }
  } catch(error) {
    return {
      statusCode: error.response ? error.response.status : 500
    }
  }
}

export default Home
