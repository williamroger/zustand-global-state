import { Button } from "./components/ui/button";
import { useStore } from "./store";

export function App() {
  const { counter, increment } = useStore();

  return (
    <div>
      <p>Counter: {counter}</p>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}
