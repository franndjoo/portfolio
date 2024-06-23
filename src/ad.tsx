import {JSX, Show, createSignal} from "solid-js";
import {Motion} from "solid-motionone";

interface TimelineElement {
    children: JSX.Element;
    duration: number;
    onStart: () => void;
}

function Timeline(props: {tl: TimelineElement[]}) {
    let cumulativeWait = 2500;

    return <div style={{
        background: "var(--background)",
        height: "100vh",
        width: "100%",
        display: "flex",
        "align-items": "center",
        "justify-content": "center"
    }}>
        {props.tl.map(c => {
            cumulativeWait += c.duration;
            setTimeout(() => c.onStart(), cumulativeWait);
            return c.children;
        })}
    </div>
}

function Scene(duration: number, children: JSX.Element): TimelineElement {
    const [show, setShow] = createSignal(false);

    return {
        children: <Show when={show()}>{children}</Show>,
        duration: duration,
        onStart() {
            setShow(true);
            setTimeout(() => setShow(false), duration);
        },
    }
}

export const Ad = () => <Timeline tl={[
    Scene(2500, <div style={{display: "flex", gap: "10px"}}>
        {"ARE YOU LOOKING FOR A DEVELOPER ?".split(" ").map((w, i) => {
            return <Motion.h2
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    duration: 1 / 7 * 2500,
                    delay: i * (1 / 7 * 2500)
                }}
            >{w}</Motion.h2>
        })}
    </div>),
    Scene(2500, <div style={{display: "flex", gap: "10px"}}>
        {"BECAUSE YOU FOUND ONE".split(" ").map((w, i) => {
            return <Motion.h2
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    duration: 1 / 7 * 2500,
                    delay: i * (1 / 7 * 2500)
                }}
            >{w}</Motion.h2>
        })}
    </div>),

]} />
