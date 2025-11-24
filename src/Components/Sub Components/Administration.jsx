import styled from "styled-components";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";

const Administration = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName) => {
    if (openSection === sectionName) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionName);
    }
  };

  return (
    <>
      <AdministrationRow onClick={() => toggleSection("admin")}>
        <td>
          <label>
            <FcPlus />
            Administration
          </label>
        </td>
      </AdministrationRow>
      {openSection === "admin" && (
      <>
        <AdministrationDropDown onClick={() => toggleSection("master")}>
          <td>
            <label>
              <FcPlus />
              Master Management
            </label>
          </td>                           
        </AdministrationDropDown>
        <AdministrationDropDown>
          <td>
            <label>
              <FcPlus />
              Ward Management
            </label>
          </td>                           
        </AdministrationDropDown>
        <AdministrationDropDown>
          <td>
            <label>
              <FcPlus />
              Doctor Management
            </label>
          </td>                           
        </AdministrationDropDown>
        <AdministrationDropDown>
          <td>
            <label>
              <FcPlus />
              Lab Management
            </label>
          </td>                           
        </AdministrationDropDown>
        <AdministrationDropDown>
          <td>
            <label>
              <FcPlus />
              Pharmacy Management
            </label>
          </td>                           
        </AdministrationDropDown>
        <AdministrationDropDown>
          <td>
            <label>
              <FcPlus />
              Utility
            </label>
          </td>                           
        </AdministrationDropDown>
        <AdministrationDropDown>
        <td>User Management</td>
        <td>
          <label><input type="checkbox" />Is Active</label>
          <label><input type="checkbox" />View</label>
          <label><input type="checkbox" />Add</label>
          <label><input type="checkbox" />Edit</label>
          <label><input type="checkbox" />Upload</label>
          <label><input type="checkbox" />Delete</label>
          <label><input type="checkbox" />U & R</label>
          <label><input type="checkbox" />Approve</label>
          <label><input type="checkbox" />Payment Mode</label>
          <label><input type="checkbox" />Hospital TypeField</label>
        </td>
        <td>
          <label><input type="checkbox" />All</label>
        </td>                        
        </AdministrationDropDown>  
        <AdministrationDropDown>
        <td>ICD Master</td>
        <td>
          <label><input type="checkbox" />Is Active</label>
          <label><input type="checkbox" />View</label>
          <label><input type="checkbox" />Add</label>
          <label><input type="checkbox" />Edit</label>
          <label><input type="checkbox" />Upload</label>
          <label><input type="checkbox" />Delete</label>
          <label><input type="checkbox" />U & R</label>
          <label><input type="checkbox" />Approve</label>
          <label><input type="checkbox" />Payment Mode</label>
          <label><input type="checkbox" />Hospital TypeField</label>
        </td>
        <td>
          <label><input type="checkbox" />All</label>
        </td>                        
        </AdministrationDropDown>               
      </>      
      )}
      {openSection === "master" && (
        <>
          <MasterManagementDropDown>
          <td>Category</td>
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
          </MasterManagementDropDown> 
          <MasterManagementDropDown>
          <td>Discharge Summary Template</td>
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
          </MasterManagementDropDown> 
          <MasterManagementDropDown>
          <td>Reimb Master Certificates</td>
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
          </MasterManagementDropDown> 
          <MasterManagementDropDown>
          <td>Status</td>
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
          </MasterManagementDropDown> 
          <MasterManagementDropDown>
          <td>Company</td>
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
          </MasterManagementDropDown> 
          <MasterManagementDropDown>
          <td>Department</td>
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
          </MasterManagementDropDown> 
          <MasterManagementDropDown>
          <td>Hospital</td>
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
          </MasterManagementDropDown> 
          <MasterManagementDropDown>
          <td>Employee</td>
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
          </MasterManagementDropDown> 
          <MasterManagementDropDown>
          <td>OP Type</td>
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
          </MasterManagementDropDown> 
          <MasterManagementDropDown>
          <td>Payment Mode</td>
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
          </MasterManagementDropDown>
          <MasterManagementDropDown>
          <td>Relationship</td>
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
          </MasterManagementDropDown>
          <MasterManagementDropDown>
          <td>Unit</td>
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
          </MasterManagementDropDown>
          <MasterManagementDropDown>
          <td>Hospital Department</td>
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
          </MasterManagementDropDown>
          <MasterManagementDropDown>
          <td>Package Info</td>
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
          </MasterManagementDropDown>
          <MasterManagementDropDown>
          <td>Package Details</td>
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
          </MasterManagementDropDown>
          <MasterManagementDropDown>
          <td>SMS Service</td>
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
          </MasterManagementDropDown>

        </>        
      )}
    </>
  )
}

export default Administration;



const AdministrationRow = styled.tr``;
const AdministrationDropDown = styled.tr``;
const MasterManagementDropDown = styled.tr``;
