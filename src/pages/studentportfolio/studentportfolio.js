import './studentportfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/header.js';
import Footer from '../../pages/footer/footer.js';
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../../firebaseConfig.js';
import { fileDb } from '../../firebaseConfig';
import { ref, getDownloadURL } from 'firebase/storage';
import { useState, useEffect } from 'react';
import Student from '../../assets/images/blank-profile.png';
import Background from '../../assets/images/background.svg';

function ProfilePicture({uname}){
  const [pPicUrl, setPPicUrl] = useState(Student);

  const fileRef = ref(fileDb, `students_files/${uname.replaceAll(',', '')}/${uname.replaceAll(',', '')} - 2X2 Picture`);
    getDownloadURL(fileRef)
    .then((url) => {
        setPPicUrl(url);
    })
    .catch((error) => {
        console.error('Error retrieving download URL:', error);
    });
  return(
    <div>
      <img src={pPicUrl} id='sP-profile'/>
    </div>
  );
}

function StudentPortfolio() {
  localStorage.setItem('profile','')
  const navigate = useNavigate()

  const saveProfile = (name) =>{
    var Name = name.replaceAll(',', '');
    localStorage.setItem('user', name)
    localStorage.setItem('profile', Name.replaceAll(' ', '_'))
      studentProfile(Name);
      window.location.reload();
  }
  
  const studentProfile = (name) => {
      navigate('/student-portfolio/profile/' + name.replaceAll(' ', '_'));
  }


  const [childrenArray, setChildrenArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRef = firebase.database().ref('UserNames');
        const snapshot = await dataRef.once('value');
        const data = snapshot.val();
        if (data) {
          const dataArray = Object.keys(data).map(key => (key));
          setChildrenArray(dataArray);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();;
  }, []);
  

    return (
      <div className='wrapper-sP'>
      <Header/>
      <div className='first-section'>
        <div className='container'>
        <div className='sP-text'>
          <h1>Welcome to the <span style={{color:'#c24914'}}>STUDENT PORT4LIO</span></h1>
          <p>This part contains links to individual students where you may
              access to view their OJT Documents and Supporting Photos. You
              may click their respective image or button to be redirected to the
              page containing the documents and photos.
          </p>
        </div>
        </div>
          <div className='background'>
            <img src={Background} alt='Background'/>
          </div>
      </div>
      <div className='main-second-section'>

      <div className="grid-container">
          {childrenArray.map((name, index) => (
            <div key={index} className="grid-item" onClick={() => saveProfile(name)}>
              <div className='grid-image'>
                <ProfilePicture uname={name} />
              </div>
              <p className='grid-text'>{name}</p>
            </div>
          ))}
      </div>
      </div>
      <Footer/>
    </div>
    );
  }
  
  export default StudentPortfolio;
  