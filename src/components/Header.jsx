import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  border: 2px solid #0033cc;
  background-color: white;
  margin-bottom: 8px;
  padding: 5px;
`;

function Header() {
  return (
    <StyledHeader className="header">
      <h2>Employee Directory</h2>
    </StyledHeader>
  );
}

export default Header;
