import React from "react";
import { Routes, Route } from "react-router-dom";

import ViewBook from "../Component/ViewBook";
import CreateBook from "../Component/CreateBook";
import UpdateBook from "../Component/UpdateBook";
import BookList from "../Component/Booklist";
import BookContainer from "../Component/Bookcontainer";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/view/:id" element={<ViewBook />} />
        <Route path="/cretebook" element={<CreateBook />} />
        <Route path="/update/:id" element={<UpdateBook />} />
        <Route path="/" element={<BookContainer />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
