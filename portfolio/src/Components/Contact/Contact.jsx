import React from 'react'
import "./Contact.css"
import theme from "../../assets/theme_pattern.svg"
import mail from "../../assets/mail_icon.svg"
import call from "../../assets/call_icon.svg"
import location from "../../assets/location_icon.svg"

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a2da5f87-2e72-4af3-a5b6-0597bce1856b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

      
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get Touch</h1>
            <img src={theme} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets Talk</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt harum consequuntur culpa cumque modi eius provident! Minus </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail} alt="" />
                        <p>sonimanish3362@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call} alt="" />
                        <p>8356816131</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt="" />
                        <p>Mumbai Malad</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='write your name' name='name' />
                <label htmlFor="">Your email</label>
                <input type="email" placeholder='write your email' name='email' />
                <label htmlFor="">Write the message</label>
                <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                <button className="contact-submit" type='submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact