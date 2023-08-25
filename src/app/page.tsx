import SignInButton from "@/components/SignInButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextAuth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const sessoin = await getAuthSession();
  if (sessoin?.user) {
    redirect('/dashboard')
  }
  return (
    <div className=" absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>WELCOME TO QUIZMIFY</CardTitle>
          <CardDescription>
            Quizmify is a App that Lets You to Play Quizz and Learn with Your
            Friends
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign In with Google" />
        </CardContent>
      </Card>
    </div>
  );
}
