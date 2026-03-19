import React from "react";

function Pagination() {
  return (
    <div className="pagination" style={{color: "black"}}>
      <span>{"<"}</span>
      <span className="active">1</span>
      <span>2</span>
      <span>3</span>
      <span>...</span>
      <span>12</span>
      <span>{">"}</span>
    </div>
  );
}

export default Pagination;