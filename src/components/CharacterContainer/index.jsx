/* eslint-disable react/prop-types */
export default function CharacterContainer({ character, background }) {
  return (
    <>
      <div
        className={`${background} rounded-xl absolute top-8 left-8 border-2 border-black`}
        style={{ width: '675px', height: '208px' }}
      ></div>
      <div
        className="bg-white rounded-xl absolute bottom-28 z-20 flex justify-center items-center border-2 border-black"
        style={{ width: '675px', height: '360px' }}
      >
        <img src={character} alt="character" />
      </div>
      <div
        className={`${background} rounded-xl absolute bottom-24 left-8 border-2 border-black`}
        style={{ width: '675px', height: '360px' }}
      ></div>
    </>
  );
}
