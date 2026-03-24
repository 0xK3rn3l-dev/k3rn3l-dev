import useScrollAnimation from '../hooks/useScrollAnimation';
import useTypingText from '../hooks/useTypingText';
import '../styles/Hero.css';


const nicknames = ["0xK3rn3l", "Developer"];

function Hero() {
    const [heroRef, heroVisible] = useScrollAnimation();
    const displayText = useTypingText(nicknames, 100, 50, 100);

    return (
        <>
            <div
              ref={heroRef} 
              className={`hero-content-animate ${heroVisible ? 'show' : ''}`}>
                <h1>Who Im I?</h1>
                <h1 className="hero-title">Im {displayText}</h1>
                <hr></hr>
                <h2>About me:</h2>
                <p>Im an enthusiast who likes programming and learning how things work in real world.</p>
                <p>I have experience in web applications, both backend and frontend. I'm not a professional yet, <b>but i truly want to be</b></p>
                <p>Sometimes I also research low-level stuff, like MASM32</p>
                <p>So, i love to study and understand new things</p>
                <p>I also like video games</p>
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