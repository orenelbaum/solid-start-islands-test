import { createSignal } from "solid-js";

console.log("hi");
export default function Counter() {
  console.log("Counter");
  const [count, setCount] = createSignal(0);
  return (
    <button
      class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]"
      onClick={() => setCount(count() + 1)}
    >
      Clicks: {count()}
    </button>
  );
}
