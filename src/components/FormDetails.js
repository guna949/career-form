import React from "react";
import { useSelector } from "react-redux";


const FormDetails = () => {
  

  const formData = useSelector((state) => state.form);

  return (
    <div>
      <h2>Entered Details</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Address: {formData.address}</p>
      <p>Phone: {formData.phone}</p>
      <p>10th Percentage: {formData.tenthPercentage}</p>
      <p>
        {formData.completed12th ? "12th Percentage" : "Diploma Percentage"}:{" "}
        {formData.completed12th
          ? formData.twelfthPercentage
          : formData.diplomaPercentage}
      </p>
      <p>UG CGPA: {formData.ugCGPA}</p>
      <p>Company: {formData.company}</p>
      <p>Relevant Experience: {formData.relevantExperience}</p>
    </div>
  );
};

export default FormDetails;
