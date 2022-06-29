import styled from "@emotion/styled";
const Container = styled.p`
  height: 30px;
  background-color: teal;
  color: white;
  text-align: center;
  margin: 0;
  line-height: 1.9;
`;

const Announcement = () => {
  return (
    <Container>
      Kwa manunuzi ya zaidi ya TZS 100,000/= tunakuletea bure
    </Container>
  );
};

export default Announcement;
