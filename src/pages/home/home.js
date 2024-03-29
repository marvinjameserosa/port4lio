import './home.css'
import Header from '../header/header.js';
import Footer from '../../pages/footer/footer.js';
import Background from '../../assets/images/background.svg';
import Adviser from '../../assets/images/adviser.jpg'
import Classpic from '../../assets/images/classpic.jpg'
import Cpe from '../../assets/images/cpe2-4.png'
function Home() {
    return (
     <div className='wrapper-home'>
        <Header/>
        <div className='first-section'>
          <div className='home-text-container'>
          <div className='home-text'>
            <h1>Welcome to our <span style={{color:'#c24914'}}>PORT4LIO</span> website</h1>
            <p>We are the third-year Computer Engineering students in section 4
              at Polytechnic University of the Philippines. Have a glimpse of our
              On-the-Job Training (OJT) 1.
            </p>
          </div>
          </div>
            <div className='background'>
              <img src={Background} alt='Background'/>
            </div>
        </div>

        <div className='second-section'>
          <div className='home-ojt'>
            <div className='row0'>
            <div className='home-ojt-text'>
              <h4>On-The-Job-Training (OJT)</h4>
                <p>is a practical approach to acquiring new competencies and skills needed for a job in a real, or close to a real, working environment.</p>
                <p>It is often used to learn how to use particular tools or equipment in a live-work practice, simulated, or training environment.</p>
            </div>
            <div className='home-image' style={{backgroundColor:'#dac0a3'}}>
            <img src={Cpe}></img>
            </div>
            </div>
          </div>
            
          <div className='ojt-adviser'>
            <div className='row2'>
              <h4>On-The-Job-Training-Adviser</h4>
            </div>
            <div className='row3'>
              
              <div className='adviser-container'>
                <div className='image'>
                  <img src={Adviser} alt='adviser'/>
                </div>
                <div className='home-ojt-text2'>
                  <p><b style={{color:'#c24914'}}>Ma'am Angela Israel</b></p>
                  <p>Adviser, BSCpE 2-4</p>
                  <p>CMPE 30213 On-The-Job-Training</p>
                  <p>(OJT 1)</p>
                </div>
              </div>
              <div className='home-image' style={{backgroundColor:'#eadbc8'}}>
              <img src={Classpic}></img>
              </div>
            </div>

          </div>
          

        </div>
        <Footer/>
      </div>
    );
  }
  
export default Home;
  