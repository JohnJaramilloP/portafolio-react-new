import React from 'react'
import "./Contact.css";
import { AiOutlineDown } from "react-icons/ai";
import { transform } from 'framer-motion';

const Contact = () => {

  const goDown = () => {
    window.scrollTo({ top: 950, left: 0, behavior: "smooth"});
  };

  return (
    <div className='contact-container'>
        <h2 className='contact'>Contáctame </h2>
        <AiOutlineDown className='go-down' onClick={goDown}
        />
    </div>
  )
}

export default Contact