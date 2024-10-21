import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "3677e611-9f02-49d1-ad27-c509be0d8f9c");
    
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
            alert(res.message)
        }
      };


  return (
    <div  id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img color='#d1f0f0' src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>i'm currently avaliable </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>Mohamedamrane35@gmail.com</p>


                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>+212 603-553851</p>

                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Morroco,Agadir</p>

                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your name</label>
                <input type="text" placeholder='Enter youe name' name='name' />
                <label htmlFor="">Your email</label>
                <input type="email"placeholder='Enter your email'name='email' />
                <label htmlFor="">Write your message</label>
                <textarea name="message" rows='8' placeholder='Enter your message' ></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact