/* eslint-disable react/prop-types */

import character1 from '/character_1.svg';
import character2 from '/character_2.svg';
import character3 from '/character_3.svg';
import character4 from '/character_4.svg';

import { useEffect, useState } from 'react';
import StudentInfo from '../StudentInfo';
import ProgressBar from '../ProgessBar';
import Quote from '../Quote';
import CharacterContainer from '../CharacterContainer';

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
  const currentBackground = backgrounds[currentBackgroundIndex];
  const currentCharacter = chars[currentCharacterIndex];

  return (
    <main className={`flex-grow flex ${currentBackground}`}>
      <StudentInfo student={currentStudent} background={currentBackground} />
      <div className="relative flex flex-col w-1/2 items-center bg-white">
        <Quote />
        <CharacterContainer character={currentCharacter} background={currentBackground} />
        <ProgressBar progress={progress} background={currentBackground} />
      </div>
    </main>
  );
}
