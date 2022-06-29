import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  flex: 1;
  margin: 20px;
  background-color: #fff7e9;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <div className="image-container" key={item.id}>
        <img src={item.imgSrc} alt="E Tech World" />
      </div>
      <div className="text-center mb-4">
        <p className="text-center">{item.name}</p>
        <button className="btn btn-light">Shop Now</button>
      </div>
    </Container>
  );
};

export default CategoryItem;
