import { Counter } from "./components/app/Counter";
import { UserProfile } from "./components/app/UserProfile";

export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Counter />
      <UserProfile />
    </div>
  );
}
