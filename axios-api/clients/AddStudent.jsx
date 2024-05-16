import React from "react";
import "./add.css";
export default function AddStudent({ addNewStudent }) {
  //   const [form, setForm] = useState([]);

  return (
    <div className="form-div">
      <h1 className="h1-infor">Thông Tin Sinh Viên</h1>
      <form className="form-infor" onSubmit={addNewStudent}>
        <div className="form-div1">
          <label htmlFor="nameStudent">Tên sinh viên</label>
          <input className="inputEdit" type="text" name="inputEmail" />
        </div>
        <div className="form-div1">
          <label htmlFor="nameStudent">Email</label>
          <input className="inputEdit" type="text" name="inputEmail" />
        </div>
        <div className="form-div1">
          <label htmlFor="age">Địa chỉ</label>
          <input className="inputEdit" type="text" name="inputAddress" />
        </div>
        <div className="form-div1">
          <label htmlFor="gender">Số điện thoại</label>
          <input className="inputEdit" type="text" name="inputTelephone" />
        </div>
        <button className="btn-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
