import React from "react";
import "./add.css";
export default function EditStudent({ editStudent, student }) {
  return (
    <div className="form-divv" key={student.id}>
      <h1 className="h1-infor1"> Chỉnh Sửa Thông Tin Sinh Viên</h1>
      <form className="form-infor1" onSubmit={editStudent}>
        <div className="form-div1">
          <label htmlFor="nameStudent">Tên sinh viên</label>
          <input
            className="inputEdit"
            type="text"
            name="inputEmail"
            defaultValue={student.student_name}
          />
        </div>
        <div className="form-div1">
          <label htmlFor="nameStudent">Email</label>
          <input
            className="inputEdit"
            type="text"
            name="inputEmail"
            defaultValue={student.email}
          />
        </div>
        <div className="form-div1">
          <label htmlFor="age">Địa chỉ</label>
          <input
            className="inputEdit"
            type="text"
            name="inputAddress"
            defaultValue={student.address}
          />
        </div>
        <div className="form-div1">
          <label htmlFor="gender">Số điện thoại</label>
          <input
            className="inputEdit"
            type="text"
            name="inputTelephone"
            defaultValue={student.phone}
          />
        </div>
        <button className="btn-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
