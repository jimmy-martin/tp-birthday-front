/* eslint-disable react/prop-types */
import circle from '/circle.svg';
import star from '/star.svg';

import character1 from '/character_1.svg';
import character2 from '/character_2.svg';
import character3 from '/character_3.svg';
import character4 from '/character_4.svg';
import { useEffect, useState } from 'react';

export default function Main({ students }) {
  const [progress, setProgress] = useState(0);
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

  const backgrounds = [
    'bg-birthday-pink',
    'bg-birthday-blue',
    'bg-birthday-yellow',
    'bg-birthday-green',
  ];

  const chars = [character1, character2, character3, character4];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((progress) => (progress === 50 ? 0 : progress + 1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 0) {
      const randomIndex = Math.floor(Math.random() * backgrounds.length);
      setCurrentBackgroundIndex(randomIndex);

      if (currentStudentIndex === students.length - 1) {
        setCurrentStudentIndex(0);
      } else {
        setCurrentStudentIndex(currentStudentIndex + 1);
      }

      setCurrentCharacterIndex((currentCharacterIndex) =>
        currentCharacterIndex === chars.length - 1 ? 0 : currentCharacterIndex + 1
      );
    }
  }, [progress, students.length]);

  const currentStudent = students[currentStudentIndex];
  console.log(students);
  console.log(currentStudentIndex);
  console.log(currentStudent);
  const currentBackground = backgrounds[currentBackgroundIndex];
  const currentCharacter = chars[currentCharacterIndex];

  return (
    <main className={`flex-grow flex ${currentBackground}`}>
      <div className="relative flex flex-col w-1/2 items-center border-r-2 border-black">
        <div>
          <img className="animate-spin-slow relative z-20 my-20" src={circle} alt="random" />
        </div>
        <div
          className={`${currentBackground} rounded-full absolute z-10 top-20`}
          style={{ width: '402px', height: '404px' }}
        ></div>
        <div
          className="bg-black rounded-full absolute top-24 left-40"
          style={{ width: '402px', height: '404px' }}
        ></div>
        <img src={star} alt="star" className="absolute top-24 left-12" />
        <img src={star} alt="star" className="absolute top-36 right-20" />
        <img src={star} alt="star" className="absolute bottom-64 left-12" />
        <div>
          <p className="text-6xl">
            {currentStudent?.firstname} {currentStudent?.lastname}
          </p>
        </div>
      </div>
      <div className="relative flex flex-col w-1/2 items-center bg-white">
        <div
          className=" bg-white rounded-xl absolute top-6 z-20 pt-12 px-8 border-2 border-black"
          style={{ width: '675px', height: '208px' }}
        >
          <div>
            <p className="font-bold uppercase">
              I&apos;ve missed more than 9,000 shots in my career. I&apos;ve lost almost 300 games.
              Twenty-six times I&apos;ve been trusted to take the game-winning shot and missed.
              I&apos;ve failed over and over and over again in my life. And that is why I succeed.
            </p>
          </div>
          <div className="flex justify-between mt-4">
            <p></p>
            <p className="font-bold uppercase">- Michael Jordan</p>
          </div>
        </div>
        <div
          className={`${currentBackground} rounded-xl absolute top-8 left-8 border-2 border-black`}
          style={{ width: '675px', height: '208px' }}
        ></div>
        <div
          className="bg-white rounded-xl absolute bottom-28 z-20 flex justify-center items-center border-2 border-black"
          style={{ width: '675px', height: '360px' }}
        >
          <img src={currentCharacter} alt="character" />
        </div>
        <div
          className={`${currentBackground} rounded-xl absolute bottom-24 left-8 border-2 border-black`}
          style={{ width: '675px', height: '360px' }}
        ></div>
        <div className="flex items-center space-x-4 absolute bottom-10">
          <div className="text-lg">01</div>
          <div
            className="h-4 bg-white rounded-full z-20 border-2 border-black"
            style={{ width: '300px' }}
          >
            <div
              className={`${currentBackground} h-3 rounded-full transition-all duration-100`}
              style={{ width: `${(progress / 50) * 100}%` }}
            ></div>
          </div>
          <div
            className="absolute rounded-full bg-black h-4 -bottom-0.5 left-3"
            style={{ width: '300px' }}
          ></div>
          <div className="text-lg">05</div>
        </div>
      </div>
    </main>
  );
}
