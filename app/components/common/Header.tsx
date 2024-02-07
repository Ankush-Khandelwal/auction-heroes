import Links from "./Links";
import Logo from "./Logo";

export default function Header() {
  return (
    <>
      <div className="flex justify-between px-8 py-4 shadow-md">
        <Logo />
        <Links />
      </div>
    </>
  );
}
