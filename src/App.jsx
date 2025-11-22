import Header from './Components/Header.jsx'
import RolesPermissions from './Components/RolesPermissions.jsx';
import styled from 'styled-components';

const App = () => {
  return(
    <Main>
      <Header />
      <RolesPermissions />
    </Main>
  );

}

export default App;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
