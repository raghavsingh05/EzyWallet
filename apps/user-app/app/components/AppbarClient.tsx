"use client";
import { Appbar } from "@repo/ui/appbar";
import { ProgressBar } from "@repo/ui/progressbar"; // Adjust the path as necessary
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function AppbarClient() {
  const session = useSession();
  const router = useRouter();

  return (
    <div>
      <Appbar
        onSignin={signIn}
        onSignout={async () => {
          await signOut();
          router.push("/api/auth/signin");
        }}
        user={session.data?.user}
      />
      <ProgressBar />
    </div>
  );
}
