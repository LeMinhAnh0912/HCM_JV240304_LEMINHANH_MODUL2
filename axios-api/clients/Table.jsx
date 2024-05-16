import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Pagination from "@mui/material/Pagination";
export default function ListStudent({
  handleDelete,
  listStudent,
  handleEdit,
  handleSort,
}) {
  return (
    <>
      <div className="max-div">
        <button className="btn-addNew" onClick={handleSort}>
          Sắp xếp sinh viên
        </button>
        {/* <input type="text" placeholder="thêm mới" className="input-add" /> */}
        <button className="btn-search">Tìm kiếm</button>
        {/* <input type="text" placeholder="Sắp xếp" className="input-search" /> */}
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>
              <span className="custom-checkbox">
                <input type="checkbox" id="selectAll" />
                <label htmlFor="selectAll"></label>
              </span>
            </th>
            <th>Tên sinh viên</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Lựa chọn</th>
          </tr>
        </thead>
        <tbody>
          {listStudent.map((student) => {
            return (
              <tr key={student.id}>
                <td>
                  <span className="custom-checkbox">
                    <input
                      type="checkbox"
                      id={`checkbox-${student.id}`}
                      name="options[]"
                      value="1"
                    />
                    <label htmlFor={`checkbox-${student.id}`}></label>
                  </span>
                </td>
                <td>{student.student_name}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
                <td>{student.phone}</td>
                <td className="edit-delete">
                  <EditIcon
                    className="edit-icon"
                    onClick={() => handleEdit(student)}
                  />
                  <DeleteOutlineIcon
                    className="delete-icon"
                    onClick={() => handleDelete(student.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
