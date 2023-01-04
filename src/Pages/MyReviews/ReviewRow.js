import React from "react";

const ReviewRow = ({review}) => {
  const { service_id, service_name, text } = review;

  return (
    <tr>
      <th>{service_id}</th>
      <td>{service_name}</td>
      <td>{text}</td>
      <td>
        <button className="btn btn-info">Edit</button>
        <button className="btn btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default ReviewRow;
