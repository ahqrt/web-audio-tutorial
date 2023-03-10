const audioCtx = new AudioContext()
const gainNode = audioCtx.createGain()

export function gainNodeSample() {
    fetch('/another-person.mp3')
        .then(r => r.arrayBuffer())
        .then(arrayBuffer => {
            audioCtx.decodeAudioData(arrayBuffer, (audioBuffer) => {
                //  you can play the audioBuffer directly
                playBuffer(audioBuffer)
            })
        })
}

function playBuffer(audioBuffer: AudioBuffer) {
    // createBufferSource is used to play audio data contained within an AudioBuffer object
    const sourceNode = audioCtx.createBufferSource()
    sourceNode.buffer = audioBuffer
    // audioCtx.destination representing the final destination of all audio in the context
    // It can be thought of as the audio-rendering device.
    // It is from the BaseAudioContext

    // AudioNode.connect 
    sourceNode.connect(gainNode)
    gainNode.connect(audioCtx.destination)
    sourceNode.start(0)
}

export function mutePlay() {
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime)
}

export function unMutePlay() {
    gainNode.gain.setValueAtTime(1, audioCtx.currentTime)
}