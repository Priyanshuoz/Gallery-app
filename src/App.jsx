import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Button from "./components/Button";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=18`,
    );
    setUserData(data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h2 className="text-gray-300 text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold">
      Loading...
    </h2>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (ele, idx) {
      return <Card ele={ele} idx={idx} key={idx}/>;
    });
  }

  return (
    <div className="bg-black h-screen px-12 py-8 text-white overflow-auto">
      <div className="flex flex-wrap min-h-[700px] gap-5 mb-5">
        {printUserData}
      </div>
      <div className="flex justify-center gap-4 items-center ">
        <Button
          btn="Prev"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([])
            }
          }}
        />
        <h3>Page {index}</h3>
        <Button
          btn="Next"
          onClick={() => {
            setIndex(index + 1);
            setUserData([])
          }}
        />
      </div>
    </div>
  );
};

export default App;
