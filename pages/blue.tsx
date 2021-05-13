import styled from "styled-components";
import MainSearchInput from "../src/components/MainSearchInput";
import ObservingBoard from "../src/components/ObservingBoard";

const Blue = () => {
  return (
    <Wrapper>
      <Container>
        MobX_6_ts
        <MainSearchInput />
        <ObservingBoard />
      </Container>
    </Wrapper>
  );
};
export default Blue;

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 8%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #5257f7;
  width: 400px;
  height: 600px;
  border-radius: 200px;
  padding: 40px 0 0 0;
  color: #fff;
  font-size: 40px;
`;
