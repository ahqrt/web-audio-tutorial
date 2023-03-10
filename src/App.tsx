import { useEffect } from 'react'
// import { basicAudioSample} from './audioUse/basicAudioSample'
import { gainNodeSample, mutePlay, unMutePlay } from './audioUse/gainNode';

function App() {

  return (
    <div>
      App 
      {/* <button onClick={basicAudioSample}>播放</button> */}
      <button onClick={gainNodeSample}>play</button>
      <button onClick={mutePlay}>mute</button>
      <button onClick={unMutePlay}>unmute</button>
    </div>
  )
}

export default App
