import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div className="m-5">
      <Button>Add</Button>
      <h1>{session?.user?.image}</h1>
      <h1>{session?.user?.email}</h1>
      <h1>{session?.user?.name}</h1>
    </div>
  );
}
