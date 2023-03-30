function Digital() {
  return (
    <div className="px-[10px] md:pr-24">
      <div className="mt-[40px] grid grid-cols-1 gap-[97px]  md:grid-cols-2 ">
        <img src="/tichch.png" />
        <div>
          <p className="text-myGray text-[36px] text-end font-normal">
            we are tech
          </p>
          <Gridone />
        </div>
      </div>
    </div>
  );
}

export default Digital;

function Gridone() {
  return (
    <div>
      <h1 className="text-myRed  font-[700px] text-[36px] ">
        Lorem ipsum dolor sit amet sit amet
      </h1>
      <p className="my-[30px] text-myBlack not-italic font-[400px] text-[14px] md:text-[21px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>
  );
}
