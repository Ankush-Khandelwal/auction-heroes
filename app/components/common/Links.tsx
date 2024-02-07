import Link from "next/link";

export default function Links() {
  return (
    <>
      <div>
        <ul className="flex gap-8">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/about"}>
            <li>About Us</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact Us</li>
          </Link>
          <Link href={"/dashboard"}>
            <li>Dashboard</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
