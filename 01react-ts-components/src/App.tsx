import './App.css'
import ViewBox from './components/PercentView'
// type ArrowType = (x: number) => number

// const arrow1:ArrowType = (x) => x + 1

// const arrow2:ArrowType = (x) => (
//   x + 3
// )

// const arrow3:ArrowType = (x) => { 
//   x = 2; 
//   return (
//     x + 1
//   ) 
// }

const App = () => {

  return (
    <>
      <ViewBox value={50} max={200} makeColor={(p) => `hsl(${p*100}, 100%, 50%)`} />
      <ViewBox value={100} max={200} makeColor={(p) => `hsl(${p*100}, 100%, 50%)`} />
      <ViewBox value={200} max={200} makeColor={(p) => `hsl(${p*100}, 100%, 50%)`} />
    </>
  )
}

export default App
