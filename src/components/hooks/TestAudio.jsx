import { useRef } from "react";
import Music from "./Music";

const TestAudio = (props) => {
    const audioRef = useRef(null);

    const handlePlay = () => {
        audioRef.current.play();
    }

    const handleStop = () => {
        audioRef.current.pause();
    }

    return (
        <div>
            <Music ref={audioRef} />
            <button onClick={() => handlePlay()}>
                Play
            </button>
            <></> <></>
            <button onClick={() => handleStop()}>
                Stop
            </button>
        </div>
    )
}

export default TestAudio;