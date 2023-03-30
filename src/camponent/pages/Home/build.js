function Build() {
  return (
    <div className="grid mt-[200px] grid-cols-1 gap-[150px] md:grid-cols-2 px-[10px] md:pr-24">
      <div className="mt-[40px]">
        <img src="/internet.png" />
      </div>
      <div>
        <p className="text-center  text-myGray font-normal text-[36px]">
          we build future
        </p>
        <div className="flex flex-col mt-[40px] gap-[70px]">
          <Flex
            rasm="/nishon.png"
            Sarlovha="Our Mission & Vision "
            text="As experienced professionals in the field of software development, user experience, and marketing performance, we are aware of the hard work, dedication, and overall diligence required to prosper in modern-day business."
          />
          <Flex
            rasm="/doska.png"
            Sarlovha=" Our Approach "
            text="As a result, we offer our clients with the development of CRM cloud systems, bespoke website development and design, project and R&D management, custom development, and system integration."
          />
        </div>
      </div>
    </div>
  );
}

export default Build;

function Flex(props) {
  return (
    <div className="flex gap-[50px]">
      <img className=" mt-0 ml-0 w-[89px] h-[89px]" src={props.rasm} />
      <div>
        <h1 className="font-bold text-[21px] text-myBlack ">
          {props.Sarlovha}
        </h1>
        <p className="text-myBlack font-normal text-[12px] md:text-[18px]">
          {props.text}
        </p>
      </div>
    </div>
  );
}
