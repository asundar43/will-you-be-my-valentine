"use client";
import { useState } from "react";
import './App.css';

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    setYesPressed(true);
    setBackgroundImage('url(/104_0231%202.jpg)');
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a cherry on top",
      "What about a brown sugar cold foam espresso",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to aadhav's ghost",
      "please ashy",
      ":((((",
      "PRETTY PLEASE",
      "💀",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div 
      className="-mt-16 flex h-screen flex-col items-center justify-center" 
      style={{ 
        backgroundImage: yesPressed ? backgroundImage : 'none', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        fontSize: '2rem',
        textShadow: 'none',
      }}
    >
      {yesPressed ? (
        <div className="my-4 font-bold tiktok-text">
          <div style={{ marginBottom: '40%' }}>YAYYY!!!</div>
          <div style={{ marginTop: '20%' }}>I love you pookie!!</div>
        </div>
      ) : (
        <>
          <img
            className="centered-image h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl tiktok-text">HII ASHNA!!!</h1>
          <h1 className="my-4 text-4xl tiktok-text">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              <span className="tiktok-text">Yes</span>
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              <span className="tiktok-text">{noCount === 0 ? "No" : getNoButtonText()}</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
