import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "@emotion/styled";
import { SliderData } from "../data";

const Contanier = styled.div`
  height: 800px;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
`;
const Arrow = styled.button`
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: teal;
  display: grid;
  place-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(prop) => prop.direction === "left" && "10px"};
  right: ${(prop) => prop.direction === "right" && "10px"};
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const MySlide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  background-color: ${(props) => props.bgColor};
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const onChangeSlide = (direction) => {
    setSlideIndex(direction);
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Contanier>
      <Arrow direction="left" onClick={() => onChangeSlide("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {SliderData.map((element) => (
          <MySlide bgColor={element?.bgColor} key={element.id}>
            <div className="slide-image">
              <img src={element.imgSrc} alt="E Tech World" />
            </div>
            <div className="slide-text">
              <div>
                <p>{element?.description}</p>
                <div className="text-center">
                  <button className="btn btn-light">Shop Now</button>
                </div>
              </div>
            </div>
          </MySlide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => onChangeSlide("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Contanier>
  );
};

export default Slider;
// /Users/emiliusmfuruki/Development/Frontend/React/kd-design/public/images/one.svg
