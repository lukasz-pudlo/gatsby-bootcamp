import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

const AboutPage = () => {
    return (
     <Layout>
        <h1>About</h1>
        <p>I'm a software developer from the rainy Glasgow.</p>
        <p>Visit the <Link to="/contact">Contact page</Link> for information on how to contact me.</p>
    </Layout>
	)
}

export default AboutPage