import styled from "styled-components"

const SectionTopSection = () => {
  return (
    <TopSection>
      <div className="rights-container">
        <div className="user-role">
          <p>UserName</p>
          <pc className="role">Role</pc>
        </div>
        <div className="user-role-update">
          <input type="text" />
          <input type="text" placeholder="Admin" />
          <button>Update</button>
        </div>
        
      </div>
    </TopSection>
  )
}

export default SectionTopSection;

const TopSection = styled.div`
  .rights-container{
    padding: 10px;
  }

  .user-role{
    display: flex;
    margin-bottom: 10px;
    font-size: 14px;
  }

  .user-role .role{
    margin-left: 250px;
  }

  .user-role-update input{
    width: 300px;
    height: 25px;
    padding: 10px;
  }

  .user-role-update{
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-bottom: 10px;
  }

  .user-role-update button{
    background-color: #399783;
    border: none;
    border-radius: 5px;
    padding: 0px 10px;
    color: white;
    cursor: pointer;
  }

  .user-role-update button:hover{
    background-color: black;
  }

`;


