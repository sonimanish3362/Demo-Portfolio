import React from 'react'
import "./MyWork.css"
import theme from "../../assets/theme_pattern.svg"
import myworkdata from "../../assets/mywork_data"
import arrow_icon from "../../assets/arrow_icon.svg"

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme} alt="" />
        </div>
        <div className="mywork-container">
            {myworkdata.map((data,index) => {
                return  <img src={data.w_img} key={index}/>
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>

    </div>
  )
}

export default MyWork