import React, { useState } from "react";
import "./OrderManagement.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const intitialRows = [
  createData("Product 1", 189030854, "08 March 2024", "Approved"),
  createData("Product 2", 189030854, "09 March 2024", "Pending"),
  createData("Product 3", 189030854, "09 March 2024", "Approved"),
  createData("Product 4", 189083085, "11 March 2024", "Pending"),
  createData("Product 5", 189086085, "13 March 2024", "Delivered"),
  createData("Product 6", 189083585, "13 March 2024", "Approved"),
  createData("Product 7", 189083095, "14 March 2024", "Delivered"),
];

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

const OrderManagement=() => {
  const[rows,setRows]=useState(intitialRows)
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: '', trackingId: '', date: '', status: '' });

  const handleEdit = (row) => {
    setEditingId(row.name);
    setFormData({ ...row });
  };

  const handleSave = (row) => {
    const updatedRows = rows.map((row) =>
      row.name === editingId ? { ...formData } : row
    );
    setEditingId(null);
    rows.splice(0, rows.length, ...updatedRows);
    // console.log("Updated Rows:", updatedRows);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDelete = (name) => {
    console.log(rows.name);
    setRows(rows.filter((rows)=>rows.name !== name));
    // console.log("Deleting", name);
  };
const handleDetailsClick = (row)=>{
  alert(`The order for ${row.name} was placed on ${row.date} , with a tracking ID of ${row.trackingId}. As of now, the order status stands as ${row.status}.`);
}
  return (
    <div className="Table">
      <h1 className="OrderManh1">Orders Management</h1>
      <table>
        <thead>
          <tr className="headRow">
            <th>Products</th>
            <th>Tracking ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}  className="trow">
              <td>
                {editingId === row.name ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  row.name
                )}
              </td>
              <td>
                {editingId === row.name ? (
                  <input
                    type="text"
                    name="trackingId"
                    value={formData.trackingId}
                    onChange={handleInputChange}
                  />
                ) : (
                  row.trackingId
                )}
              </td>
              <td>
                {editingId === row.name ? (
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                ) : (
                  row.date
                )}
              </td>
              <td>
                {editingId === row.name ? (
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                  >
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                    <option value="Pending">Shipping</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                ) : (
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                )}
              </td>
              <td className="Details"
              onClick={()=>handleDetailsClick(row)}
              >Details</td>
              <td className="Actions">
                {editingId === row.name ? (
                  <button className="saveBtn2" onClick={()=>handleSave(row)}>
                    Save
                  </button>
                ) : (
                  <>
                    <button className="editBtn" onClick={() => handleEdit(row)}>
                      Edit
                    </button>
                    <button className="delBtn" onClick={() => handleDelete(row.name)}>
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  );
}

export default OrderManagement;
