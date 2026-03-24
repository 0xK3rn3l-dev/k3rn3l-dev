import { useState, useEffect } from 'react';

function useTypingText(words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500) {
    const [displayText, setDisplayText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        
        const timer = setTimeout(() => {
            if (!isDeleting) {
                
                if (displayText.length < currentWord.length) {
                    setDisplayText(currentWord.slice(0, displayText.length + 1));
                } else {
                    setIsDeleting(true);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);
        
        if (!isDeleting && displayText === currentWord) {
            const pauseTimer = setTimeout(() => {
                setIsDeleting(true);
            }, pauseTime);
            return () => clearTimeout(pauseTimer);
        }
        
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

    return displayText;
}

export default useTypingText;