import { useRef } from 'react';
import './App.css';

function App() {
  const videoRef = useRef(null);

  function handlePause() {
    if (!videoRef.current.paused) {
      videoRef.current.pause();
    }
  }

  function handlePlay() {
    if (videoRef.current.paused) {
      videoRef.current.play();
    }
  }

  console.log( videoRef.current?.paused);

  return (
    <div className='v_container'>
      <video ref={videoRef}>
        <source src="/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>

      <section className='btn'>
        <button className='bb' onClick={handlePause}>Pause</button>
        <button className='bb' onClick={handlePlay}>Play</button>
      </section>
    </div>
  );
}

export default App;
