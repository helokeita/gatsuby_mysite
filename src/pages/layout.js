import React from "react"
import "./layout.css"
import Header from "./header"
import Footer from "./footer"
import "./reset.css"

const Layout = ({children}) =>{
    return (
        <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout