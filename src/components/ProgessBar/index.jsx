/* eslint-disable react/prop-types */
export default function ProgressBar({ progress, background }) {
  return (
    <div className="flex items-center space-x-4 absolute bottom-10">
      <div className="text-lg">01</div>
      <div
        className="h-4 bg-white rounded-full z-20 border-2 border-black"
        style={{ width: '300px' }}
      >
        <div
          className={`${background} h-3 rounded-full transition-all duration-100`}
          style={{ width: `${(progress / 50) * 100}%` }}
        ></div>
      </div>
      <div
        className="absolute rounded-full bg-black h-4 -bottom-0.5 left-3"
        style={{ width: '300px' }}
      ></div>
      <div className="text-lg">05</div>
    </div>
  );
}
