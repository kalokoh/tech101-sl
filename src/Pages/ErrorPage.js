import React from 'react'
import {Link} from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div style={{marginTop: '7rem', marginBottom: '17rem', marginLeft: '5rem'}}>
       <h1 >404</h1>
       <p>Page Not Found</p>
       <div>
          <Link to="/">Back to Home page</Link>
       </div>
    </div>
  )
}

export default ErrorPage