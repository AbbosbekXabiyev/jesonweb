import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Inputdiv() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [namber, setNamber] = useState("");
  const navigate = useNavigate();
  const onSend = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(password);
    console.log(namber);
    navigate("/home");
  };
  return (
    <div className="grid grid-cols-1 my-[100px] md:grid-cols-2 md:mx-[300px] mx-[10px] rounded-[40px] shadow-sm opacity-90 bg-white max-w-3xl m-auto">
      <div className=" text-black max-w-2xl m-auto px-[5%]">
        <Link />
        <form onSubmit={onSend}>
          <label className="border-black">
            <p>name:</p>
            <input
              type="text"
              className="bg-[#F5F5FA] w-[80%] pl-4 justify-center rounded-[10px]  text-black"
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <br />
          <br />
          <label>
            <p>login:</p>
            <input
              type="password"
              className="bg-[#F5F5FA] w-[80%] pl-4 rounded-[10px] text-black"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <br />
          <br />
          <label>
            <p>namber :</p>
            <input
              type="namber"
              className="bg-[#F5F5FA] w-[80%] pl-4 rounded-[10px] text-black"
              value={namber}
              placeholder={"+998991234567"}
              required
              onChange={(e) => {
                setNamber(e.target.value);
              }}
            />
          </label>
          <br />
          <input
            type="submit"
            value="Send message"
            className="bg-[#c94052] mt-4 ml-[10%] md:ml-[60%] rounded-[10px]    text-white  px-2"
          />
        </form>
      </div>
      <div className="md:flex hidden">
        <img src="/input1.png" />
      </div>
    </div>
  );
}
export default Inputdiv;
