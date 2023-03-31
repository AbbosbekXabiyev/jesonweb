import { Link } from "react-router-dom";
import Layout from "../../Layout";
import Build from "./build";
import Finger from "./finger";
import Inputdiv from "./inputdiv";
import Producs from "./producs";
import Technalogik from "./technalogik";

function HomeRoute() {
  return (
    <Layout>
      <div className="font-body bg-[rgb(243,242,242)] pb-[200px]">
        <Link />
        <Finger />
        <Technalogik />
        <Build />
        <Producs />
        <Inputdiv />
      </div>
    </Layout>
  );
}

export default HomeRoute;
