import { HandMetal } from "lucide-react";
import Link from "next/link"
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <div className="bg-gray-400 w-full py-4 fixed z-10 top-0">
      <div className="flex items-center justify-between container mx-auto">
        <Link href="/">
          <HandMetal />
        </Link>
        <Link className={buttonVariants()} href="/sign-in">Sign in</Link>
      </div>
    </div>
  );
}

export default Navbar
