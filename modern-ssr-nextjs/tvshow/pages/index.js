import Router from 'next/router'
import cookies from 'nookies'

const Home = () => null

// const Home = () => {
//   // render in client side
//   console.log('browser', process.browser)

//   return (
//     <div>
//       This is homepage
//     </div>
//   )
// }

Home.getInitialProps = context => {
  // render in server side
  console.log('browser', process.browser)

  const { defaultCountry } = cookies.get(context)

  const country = context.query.country || defaultCountry || 'us'

  process.browser ?
    Router.replace('/[country', `${country}`) :
    context.res.writeHead(302, { Location: `/${country}` })

  context.res.end()
}

export default Home;
