import React from "react";
import { Routes, Route } from "react-router-dom";
import ViewBook from "../Component/ViewBook";
import CreateBook from "../Component/CreateBook";
import UpdateBook from "../Component/UpdateBook";
import BookContainer from "../Component/Bookcontainer";
import DeleteBook from "../Component/Delete";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BookContainer />} />
        <Route path="/view/:id" element={<ViewBook />} />
        <Route path="/cretebook" element={<CreateBook />} />
        <Route path="/update/:id" element={<UpdateBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
