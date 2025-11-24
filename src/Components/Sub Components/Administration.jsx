import styled from "styled-components";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";

const adminMenu = [
  {type : "section", name: "Master Management" },
  {type : "section", name: "Ward Management" },
  {type : "section", name: "Doctor Management" },
  {type : "section", name: "Lab Management" },
  {type : "section", name: "Pharmacy Management" },
  {type : "section", name: "Utility Management" },

  {
    type : "permissions",
    name : "User Management",
    fields : [
      "Is Active", "View", "Add", "Edit", "Upload",
      "Delete", "U & R", "Approve", "Payment Mode", "Hospital TypeField"
    ]
  },

    {
    type : "permissions",
    name : "ICD Master",
    fields : [
      "Is Active", "View", "Add", "Edit", "Upload",
      "Delete", "U & R", "Approve", "Payment Mode", "Hospital TypeField"
    ]
  }
];


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
        {adminMenu.map((item, index) => 
          item.type === "section" ? (
            <AdministrationDropDown key={index}>
              <td>
                <label>
                  <FcPlus /> {item.name}
                </label>
              </td>
            </AdministrationDropDown>
          ) : (
            <AdministrationDropDown key = {index}>
              <td>
                {item.name}
              </td>
              <td>
                {item.fields.map(field => 
                  <label key={field}>
                    <input type="checkbox" />
                    {field}
                  </label>
                )}
              </td>
              <td>
                <label>
                  <input type="checkbox" /> All
                </label>
              </td>
            </AdministrationDropDown>
          )
        )}
      </>      
      )}
    </>
  )
}

export default Administration;



const AdministrationRow = styled.tr``;
const AdministrationDropDown = styled.tr``;
