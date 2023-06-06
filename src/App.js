import testLogo2 from "./svg/Vector.svg" 
import interno from "./svg/Interno.svg"
import logo from "./svg/Logo.svg"
import arrow from "./svg/arrow.svg"
import img from "./svg/abt.jpg"
import ellipse from "./svg/Ellipse.png"
import call from "./svg/Call.svg"
import user_1 from "./svg/user1.jpg"
import user_2 from "./svg/user2.jpg"
import user_3 from "./svg/user3.jpg"

import './App.css';

function App() {
  return (
    <div>
    <div className="App">

      <div className="logo">
      <img src={logo} id='log'/>
      <img src={interno}/>
      </div>

      <div className='nav'>
        <a href='#'>Home</a>
        <a href='#'>Pages</a>
        <a href='#'>Services</a>
        <a href='#'>Project</a>
        <a href='#'>Blog</a>
        <a href='#'>Contact</a>
        <img src={testLogo2} />
      </div>
     
    </div>
    <div className="main">
    <div className="home">
      <h1>Let Your Home be unique</h1> 
      <p>There are many variations of the passages of lorem Ipsum from 
      available, majority.</p>
      <a href='#'><button>Get Started <img src={arrow} id='arr'/> </button></a>
      </div>
    </div>

    <div className="work">
    <div id='proj'>
    <h1>Project Plan</h1>
    <p>There are many variations of the passages of lorem Ipsum from 
      available, majority.</p><br/>

    <div id='w'>
      <a>Read More </a> <img src={arrow} id='arr'/>
      </div>
    </div>

    <div id='proj'>
    <h1>Project Plan</h1>
    <p>There are many variations of the passages of lorem Ipsum from 
      available, majority.</p><br/>

      <div id='w'>
      <a>Read More </a> <img src={arrow} id='arr'/>
      </div>
    </div>

    <div id='proj'>
    <h1>Project Plan</h1>
    <p>There are many variations of the passages of lorem Ipsum from 
      available, majority.</p><br/>

      <div id='w'>
      <a>Read More </a> <img src={arrow} id='arr'/>
      </div>
    </div>
    </div>
{/*------------------------------------- */}
    <div className="about">
      <div className="abt_content">
        <h1>We Create The Art Of Stylish Living Stylishly</h1>
        <p>It is a long established fact that a reader will be distracted by the of readable content of a page 
            when lookings at its layouts the points of using 
            that it has a more-or-less normal.</p>

            <div className="call">
            <img src={ellipse} id='ell'/>
            <img src={call} id='pho'/>

            <h4>123456789</h4>
            <h6>Call Us Anytime</h6>
            </div>

            <button>Get Free Estimate <img src={arrow} id='arr'/> </button>
            
      </div>

      <div>
        <img src={img} id='img'/>
      </div>
      </div>
      
      <div className="testi">
       <center><h1>What The People Think About Us</h1></center>

       <div className="details">
        <div id='pers1'>
          <div id='u1'>
          <img src={user_1} id='usr'/>
          <h5>Nattasha Mith<br/>
          <span>Sydney, USA</span></h5>
          </div>

          <p>Lorem Ipsum is simply dummy 
              text of the typesetting industry. 
              Ipsum has been.</p>
        </div>

        <div id='pers1'>
          <div id='u1'>
          <img src={user_2} id='usr'/>
          <h5>Nattasha Mith<br/>
          <span>Sydney, USA</span></h5>
          </div>

          <p>Lorem Ipsum is simply dummy 
              text of the typesetting industry. 
              Ipsum has been scrambled it 
              to make a type book.</p>
        </div>

        <div id='pers1'>
          <div id='u1'>
          <img src={user_3} id='usr'/>
          <h5>Nattasha Mith<br/>
          <span>Sydney, USA</span></h5>
          </div>

          <p>Lorem Ipsum is simply dummy 
              text of the typesetting industry. 
              Ipsum has been scrambled.</p>
        </div>

        
        
        

       </div>



      </div>


    </div>
    
    
  );
}

export default App;
