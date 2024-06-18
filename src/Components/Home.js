import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet'

const Home = () =>(
   
   <Fragment> 
   <Helmet> 
        <title>Quiz App-Home</title>
    </Helmet>
    <div id="home">   
    <section>
    <div  className="auth-container">
        <span className="mdi mdi-cube-outline cube"></span> {/*the icon is not visble*/}
    </div>
    <h1>Quiz App</h1>
    <div className="play-button-continer">
        <ul>
            <li><Link className= "play-button" to ="/play/instructions">Play</Link></li>
        </ul>
    </div>
  
 <div className="auth-container">
 <Link to="/login" className="auth-buttons" id ="login-button">Login</Link>
 <Link to="/register" className="auth-buttons" id ="signup-button"> Sign up</Link>


 </div>
    </section>
</div>
     </Fragment>
      
    
)
export default Home;