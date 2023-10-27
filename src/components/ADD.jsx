import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addto } from "./Slice";

const ADD = () => {
  const dispatch = useDispatch();

  const [input, setinput] = useState("");

  const addhandler = (e) => {
    e.preventDefault();
    if (input.length > 12) {
      dispatch(addto(input));
    } else {
      alert("Write something");
    }
  };

  return (
    <div>
      <form onSubmit={addhandler} className="w-100 p-2" >
        <div className="px-5 pt-3 d-flex">
         <div style={{width:"1220px"}}>
         <input
            type="email"
            className="form-control  text-center p-2 "
            placeholder="Enter your Email"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          ></input>
         </div>
          <div className="px-3">
            <button type="submit" className="btn btn-primary px-5 ">
              ADD
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ADD;
