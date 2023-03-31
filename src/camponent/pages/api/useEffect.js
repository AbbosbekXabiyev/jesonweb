import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./card";

function UseEffect() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 md:text-center lg:grid-cols-3 py-7 px-5 gap-[50px]">
      {data.length != 0 &&
        data.map((country) => {
          return (
            <Card
              title={country.title}
              image={country.imageURL}
              description={country.description}
              cena={country.cena}
              id={country.id}
            />
          );
        })}
    </div>
  );
}

export default UseEffect;
