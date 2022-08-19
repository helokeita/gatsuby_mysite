import React from "react"
import Layout from "./layout"
import  "./contact.css"
import icon from "../../static/twitter.png"

export default function japan(){
    return (
        <Layout>
          <div className="contact">

          <h1>SNS</h1>
          <div className="sns">
          <p>Twitterやってます→<br/>
          よかったらフォローお願いします！</p>
          <a href="https://twitter.com/keita38992370"><img src={icon} className="img"/></a>
          </div>


          <h1>お問い合わせ</h1>

          
          <form name="contact" method="POST" netlify>
            <p className="form">
              <label className="label">~お名前~</label><br/>
                <input type="text" name="name" className="text"/>
            </p>
            <p className="form">
              <label className="label">~メールアドレス~</label><br/>
              <input type="email" name="email" className="text"/>
            </p>
            <p className="form">
              <label className="label">~メッセージ~</label><br/>
              <textarea name="message" className="textbox"/>
            </p>
            <p className="button">
              <button type="submit" className="btn">送信</button>
            </p>

          </form>

         


          </div>
          
        </Layout>
      )
}
