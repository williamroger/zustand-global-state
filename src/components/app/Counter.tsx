import { Button } from "../ui/button";
import { useStore } from "../../store";

export function Counter() {
  const counter = useStore((state) => state.counter);
  const increment = useStore((state) => state.increment);

  console.log("Counter render");
  return (
    <>
      <p>Counter: {counter}</p>
      <Button onClick={increment}>Increment</Button>
    </>
  );
}
