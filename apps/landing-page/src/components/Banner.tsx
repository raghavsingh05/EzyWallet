import Link from "next/link";

export const Banner = () => {
  return <div className="py-3 text-center bg-gradient-to-r from-pink-200/70 via-blue-200/70 to-yellow-200/70">
  <div className="container">
    <p className="font-medium">
      <span className="hidden sm:inline">Introducing a lightweight online wallet - </span>
      <Link href="http://localhost:3001" passHref className="underline underline-offset-4 ">
      Explore the demo </Link></p>
  </div>
  </div>
};
