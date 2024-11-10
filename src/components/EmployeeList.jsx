// src/components/EmployeeList.js
import React from "react";
import EmployeeListItems from "./EmployeeListItems";

function EmployeeList() {
  const employees = [
    { id: 1, name: "James King", title: "President and CEO" },
    { id: 2, name: "Julie Taylor", title: "VP of Marketing" },
    { id: 3, name: "Eugene Lee", title: "CFO" },
    { id: 3, name: "John Williams", title: "VP of Engineering" },
    { id: 3, name: "Ray Moore", title: "VP of Sales" },
    { id: 3, name: "Paul Jones", title: "QA Manager" },
  ];

  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeListItems key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;
