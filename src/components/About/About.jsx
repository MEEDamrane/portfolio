import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'
import logo from '../../assets/dalle.png'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={logo} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Mohamed Amrane ,a passionate IT . At the age of 20, I am studying computer engineering at the Taroudant polydisciplinary faculty. </p>
                    <p> I am a student currently seeking an internship for my final year project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML ,CSS ,PHP && JS </p> <hr  style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>SQL</p> <hr  style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p> <hr  style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>C/C++</p> <hr  style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>JAVA</p> <hr  style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Numpy ,Pandas</p> <hr  style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>Latex</p> <hr  style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Matlab</p> <hr  style={{width:"50%"}}/></div>



                </div>
            </div>
        </div>
        <div className="about-achievements">
            {/* <div className="about-achievement">
                <h1>10+</h1>
                <p>Skills</p>
            </div>
            <div className="about-achievement">
                <h1>9+</h1>
                <p>Project </p>
            </div>
            <div className="about-achievement">
                <h1>15+</h1>
                <p>Happy clients</p>
            </div> */}
        </div>
    </div>
  )
}

export default About