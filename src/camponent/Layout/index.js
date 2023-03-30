import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <div>
      <Header />
      <section>
        <div className="max-full mx-auto ">{props.children}</div>
      </section>
      <Footer />
    </div>
  );
}

export default Layout;
