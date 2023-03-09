import { useEffect } from 'react'
import { basicAudioSample} from './audioUse/basicAudioSample'


function App() {

  return (
    <div>
      App 
      <button onClick={basicAudioSample}>播放</button>
    </div>
  )
}

export default App
