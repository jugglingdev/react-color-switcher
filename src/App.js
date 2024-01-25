import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('')
  console.log(color, setColor)
  return (
    <div className={'react-root ' + color}>
      <div className='centered'>
        <h1>Color Picker</h1>
        <button className='red' onClick={() => setColor('red')}>red</button>
        <button className='blue' onClick={() => setColor('blue')}>blue</button>
        <button className='yellow' onClick={() => setColor('yellow')}>yellow</button>
      </div>
    </div>
  );
}

export default App;
