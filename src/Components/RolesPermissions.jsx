import styled from "styled-components";
import SectionTopSection from "./SectionTopSection";

const RolesPermissions = () => {
  return(
    <SectionContainer>
      <SectionTopSection />
    </SectionContainer>
  );  
}

export default RolesPermissions;


const SectionContainer = styled.div`
  margin-top: 70px;
  margin-right: 10px;
  margin-left: 10px;
  border: solid 1px black;
`;


