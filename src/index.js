import React from 'react';
import styles from './styles.module.css';
import {findIP} from "./CommonUtil/ClientIp";

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export class MyIpAddress extends React.Component {
  constructor(props){
    super(props);
    this.state={clientIp:""}
  }

  componentDidMount(){
    findIP().then(ip => this.setState({clientIp:ip})).catch(e => console.error(e))
  }

  render() {
    return (<div>Your IP address is : {this.state.clientIp}</div>)
  }
}