import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex space-x-2 text-xl justify-center items-center py-8">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
    </div>
  );
}
export default Header;
