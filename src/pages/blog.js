import React from 'react'
import Seo from "../components/seo"
import Layout from '../components/layout';

const blog = () => {
    return (
        <Layout>
            <div>blog</div>
        </Layout>
    )
}

export const Head = () => <Seo title="Blog" />

export default blog