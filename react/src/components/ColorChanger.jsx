import { useState } from 'react';

const ColorChanger = () => {
  const [color, setColor] = useState('pink');

  const handleChange = () => {
    if (color === 'pink') {
      setColor('blue');
    } else if (color === 'blue') {
      setColor('green');
    } else {
      setColor('pink');
    }
  };

  return (
    <div>
      <h1 className={`bg-${color}-400 w-50 h-50`}></h1>
      <button onClick={handleChange} className="bg-red-400 px-3 py-1">
        Change
      </button>
    </div>
  );
};
export default ColorChanger;
