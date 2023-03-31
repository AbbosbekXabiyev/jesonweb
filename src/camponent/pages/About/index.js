import { Link } from "react-router-dom";
import Layout from "../../Layout";
import Coffe from "./coffe";
import Digital from "./digital";
import Product from "./product";
import Tich from "./ticher";

function AboutRoute() {
  return (
    <Layout>
      <div className="font-body bg-[hsl(180,19%,95%)] pb-[200px]">
        <Link />
        <Coffe />
        <Tich />
        <Digital />
        <Product />
      </div>
    </Layout>
  );
}

export default AboutRoute;
