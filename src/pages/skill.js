import React from 'react'
import { useState, useEffect } from 'react';
import Dev from '../components/data/Dev';
import Ops from '../components/data/Ops';
import Aws from '../components/data/Aws';
import SkillButton from '../components/common/SkillButton';
import Layout from '../components/layout';
import '../components/styles/fade.css';
import Seo from "../components/seo"

const Skill = () => {

  const [selectSkill, setSelectSkill] = useState("Ops");
  const [animationClass, setAnimationClass] = useState("fade-enter");

  useEffect(() => {
    setAnimationClass("fade-enter");
    const timer = setTimeout(() => {
      setAnimationClass("fade-enter-active");
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [selectSkill]);

  return (
    <Layout>
      <div style={{ textAlign: "center", margin: "0 auto", overflowWrap: "normal" }}>
        <div className="Icon">
          <h1>Skill</h1>
        </div>
        <div style={{ display: 'flex' }} className="Comment">
          <SkillButton skill="Ops" selectSkill={selectSkill} setSelectSkill={setSelectSkill} />
          <SkillButton skill="Dev" selectSkill={selectSkill} setSelectSkill={setSelectSkill} />
          <SkillButton skill="AWS" selectSkill={selectSkill} setSelectSkill={setSelectSkill} />
        </div>
        <div className={animationClass} style={{ marginTop: "20px" }}>
          {selectSkill === "Ops" && <Ops />}
          {selectSkill === "Dev" && <Dev />}
          {selectSkill === "AWS" && <Aws />}
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Skill" />

export default Skill