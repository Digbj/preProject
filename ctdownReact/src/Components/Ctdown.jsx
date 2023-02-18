import React, { useEffect } from "react";
import { useState } from "react";
const CountDown =()=>{
    const [time, setTime] = useState('');
    const handleKeyPress=(e)=>{
      if(e.key==='Enter'){
        const input=Math.floor(e.target.value);
        if(isNaN(input)){
          setTime(0);
        }else{
          setTime(input);
        }
      }
    };

    useEffect(()=>{
      let timer;
      if(time>0){
       timer=setInterval(()=>{
        setTime((time)=>time-1)
       },1000)
      }else{
        setTime(0);
      }return ()=>clearInterval(timer);
    },[time]);

  return (
    <div id="timeCount">
      <input type="text" onKeyDown={handleKeyPress} placeholder='Enter the time in second'/>
      <div id="current-time">
    {time}
      </div>

    </div>
  );


}
export default CountDown;