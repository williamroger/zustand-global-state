import { Button } from "./components/ui/button";
import { useStore } from "./store";

export function App() {
  const counter = useStore((state) => state.counter);
  const increment = useStore((state) => state.increment);

  return (
    <div>
      <p>Counter: {counter}</p>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}
