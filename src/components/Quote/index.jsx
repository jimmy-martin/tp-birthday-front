export default function Quote() {
  return (
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
  );
}
