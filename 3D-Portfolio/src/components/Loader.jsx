import {Html, useProgress} from '@react-three/drei';

const Loader = () => {
  {/* allows the canvas to reappear everytime users reload the page */}
  const {progress} = useProgress();

  return (
    <Html>
      <span className ="canvas-load"></span>
      <p  
        styles ={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40
        }}
        >{progress.toFixed(2)}%</p>
    </Html>
   
  )
}

export default Loader