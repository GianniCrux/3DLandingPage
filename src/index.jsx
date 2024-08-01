import { Suspense, useState } from "react";

import { FadeIn, LeftMiddle } from "./layout/styles";
import Overlay from "./layout/overlay";
import Lemons from "./Lemon";

export default function App() {
    const [speed, set] = useState(1)
    return (
        <>
        <Suspense>
            <Lemons speed={speed} />
            <FadeIn />
        </Suspense>
        <Overlay />
        <LeftMiddle>
        <input type="range" min="0" max="10" value={speed} step="1" onChange={(e) => set(e.target.value)} />
        </LeftMiddle>
        </>
    )
}