// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <div className='hero'>
        <div className='text-container'>
            <h1>Welcome To</h1>
        </div>
        <div className='parent-svg'>
        <svg className='svg-one' width="100%" height="100%" viewBox="0 0 1440 614" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_41_98)">
            <path d="M-16 199.662C-16 186.944 -11.1537 174.705 -2.44738 165.434L67.6612 90.7804C82.1569 75.345 104.804 70.7143 124.195 79.2208L248.491 133.747C261.358 139.391 276.007 139.361 288.851 133.664L475.811 50.735C492.176 43.4759 511.174 45.5207 525.619 56.0961L645.189 143.63C659.82 154.342 679.104 156.292 695.583 148.727L880.447 63.8676C894.931 57.2192 911.716 57.8731 925.638 65.6281L1035.31 126.719C1047.1 133.287 1061.05 134.809 1073.98 130.937L1304.23 62.0039C1322.11 56.6504 1341.49 61.7027 1354.48 75.1065L1441.91 165.321C1450.95 174.649 1456 187.129 1456 200.118V579C1456 606.614 1433.61 629 1406 629H34C6.38574 629 -16 606.614 -16 579V199.662Z" fill="#71BF45"/>
            </g>
            <defs>
                <filter id="filter0_d_41_98" x="-66" y="0.440125" width="1572" height="682.56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="25"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_98"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_98" result="shape"/>
                </filter>
            </defs>
        </svg>
        <div className='svgtwocontainer'> 
            <svg className='svg-two' width="345" height="538" viewBox="0 0 345 538" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 109.429C0 90.2164 11.0084 72.7032 28.321 64.3731L150.821 5.43104C164.522 -1.16129 180.478 -1.16127 194.179 5.43106L316.679 64.3731C333.992 72.7032 345 90.2164 345 109.429V488C345 515.614 322.614 538 295 538H50C22.3858 538 0 515.614 0 488V109.429Z" fill="#71BF45"/>
            </svg>

            <svg  className='svg-three' width="852" height="543" viewBox="0 0 852 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 65.7392L254.443 126.116L852 0V543H0V65.7392Z" fill="#71BF45"/>
            </svg>
         </div>
        


        </div>
       

        <div className='learning-text-container'>
            <text>Learn</text>
            <text>Play</text>
            <text>Grow</text>
            <text>Socialize</text>
        </div>
        <div className='p-container'>
        <div className='pOne'>
            <p>We are a in-home daycare located in the Greater Hobby Area.</p>
        </div>
        <div className='pTwo'>
            <p>Here at our daycare we understand the importance of creating a safe space for your children to grow; a place where they can play, eat, socialize and learn with other children. Our focus lies on building the leaders of tomorrow! </p>
        </div>
        <div className='pThree'>
            <p>Aquí en nuestra guardería entendemos la importancia de crear un espacio seguro para que sus hijos crezcan; un lugar donde puedan jugar, comer, socializar y aprender con otros niños. ¡Nuestro enfoque está en formar a los líderes del mañana!</p>
        </div>
        </div>

    </div>
  )
}

export default Hero