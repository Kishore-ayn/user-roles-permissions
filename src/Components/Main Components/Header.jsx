import styled from 'styled-components';
import logo from "../../assets/LOGO1.png";
import userprofle from "../../assets/user-profile.png";


const Header = () => {
  return(
    <HeaderContainer>
      <div className='left-side-content'>
        <div className='company-logo'>
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <HamBurger>
            <span></span>
            <span></span>
            <span></span>
          </HamBurger>
        </div>
      </div>
      <div className='right-side-content'>
        <div>
          <input type="text" placeholder='MenuList' />
        </div>
        <div className='right-side-sub-content'>
          <img src={userprofle} alt="User Profile" />
          <p>Kishore</p>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  height: 55px;
  background-color: #399783;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  position: fixed;

  .left-side-content{
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
  }

  .right-side-content{
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
  }

  .right-side-sub-content{
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
  }

  img{
    width: 40px;
    cursor: pointer;
  }

  input{
    border-radius: 10px;
    border: none;
    padding: 5px 20px;
    outline: none;
  }

  .right-side-sub-content {
    cursor: pointer;
    color: white;
    font-size: 14px;
  }

`;

const HamBurger = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  cursor: pointer;

  span {
    width: 15px;
    height: 2px;
    background: white;
    border-radius: 3px;
  }
`;
