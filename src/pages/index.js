import React from "react"
// import {Link} from "gatsby"
import Layout from "./layout"
import top from "../../static/top.png"
import css from "./index.css"

export default function Home() {
  return (
    <Layout>
      <img src={top} className="main"/>
    </Layout>
  )
};


