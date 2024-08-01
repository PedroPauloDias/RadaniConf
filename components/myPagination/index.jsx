import React from "react";
import {Pagination } from "@nextui-org/react";


export default function MyPagination({ totalPages, currentPage, onPageChange }) {
  

  console.log("MyPagination currentPage: " , currentPage)

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber); // Chama a função de mudança de página passada como prop
  };

  return (
    <div className="w-full flex items-center justify-center mt-4">
    <Pagination
      showShadow
      color="warning"
      total={totalPages}
      initialPage={currentPage}
      onChange={handlePageClick} // Captura o evento de mudança de página
    />
  </div>
  );
}
