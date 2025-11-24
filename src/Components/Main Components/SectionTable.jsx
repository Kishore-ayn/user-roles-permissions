import styled from "styled-components"
import Dashboard from "../Sub Components/Dashboard.jsx";
import Administration from "../Sub Components/Administration.jsx";

const SectionTable = () => {
  return (
    <SectionMiddle>
      <TableWrapper>
        <table>
          <thead>
            <tr className="table-headings">
              <th className="col-pages">Pages</th>
              <th className="col-permissions">Permissions</th>
              <th className="col-all">
                <input type="checkbox" />
                Select All 
              </th>
            </tr>
          </thead>
          <tbody>
            <Dashboard />
            <Administration />
          </tbody>
        </table>
      </TableWrapper>
      
    </SectionMiddle>
  )
}

export default SectionTable;


const SectionMiddle = styled.div`
  padding: 10px;
  width: 100%;

`;

const TableWrapper = styled.div`
  width: 100%;
  

  .table-headings{
    background-color: #399783;
    height: 30px;
    font-size: 14px;
  }

  .table-headings th{
    color: white;
    padding-left: 6px;
    font-weight: normal;
  }

  .col-pages{
    width: 200px;
    text-align: left;
  }

  .col-permissions{
    width: 1400px;
    text-align: left;
  }

  .col-all{
    width: 200px;
    text-align: left;
    display: inline-flex;
    gap: 5px;
  }



`;

