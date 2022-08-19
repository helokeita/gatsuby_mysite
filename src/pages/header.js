import React from "react"
import {Link} from "gatsby"
import Logo from "../../static/logo.png"
import fly from "../../static/jet-fighter-solid.svg"
import "./header.css"

export default function Header(){
    return (
        <header>
            <div className="headervar">
            <div className="top">
                <Link to="/">
                    <img src={Logo} className="logo-image"></img>
                </Link>
            </div>
            <div className="link">
                <Link to="/" className="a">
                    <p className="p">Home</p>
                </Link>
                <Link to="/japan" className="a">
                    <p className="p">Japan</p>
                </Link>
                <Link to="/world" className="a">
                    <p className="p">World</p>
                </Link>
                <Link to="/contact" className="a">
                    <p className="p">Contact</p>
                </Link>
            </div>
                
            </div>
        </header>
    )
}