function Producs() {
  return (
    <div className="mt-[200px]">
      <p className="text-myGray mb-[67px]  font-light text-[36px] ml-[10px] md:ml-16 ">
        Our products
      </p>
      <div className="grid px-[10px] grid-cols-1 gap-[80px] md:grid-cols-3 md:px-[120px]">
        <GridTwo
          rasm="/bir.png"
          ppp="Lorem ipsum dolor sit amet"
          sarlavha="System Integration"
          text="In today’s digital world, the ability to effectively integrate across different systems, data sources, and channels is fundamental. Indium technologies has a long history of successfully and efficiently integrating a variety of client-based systems"
          aaa="READ MORE"
        />
        <GridTwo
          rasm="/ikki.png"
          ppp="Lorem ipsum dolor sit amet"
          sarlavha="IT Services"
          text="While you focus on delivering the best products or services you can to your customers, we provide the support you need to keep up with industry demands and emerging trends"
          aaa="READ MORE"
        />
        <GridTwo
          rasm="/uch.png"
          ppp="Lorem ipsum dolor sit amet"
          sarlavha="Process Optimization"
          text="Improve efficiencies by leveraging methodology and productivity tools. Re-energize workforce management to identify saving opportunities, optimize contacts or enhance front-/back-office productive output"
          aaa="READ MORE"
        />
      </div>
    </div>
  );
}

export default Producs;

function GridTwo(props) {
  return (
    <div>
      <div className="bg-myGray rounded-[15px] h-[204px] items-center">
        <img
          className="h-[100px] max-w-3xl m-auto pt-[20px]"
          src={props.rasm}
        />
        <p className="text-white font-normal text-center pt-[20px] text-[14px]">
          {props.ppp}
        </p>
      </div>
      <div className="">
        <h1 className="font-light text-[27px] text-myGray text-center">
          {props.sarlavha}
        </h1>
        <p className="text-[18px] fond-normal text-myGray">{props.text}</p>
        <a className="text-myRed h-screen fond-light text-[14px] ">
          {props.aaa}
        </a>
      </div>
    </div>
  );
}
