const CustomError = ({ statusCode }) => {

  if (statusCode === 404) {
    return (
      <div>The resource was not found</div>
    )  
  }
  return (
    <div>
      <h2>{statusCode}</h2>
      <h2>Oops! something was wrong</h2>
    </div>
  )
}

CustomError.getInitialProps = ({ err, res }) => {
  return { statusCode: res ? res.statusCode : err ? err.statusCode : 404 }
}

export default CustomError
