import { useEffect } from 'react'
import { basicAudioSample} from './audioUse/basicAudioSample'


function App() {

  useEffect(() => {
    basicAudioSample()
  }, [])
  return (
    <div>App </div>
  )
}

export default App
