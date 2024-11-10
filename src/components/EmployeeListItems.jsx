import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 2px solid #ff0000;
  background-color: white;
  margin-bottom: 5px;
  padding: 5px;
`;

function EmployeeListItems({ employee }) {
  return (
    <StyledDiv className="employee-list-items">
      <img alt="profile pic" />
      <h2>{employee.name}</h2>
      <p>{employee.title}</p>
    </StyledDiv>
  );
}

export default EmployeeListItems;
