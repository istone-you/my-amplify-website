import React from 'react'
import useMedia from 'use-media';

import Layout from '../layout.js';
import Skill from '../layout/Skill';
import History from '../layout/History';
import '../styles/fade.css'

const Career = () => {
    const color = "#eb6100"

    const isWide = useMedia({ minWidth: '768px' })
    const width = isWide ? '100%' : '90%'

    return (
        <Layout>
            <div style={{ textAlign: "center", width: width, margin: "0 auto", overflowWrap: "normal", fontFamily: "ヒラギノ角ゴシック" }}>
                <div className="Icon">
                    <b style={{ fontSize: "50px" }}>Career</b>
                </div>
                <br />
                <div className="Comment">
                    <History color={color} />
                </div>
                <br />
                <Skill color={color} />
                <br />
            </div>
        </Layout>
    )
}

export default Career