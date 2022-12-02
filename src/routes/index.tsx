// import Counter from "~/components/Counter";
import {unstable_island} from "solid-start";

const Counter = unstable_island(() => import("../components/Counter"));

export default function Home() {
    return (
        <main>
            <Counter/>
        </main>
    );
}
