/* eslint-disable react/prop-types */
import circle from '/circle.svg';
import star from '/star.svg';

export default function StudentInfo({ student, background }) {
  return (
    <div className="relative flex flex-col w-1/2 items-center border-r-2 border-black">
      <div>
        <img className="animate-spin-slow relative z-20 my-20" src={circle} alt="random" />
      </div>
      <div
        className={`${background} rounded-full absolute z-10 top-20`}
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
          {student?.firstname} {student?.lastname}
        </p>
      </div>
    </div>
  );
}
