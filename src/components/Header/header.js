import React, { useState, useEffect, useMemo} from 'react';
import './header.css';
import headerVideo from '../../video/test_header.mp4';

function Header() {
    const WORDS_IN_ARRAY = useMemo(() => ['Gaming', 'Innovation', 'Community', 'Integrity', 'Artistry', 'Adventure', 'Challenge', 'Storytelling', 'Craftsmanship', 'Imagination', 'Unity'], []);
    const [displayedText, setDisplayedText] = useState('');
    const [currentWord, setCurrentWord] = useState(WORDS_IN_ARRAY[0]);
    const [showCursor, setShowCursor] = useState(true);
    const [isRemoving, setIsRemoving] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
    const [waitAfterAdding, setWaitAfterAdding] = useState(false);
    const [lastUpdate, setLastUpdate] = useState(Date.now());

    // Typewriter Effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            // Only toggle the visibility of the cursor when not adding letters (i.e., when either removing letters or idle)
            if (!isRemoving && displayedText.length === currentWord.length) {
                if (Date.now() - lastUpdate > 1000) {
                    setShowCursor(show => !show);
                }
            } else {
                // Ensure the cursor is visible while adding letters
                setShowCursor(true);
            }
        }, 530);

        const textUpdate = () => {
            setDisplayedText((prevText) => {
                let newText = prevText;
                if (isRemoving) {
                    if (prevText.length > 0) {
                        newText = prevText.slice(0, -1);
                    } else {
                        setIsRemoving(false);
                        setCurrentWord(WORDS_IN_ARRAY[(textIndex + 1) % WORDS_IN_ARRAY.length]);
                        setTextIndex((index) => (index + 1) % WORDS_IN_ARRAY.length);
                    }
                } else {
                    if (prevText.length < currentWord.length) {
                        newText = currentWord.slice(0, prevText.length + 1);
                    } else {
                        if (!waitAfterAdding) {
                            setWaitAfterAdding(true);
                            setTimeout(() => {
                                setIsRemoving(true);
                                setWaitAfterAdding(false);
                            }, 2000);
                        }
                    }
                }
                if (newText !== prevText) {
                    setLastUpdate(Date.now());
                }
                return newText;
            });
        };

        const textUpdateInterval = setInterval(textUpdate, 150);

        return () => {
            clearInterval(cursorInterval);
            clearInterval(textUpdateInterval);
        };
    }, [currentWord, isRemoving, textIndex, waitAfterAdding, displayedText.length, lastUpdate, WORDS_IN_ARRAY]);
    console.log(showCursor)
    return (
        <div className="header">
            <div className='header-video'>
                <video src={headerVideo} height={'100%'} autoPlay loop muted />
            </div>
            <div className='header-overlay'>
                <div className='typewriter'>
                    <h1>Redefining <span className='word-span'>{displayedText}</span>{showCursor && '|'}<br />beyond mere profit</h1>
                </div>
                <div className='header-content'>
                    <h2>Games By Gamers, For Gamers</h2>
                </div>
            </div>
        </div>
    );
}

export default Header;
