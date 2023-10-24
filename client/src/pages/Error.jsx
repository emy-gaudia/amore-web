import React from "react";
import notfound from "../assets/svg/notfound.svg";

export default function Error() {
  const style = {
    alignContent: "center",
    padding: "5rem 5rem",
    justifyContent: "center",
  };
  return (
    <div style={style} className="flex">
      <img src={notfound} alt="404" width="60%" />
    </div>
  );
}
