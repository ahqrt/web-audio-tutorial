const audioCtx = new AudioContext()

export function basicAudioSample() {
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
    const sourceNode = audioCtx.createBufferSource()
    sourceNode.buffer = audioBuffer
    sourceNode.connect(audioCtx.destination)
    sourceNode.start(0)
}