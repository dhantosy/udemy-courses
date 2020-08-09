const CustomError = ({ statusCode }) => {

  if (statusCode === 404) {
    return (
      <div>The resource was not found</div>
    )  
  }
  return (
    <div>Oops! something was wrong</div>
  )
}

CustomError.getInitialProps = ({ err, res }) => {
  return { statusCode: res ? res.statusCode : err ? err.statusCode : 404 }
}

export default CustomError
