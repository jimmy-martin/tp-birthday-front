import circle from '/circle.svg';
import star from '/star.svg';

import character1 from '/character_1.svg';
// import character2 from '/character_2.svg';
// import character3 from '/character_3.svg';
// import character4 from '/character_4.svg';
import { useEffect, useState } from 'react';

export default function Main() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 20));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main className="flex-grow flex bg-birthday-pink">
      <div className="relative flex flex-col w-1/2 items-center border-r-2 border-black">
        <div>
          <img className="animate-spin-slow relative z-20 my-20" src={circle} alt="random" />
        </div>
        <div
          className="bg-birthday-pink rounded-full absolute z-10 top-20"
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
          <p className="text-6xl">MAXIME RICHET</p>
        </div>
      </div>
      <div className="relative flex flex-col w-1/2 items-center bg-white">
        <div
          className=" bg-white rounded-xl absolute top-6 z-20 pt-12 px-8 border-2 border-black"
          style={{ width: '675px', height: '208px' }}
        >
          <div>
            <p className="font-bold uppercase">
              I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six
              times I've been trusted to take the game-winning shot and missed. I've failed over and
              over and over again in my life. And that is why I succeed.
            </p>
          </div>
          <div className="flex justify-between mt-4">
            <p></p>
            <p className="font-bold uppercase">- Michael Jordan</p>
          </div>
        </div>
        <div
          className=" bg-birthday-pink rounded-xl absolute top-8 left-8 border-2 border-black"
          style={{ width: '675px', height: '208px' }}
        ></div>
        <div
          className="bg-white rounded-xl absolute bottom-28 z-20 flex justify-center items-center border-2 border-black"
          style={{ width: '675px', height: '360px' }}
        >
          <img src={character1} alt="character" />
        </div>
        <div
          className="bg-birthday-pink rounded-xl absolute bottom-24 left-8 border-2 border-black"
          style={{ width: '675px', height: '360px' }}
        ></div>
        <div className="flex items-center space-x-4 absolute bottom-10">
          <div className="text-lg">01</div>
          <div className="h-4 bg-white rounded-full z-20 border-2 border-black" style={{ width: '300px' }}>
            <div
              className="h-3 bg-birthday-pink rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
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
