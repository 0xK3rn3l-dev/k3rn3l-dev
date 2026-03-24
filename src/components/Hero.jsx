import { useState, useEffect } from 'react';
import '../styles/Hero.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const nicknames = ["0xK3rn3l", "Developer"];


function Hero() {
    const [displayText, setDisplayText] = useState('');
    const [nicknameIndex, setNicknameIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const [heroRef, heroVisible] = useScrollAnimation();

    useEffect(() => {
        const timer = setInterval(() => {
            const currentName = nicknames[nicknameIndex]
            
            if (!isDeleting) {
                if (displayText.length < currentName.length) {
                    const nextText = currentName.slice(0, displayText.length + 1);
                    setDisplayText(nextText);
                }
                else {
                    setIsDeleting(true)
                }
            } else {
                if (displayText.length > 0) {
                    const nextText = displayText.slice(0, -1);
                    setDisplayText(nextText);
                
                } else {
                    setNicknameIndex(prev => {
                        const next = prev + 1;
                        if (next >= nicknames.length) {
                            return 0;
                        }
                        return next;
                    });
                    setIsDeleting(false)
                }
  
            }
        }, 100);
        return () => clearInterval(timer);
    }, [displayText,nicknameIndex,isDeleting]);

    return (
        <>
            <div
              ref={heroRef} 
              className={`hero-content-animate ${heroVisible ? 'show' : ''}`}>
                <h1>Who Im I?</h1>
                <h1 className="hero-title">Im {displayText}</h1>
                <hr></hr>
                <h2>About me:</h2>
                <p>Im enthusiast who like programming and learn how things work in real world</p>
                <p>I have expiriens in web applications, backend and frontend, im not professional, <b>but truly want to will be</b></p>
                <p>Also sometimes research deep level, recent time i started to learn MASM32</p>
                <p>So, i love to study and understand new things</p>
                <p>I also like VideoGames</p>
                <hr></hr>
                <br />

                <h2>My stack:</h2>
                <div className="stack-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width="40" height="40"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40" height="40"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" alt="NestJS" width="40" height="40"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="NextJS" width="40" height="40"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" width="40" height="40"/>
                </div>
            </div>       
        </>
    )
}

export default Hero;