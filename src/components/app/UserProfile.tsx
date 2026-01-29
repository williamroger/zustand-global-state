import { useStore } from "@/store";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { useShallow } from "zustand/shallow";

export function UserProfile() {
  const { user, updateUsername } = useStore(
    useShallow((state) => ({
      user: state.user,
      updateUsername: state.updateUsername,
    })),
  );

  const form = useForm({
    defaultValues: {
      username: user.username,
    },
  });

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
