import React from 'react'
import SkillIcon from '../common/SkillIcon'
import LinuxImg from '../../images/ALL/Linux.png'
import WindowsImg from '../../images/ALL/Windows.png'
import ApacheImg from '../../images/ALL/Apache.png'
import AWSImg from '../../images/ALL/AWS.jpg'
import JavaScriptImg from '../../images/ALL/JavaScript.png'
import ReactImg from '../../images/ALL/React.png'
import PythonImg from '../../images/ALL/Python.png'
import CSharpImg from '../../images/ALL/CSharp.png'
import DockerImg from '../../images/ALL/Docker.png'
import TerraformImg from '../../images/ALL/Terraform.png'
import AnsibleImg from '../../images/ALL/Ansible.png'
import GrafanaImg from '../../images/ALL/Grafana.png'
import PrometheusImg from '../../images/ALL/Prometheus.png'
import FluentdImg from '../../images/ALL/Fluentd.png'
import OpenTelemetryImg from '../../images/ALL/OpenTelemetry.png'
import ElasticSearchImg from '../../images/ALL/ElasticSearch.png'
import FalcoImg from '../../images/ALL/Falco.png'
import PostgreSQLImg from '../../images/ALL/PostgreSQL.png'
import MongoDBImg from '../../images/ALL/MongoDB.png'
import RubyImg from '../../images/ALL/Ruby.png'
import KubernetesImg from '../../images/ALL/Kubernetes.png'

const All = () => {
    return (
        <div>
            <p>業務で扱ったことのある主な技術スキルです。特に得意なスキルは太字にしています。</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: "50px" }}>
                <SkillIcon imgSrc={LinuxImg} text="Linux" isStar />
                <SkillIcon imgSrc={WindowsImg} text="Windows" />
                <SkillIcon imgSrc={ApacheImg} text="Apache" isStar />
                <SkillIcon imgSrc={AWSImg} text="AWS" isStar />
                <SkillIcon imgSrc={JavaScriptImg} text="JavaScript" />
                <SkillIcon imgSrc={ReactImg} text="React" />
                <SkillIcon imgSrc={PythonImg} text="Python" />
                <SkillIcon imgSrc={CSharpImg} text="C#" />
                <SkillIcon imgSrc={DockerImg} text="Docker" />
                <SkillIcon imgSrc={TerraformImg} text="Terraform" isStar />
                <SkillIcon imgSrc={AnsibleImg} text="Ansible" />
                <SkillIcon imgSrc={GrafanaImg} text="Grafana" isStar />
                <SkillIcon imgSrc={PrometheusImg} text="Prometheus" isStar />
                <SkillIcon imgSrc={FluentdImg} text="Fluentd" isStar padding="5px" />
                <SkillIcon imgSrc={OpenTelemetryImg} text="OTel" isStar />
                <SkillIcon imgSrc={ElasticSearchImg} text="ElasticSearch" />
                <SkillIcon imgSrc={FalcoImg} text="Falco" />
                <SkillIcon imgSrc={PostgreSQLImg} text="PostgreSQL" />
                <SkillIcon imgSrc={MongoDBImg} text="MongoDB" />
            </div>
            <p style={{ paddingTop: "50px" }}>業務外で扱ったことのある主な技術スキルです。</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: "50px" }}>
                <SkillIcon imgSrc={RubyImg} text="Ruby" />
                <SkillIcon imgSrc={KubernetesImg} text="Kubernetes" />
            </div>
        </div>
    )
}

export default All