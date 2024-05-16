import React, { useEffect, useState } from "react";
// import { Table } from "@mui/material";
import axios from "axios";
import Table from "../axios-api/clients/Table";
import AddStudent from "../axios-api/clients/AddStudent";
import EditStudent from "../axios-api/clients/EditStudent";

export default function App() {
  // SORT STUDENT:
  const [sort, setSort] = useState(" ");
  const handleSort = () => {
    console.log("aaa");
    setSort("student_name");
  };

  //ADD NEW STUDENT:
  const addNewStudent = (event) => {
    event.preventDefault();
    console.log("object");
    const newStudent = {
      student_name: event.target[0].value,
      email: event.target[1].value,
      address: event.target[2].value,
      phone: event.target[3].value,
      status: event.target[4].value,
      create_at: "1998-01-01T00:00:00Z",
    };
    axios.post(`http://localhost:3000/posts`, newStudent).then((res) => {
      setListStudent([...listStudent, res.data]);
    });
  };

  //USER:
  const [listStudent, setListStudent] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts?_sort=${sort}`)
      .then((res) => {
        setListStudent(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [sort]);

  //DELETE:
  const handleDelete = (id) => {
    axios.delete("http://localhost:3000/posts/" + id);
    const index = listStudent.findIndex((student) => student.id == id);
    listStudent.splice(index, 1);
    setListStudent([...listStudent]);
  };

  //EDIT STUDENT:
  const [student, setStudent] = useState(
    JSON.parse(localStorage.getItem("student")) || {}
  );

  const handleEdit = (student) => {
    localStorage.setItem("student", JSON.stringify(student));
    setStudent({ ...student });
  };

  const students = JSON.parse(localStorage.getItem("student")) || {};
  const editStudent = (event) => {
    event.preventDefault();
    axios
      .patch(`http://localhost:3000/posts/${students.id}`, {
        student_name: event.target[0].value,
        email: event.target[1].value,
        address: event.target[2].value,
        phone: event.target[3].value,
      })
      .then(() => {
        const index = listStudent.findIndex((ele) => ele.id == students.id);
        listStudent[index].student_name = event.target[0].value;
        listStudent[index].email = event.target[1].value;
        listStudent[index].address = event.target[2].value;
        listStudent[index].phone = event.target[3].value;
        setListStudent([...listStudent]);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      <Table
        handleDelete={handleDelete}
        listStudent={listStudent}
        handleEdit={handleEdit}
        handleSort={handleSort}
      />
      <AddStudent addNewStudent={addNewStudent} />
      <EditStudent editStudent={editStudent} student={student} />
    </>
  );
}
