import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.home);

  const postingData = () => {
    dispatch({
      type: "POST",
      payload: [
          {
              id: 1,
              name: "kaos tangkorak",
              price: 6000
          }
        ],
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <h5>{data[0]?.name}</h5>
      <button onClick={postingData}>posting data</button>
    </div>
  );
};

export default Index;
