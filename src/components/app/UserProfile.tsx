import { useStore } from "@/store";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";

export function UserProfile() {
  const user = useStore((state) => state.user);
  const form = useForm({
    defaultValues: {
      username: user.username,
    },
  });
  const updateUsername = useStore((state) => state.updateUsername);

  console.log("UserProfile render");

  const handleSubmit = form.handleSubmit((formData) => {
    console.log("Submitting", formData);
    updateUsername(formData.username);
  });

  return (
    <div className="flex flex-col items-center mt-4">
      <h1>User Profile</h1>
      <p>This is the user profile component.</p>
      <strong>
        <em>{user.username}</em>
      </strong>
      <div>
        <Input placeholder="@username" {...form.register("username")} />
        <Button className="ml-2" onClick={handleSubmit}>
          Update Username
        </Button>
      </div>
    </div>
  );
}
