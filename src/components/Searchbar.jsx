import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 2px solid #00ff00;
  background-color: white;
  background-color: white;
  margin-bottom: 8px;
  padding: 5px;
`;

function SearchBar() {
  return (
    <StyledDiv id="search-bar" className="search-bar">
      <input id="employee-input" type="text" placeholder="Search ..." />
    </StyledDiv>
  );
}

export default SearchBar;
