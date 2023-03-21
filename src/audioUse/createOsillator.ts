/**
 * 
 * The createOscillator() method of the BaseAudioContext interface creates an OscillatorNode, 
 * a source representing a periodic waveform. It basically generates a constant tone
 * 
 */

const context = new AudioContext()

const osc = context.createOscillator()


export default function () {
    osc.frequency.value = 22050;
    console.log('osc frequency maxValue', osc.frequency.maxValue)
    osc.start(0)
    osc.stop(1)
    osc.connect(context.destination)
}