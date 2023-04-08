import React from 'react'
import SkillIcon from '../common/SkillIcon'
import JavaScriptImg from '../../images/ALL/JavaScript.png'
import NodeImg from '../../images/ALL/Node.png'
import ReactImg from '../../images/ALL/React.png'
import PythonImg from '../../images/ALL/Python.png'
import CSharpImg from '../../images/ALL/CSharp.png'
import RubyImg from '../../images/ALL/Ruby.png'
import RailsImg from '../../images/ALL/Rails.png'
import NextImg from '../../images/ALL/Next.png'
import NestImg from '../../images/ALL/Nest.png'

const All = () => {
    return (
        <div>
            <p>業務で扱ったことのある主なプログラミングスキルです。<br/>インフラメインのエンジニアの為、現時点ではインフラの自動化やツールの作成でのみの経験になります。</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: "50px" }}>
                <SkillIcon imgSrc={JavaScriptImg} text="JavaScript" />
                <SkillIcon imgSrc={NodeImg} text="Node.js" />
                <SkillIcon imgSrc={ReactImg} text="React" />
                <SkillIcon imgSrc={PythonImg} text="Python" />
                <SkillIcon imgSrc={CSharpImg} text="C#" />
            </div>
            <p style={{ paddingTop: "50px" }}>業務外で扱ったことのある主なプログラミングスキルです。</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: "50px" }}>
                <SkillIcon imgSrc={NextImg} text="Next.js" />
                <SkillIcon imgSrc={NestImg} text="Nest.js" />
                <SkillIcon imgSrc={RubyImg} text="Ruby" />
                <SkillIcon imgSrc={RailsImg} text="Ruby on Rails" />
            </div>
        </div>
    )
}

export default All