import React,{useState} from "react"
import  "./contact.css"
import icon from "../../static/twitter.png"


function ContactForm() {

    return(
        <div className="contact">

        <h1>SNS</h1>
        <div className="sns">
        <p>Twitterやってます→<br/>
        よかったらフォローお願いします！</p>
        <a href="https://twitter.com/keita38992370"><img src={icon} className="img"/></a>
        </div>


        <h1>お問い合わせ</h1>

        
        <form 
        name="contact" 
        method="post" 
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <div className="form">
            <label htmlFor="name">
                <span className="label">~お名前~</span><br/>
                <input 
                type="text" 
                name="name" 
                id="name"
                className="text"
                />
            </label>
          </div>
          <div className="form">
            <label htmlFor="email">
                <span className="label">~メールアドレス~</span><br/>
                <input
                type="email" 
                name="email" 
                id="email"
                className="text"
                />
            </label>
          </div>
          <div className="form">
            <label htmlFor="message">
                <span className="label">~メッセージ~</span><br/>
                <textarea 
                name="message" 
                id="message"
                className="textbox"
                />
            </label>
          </div>
          <div className="button">
            <button type="submit" className="btn">送信</button>
          </div>

        </form>
        </div>
    );
}
export default ContactForm;
