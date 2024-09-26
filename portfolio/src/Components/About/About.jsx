import React from 'react'
import "./About.css"
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus exercitationem, at nam vel eligendi quas distinctio iusto laudantium tempore impedit magni neque? Sapiente dolor corporis, maiores exercitationem vitae placeat porro!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore praesentium unde vitae nostrum, harum maxime quos consequatur distinctio soluta dignissimos dolor ducimus, quo animi sequi? Earum consequuntur officiis corporis possimus.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML , CSS </p><hr style={{width:"90%"}} /></div>
                    <div className="about-skill"><p>Bootstrap</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>React JS </p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}} /></div>
                   
                </div>
            </div>
        </div>

        <div className="about-achivements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>Years Of Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>30+</h1>
                <p>project completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>happy clients</p>
            </div>
        </div>
    </div>
  )
}

export default About