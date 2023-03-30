import { Link } from "react-router-dom";
import Layout from "../../Layout";
import Coffe from "./coffe";
import Digital from "./digital";
import Tich from "./ticher";

function AboutRoute() {
  return (
    <Layout>
      <div className="font-body bg-[hsl(180,19%,95%)]">
        <Link />
        <Coffe />
        <Tich />
        <Digital />
      </div>
    </Layout>
  );
}

export default AboutRoute;
