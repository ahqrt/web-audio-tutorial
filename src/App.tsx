import { useEffect } from 'react'
// import { basicAudioSample} from './audioUse/basicAudioSample'
// import { gainNodeSample, mutePlay, unMutePlay } from './audioUse/gainNode';
// import { stereoPannerNodeSample } from './audioUse/stereoPannerNode';

import createOsillator from "./audioUse/createOsillator";

function App() {

  return (
    <div>
      App
      {/* <button onClick={basicAudioSample}>播放</button> */}

      {/* <button onClick={gainNodeSample}>play</button>
      <button onClick={mutePlay}>mute</button>
      <button onClick={unMutePlay}>unmute</button> */}

      {/* <button onClick={stereoPannerNodeSample} >play</button> */}
      <button onClick={createOsillator} >play</button>
    </div>
  )
}

export default App
