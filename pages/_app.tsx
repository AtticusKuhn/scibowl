import { DefaultSeo } from 'next-seo'
import React from 'react'
import Layout from '../components/Layout'
import SEO from "../neo-seo.config"


import '../styles/index.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
    </Layout>
}
export default MyApp

