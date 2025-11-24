import styled from 'styled-components';

const Dashboard = () => {
  return (
    <DashBoardRow>
        <td>Dashboard</td>
        <td>
          <label><input type="checkbox" />Is Active</label>
          <label><input type="checkbox" />View</label>
          <label><input type="checkbox" />Add</label>
          <label><input type="checkbox" />Edit</label>
          <label><input type="checkbox" />Upload</label>
          <label><input type="checkbox" />Delete</label>
          <label><input type="checkbox" />U & R</label>
          <label><input type="checkbox" />Approve</label>
        </td>
        <td>
          <label><input type="checkbox" />All</label>
        </td>
    </DashBoardRow>   
  )
}

export default Dashboard;

const DashBoardRow = styled.tr``; 
