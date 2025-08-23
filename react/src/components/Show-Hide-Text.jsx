import { useState } from 'react';

export default function ShowHideText() {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <button onClick={handleClick} className="bg-red-400 px-3 py-1 rounded-md">
        {isShow ? 'Click to hide text' : 'Click to show text'}
      </button>
      {isShow ? <ShowText /> : <HideText />}
    </div>
  );
}

function HideText() {
  return <p>Hide Text</p>;
}

function ShowText() {
  return <p>Show Text</p>;
}
