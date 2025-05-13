import './App.css'
import ViewBox from './components/PercentView'
import { useState } from 'react';

const App = () => {
  const [rangeValue, setRangeValue] = useState(100) 
  const initialValue: number = 50;

  console.log(rangeValue, setRangeValue)

  return (
    <>  
      <div>
        <input type="range" min={0} max={200} onChange={(e) => setRangeValue(parseInt(e.target.value))} defaultValue={initialValue} />
      </div>
      <ViewBox value={rangeValue} max={200} makeColor={(p) => `hsl(${p*100}, 100%, 50%)`} />
    </>
  )
}

export default App
