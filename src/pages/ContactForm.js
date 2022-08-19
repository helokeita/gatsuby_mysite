import React,{useState} from "react"
import  "./contact.css"
import icon from "../../static/twitter.png"


function ContactForm() {
    const [formState, setFormState] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&amp;');
    };
  
    const handleChange = (e) => {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formState }),
      })
        .then(() => alert('メールを送信しました。'))
        .catch((error) => alert(error));
  
      e.preventDefault();
    };

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
        onSubmit={handleSubmit}
        name="contact" 
        method="post" 
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <div className="form">
            <label>
                <span className="label">~お名前~</span><br/>
                <input 
                type="text" 
                name="name" 
                className="text"
                onChange={handleChange}
                value={formState.name}
                />
            </label>
          </div>
          <div className="form">
            <label>
                <span className="label">~メールアドレス~</span><br/>
                <input
                type="email" 
                name="email" 
                className="text"
                onChange={handleChange}
                value={formState.email}
                />
            </label>
          </div>
          <div className="form">
            <label>
                <span className="label">~メッセージ~</span><br/>
                <textarea 
                name="message" 
                className="textbox"
                value={formState.message}
                onChange={handleChange}
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
