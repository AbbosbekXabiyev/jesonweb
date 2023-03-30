import Btn from "../../Layout/btn";

function Finger() {
  return (
    <>
      <img src="/fingres.png"></img>
      <div className="md:flex flex-col mb-10px text-center justify-center items-center  py-[329px]  mt-[-750px] hidden ">
        <h1 className="text-myRed  font-[700px] text-[36px] ">
          DISCOVER A WORLD OF OPPORTUNITIES
        </h1>
        <p className=" font-[400px] mb-5  text-[21px]  w-[954px] text-white">
          We empower a diverse IT service-oriented workforce where strong
          individuals are unified by a clear common purpose to deliver
          excellence and high level of customer satisfaction.
        </p>
        <Btn text="Get Started" />
      </div>
    </>
  );
}

export default Finger;
