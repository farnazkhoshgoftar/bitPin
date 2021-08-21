import React from "react";
import { useHistory } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

import "./pagination.css";

const MyPagination = () => {
  const history = useHistory();

  let active = 1;
  let items = [];
  for (let number = 1; number <= 6; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => changePage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  const changePage = (pageNumber) => {
    history.push(`/pages/${pageNumber}`);
  };
  return (
    <div className="pagination">
      <Pagination>{items}</Pagination>
    </div>
  );
};

export default MyPagination;
