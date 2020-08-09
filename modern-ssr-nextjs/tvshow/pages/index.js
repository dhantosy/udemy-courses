import Router from 'next/router'

const Home = () => {
  // render in client side
  console.log('browser', process.browser)

  return (
    <div>
      This is homepage
    </div>
  )
}

Home.getInitialProps = context => {
  // render in server side
  console.log('browser', process.browser)

  const country = context.query.country || 'us'

  process.browser ?
    Router.replace('/[country', `${country}`) :
    context.res.writeHead(302, { Location: `/${country}` })

  context.res.end()
}

export default Home;
