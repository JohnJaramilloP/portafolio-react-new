import React from 'react'
import Form from '../form/Form'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__info'>
            <h2 className='footer__title'>Formulario de contacto</h2>
        </div>

        <Form />

        <div className='footer__sns'>
            <div className='sns__links'>
                <a href='https://www.linkedin.com/in/john-alejandro-jaramillo-patino-0a2b82215/' target="_blank" rel="noreferrer">
                    <i className='fab fa-linkedin linkedin'></i>
                </a>
                <a href='https://github.com/JohnJaramilloP' target="_blank" rel="noreferrer">
                    <i className='fab fa-github github'></i>
                </a>
                <a href='https://www.facebook.com/john.jaramillo.37/' target="_blank" rel="noreferrer">
                    <i className='fab fa-facebook facebook'></i>
                </a>
            </div>
            <div className='desing__by'>
                Diseñado por JA -- JP
            </div>
        </div>
    </footer>
  )
}

export default Footer