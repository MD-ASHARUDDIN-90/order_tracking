import React,{useState} from "react";
import style from './App.module.css'
import {  AiFillWechat  } from 'react-icons/ai';
import DilogBox from './Dilog/DilogBox'

export default function App() {
  const [ show , setShow] = useState(false)
  const handleClick = ()=>{
    setShow(!show ? true : false)
  }
  return (
    <div className={style.main}>
      <div  className={style.floatBtn}>
       {show ? <DilogBox /> : "" }
      < AiFillWechat  onClick={handleClick} className={style.icons}/>
      </div>
    </div>
  );
}
