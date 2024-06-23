import { renderer as ThreeScene } from "./three";

export function Home() {
    return <div style={{
        width: "100%",
        height: "100dvh",
        background: "var(--background)",
    }}>
        <div style={{
            position: "absolute", 
            bottom: "0%",
            padding: "30px"
        }}>
            <div>
                {ThreeScene.domElement} 
            </div>
            <div>
                <a href="https://linkedin.com/in/jhnm">LinkedIn</a>
                <a href="https://github.com/johanmontorfano">Github</a>
                <a href="mailto:me@johanmontorfano.com">Contact</a>
            </div>
        </div>
    </div>
}


