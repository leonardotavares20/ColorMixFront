import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import Grid from "../Grid/Grid";
import PayWith from "../PayWith/PayWith";
import { ContainerPagination, Container, ContainerTitle, Title } from "./style";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import BannerPageCategories from "/assets/bannerCategories.png";

export function Pagination({ products, name, itemsPerPage }) {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(null);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ContainerTitle>
        <Title>
          <div className="bar"></div>
          <div className="title">
            <h1>{name}</h1>
          </div>
        </Title>
      </ContainerTitle>
      <Grid items={currentItems} />
      <Container>
        <ContainerPagination>
          <ReactPaginate
            nextLabel={<IoIosArrowDropright size={35} />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel={<IoIosArrowDropleft size={35} />}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="previous-item"
            previousLinkClassName="page-link"
            nextClassName="next-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </ContainerPagination>
      </Container>
      <PayWith />
    </>
  );
}

export default Pagination;
