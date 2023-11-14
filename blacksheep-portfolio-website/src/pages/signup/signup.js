import '../signup/signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './navigation/navigation.js';
import Banner from '../../assets/images/background-banner.png';
import Header from '../signup/header/header.js';

function Signup() {
    return (
      <div className='sU-wrapper'>
        <Header></Header>
        <img src={Banner}></img>
      <div className='container main'>
        <div className='sU-pI-container'>
          <div className='pI-head'>
            <h1>PORT4LIO</h1>
            <p>Already have an account? <a href='/login'>LOG IN</a> here.</p>
          </div>
          <div className='pI-navigation'>
            <Navigation/>
          </div>
          <div className='pI-infos'>
            <div className='pI-info'>
              <p>Name:</p>
                <input id='signup-name' ></input>
            </div>
            <div className='pI-info'>
              <p>Email/Username:</p>
                <input id='signup-email'></input>
            </div>
            <div className='pI-info'>
              <p>Password:</p>
                <input id='signup-password'></input>
            </div>
            <div className='pI-info'>
              <p>Confirm Password:</p>
                <input id='signup-c-password'></input>
            </div>
          </div>
          <div className='button-next'>
            <button id='next'>Next</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default Signup;
  