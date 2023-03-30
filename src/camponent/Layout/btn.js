function Btn(props) {
  return (
    <button className=" text-white  font-light text-[14px] font-body py-[4px]  px-[14px] rounded-[40px] bg-[#c94052] shadow-[5px 5px 10px rgba(170, 170, 204, 0.25), 10px 10px 20px rgba(170, 170, 204, 0.5);]">
      {props.text}
    </button>
  );
}

export default Btn;
