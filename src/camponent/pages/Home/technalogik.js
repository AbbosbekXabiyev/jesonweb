import Btn from "../../Layout/btn";

function Technalogik() {
  return (
    <div className="px-[10px] md:pl-24">
      <p className="text-myGray text-[36px] font-normal">who we are</p>
      <div className="mt-[40px] grid grid-cols-1 gap-[97px]  md:grid-cols-2 ">
        <Gridone />
        <img src="/noutbook.png" />
      </div>
    </div>
  );
}

export default Technalogik;

function Gridone() {
  return (
    <div>
      <h1 className="text-myRed  font-[700px] text-[36px] ">
        Technology investments as a differentiator
      </h1>
      <p className="my-[30px] text-myBlack not-italic font-[400px] text-[14px] md:text-[21px]">
        No forced partnership technology here. We focus on the right solution to
        drive our clients’ business forward and employ a technology-agnostic
        approach for all needed stages of the activity cycle, allowing access to
        current, robust, and advanced solutions. Paramount to this is ensuring
        the security and compliant use of all information. In the end, it’s not
        just technology; we ensure our methodologies, staff, industry knowledge,
        and governance align with the technology to drive the right client
        results.
      </p>
      <Btn text="Get Started" />
    </div>
  );
}
