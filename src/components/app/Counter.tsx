import { Button } from "../ui/button";
import { useStore } from "../../store";
import { useShallow } from "zustand/shallow";

export function Counter() {
  const { counter, increment } = useStore(
    useShallow((state) => ({
      counter: state.counter.value,
      increment: state.counter.increment,
    })),
  );

  console.log("Counter render");
  return (
    <>
      <p>Counter: {counter}</p>
      <Button onClick={increment}>Increment</Button>
    </>
  );
}
