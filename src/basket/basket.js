import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Basket = () => {
  const product = useSelector((store) => store.ProductReducer);
  console.log(product, "<<<");

  return (
    <>
      <h1>장바구니</h1>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>주문번호</th>
              <th>상품명</th>
              <th>가격</th>
              <th>수량</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quan}</td>
                  <td>{item.quan}</td>
                </tr>
              );
            })}
            {/* 
            {/* <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Basket;
