import React from 'react'
import "./Counter.css"
import CountUp from "react-countup"

const Counter = () => {
  return (
        <div class="counting ">
        <div class="box">
            <h1 class="count" data-count="10"> <CountUp start={0} end={5} duration={2} delay={0}/> </h1>
            <h3>Yıl Tecrübe</h3>
        </div>
        <div class="box">
            <h1 class="count" data-count="10000"><CountUp start={0} end={1000} duration={2} delay={0}/>+</h1>
            <h3>Servis</h3>
        </div>
        <div class="box">
            <h1 class="count" data-count="1000"><CountUp start={0} end={1000} duration={2} delay={0}/>+</h1>
            <h3>Memnun müşteriler</h3>
        </div>
        <div class="box">
            <h1 class="count" data-count="50"><CountUp start={0} end={3} duration={2} delay={0}/></h1>
            <h3>İş Ortağı</h3>
        </div>
    </div>
  )
}

export default Counter