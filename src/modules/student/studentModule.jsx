import { Header } from '../../components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './studentModule.scss';
import { useState } from 'react';
// import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddStudent } from '../../components/AddStudent/AddStudent';

export const StudentModule = () => {
   const [student, setStudent] = useState([
      { id: 1, name: 'student1', class: 'class1' },
      { id: 2, name: 'student2', class: 'class1' },
      { id: 3, name: 'student2', class: 'class2' },
      { id: 4, name: 'student1', class: 'class3' },
      // { id: 5, name: 'student5', class: 'class1' },
      // { id: 6, name: 'student3', class: 'class5' },
      // { id: 7, name: 'student4', class: 'class3' },
      // { id: 8, name: 'student6', class: 'class2' },
      // { id: 9, name: 'student3', class: 'class2' },
      // { id: 10, name: 'student111', class: 'class4' },
      // { id: 11, name: 'student13', class: 'class1' },
      // { id: 12, name: 'student13', class: 'class5' },
      // { id: 13, name: 'student13', class: 'class2' },
      // { id: 14, name: 'student14', class: 'class3' },
      // { id: 15, name: 'student15', class: 'class4' },
      // { id: 16, name: 'student17', class: 'class1' },
      // { id: 17, name: 'student18', class: 'class1' },
      // { id: 18, name: 'student19', class: 'class1' },
      // { id: 19, name: 'student20', class: 'class1' },
      // { id: 20, name: 'student21', class: 'class1' },
      // { id: 21, name: 'student22', class: 'class1' },
      // { id: 22, name: 'student23', class: 'class1' },
      // { id: 23, name: 'student24', class: 'class1' },
   ]);

   // const [editStudent, setEditStudent] = useState({});
   const [studentName, setStudentName] = useState({ id: '', name: '', class: '' });
   const [studentClass, setStudentClass] = useState({ id: '', name: '', class: '' });
   const [editStudent, setEditStudent] = useState({ id: '', name: '', class: '' });
   // useEffect(() => {
   //    let studentCopy = student;
   //    studentCopy = studentCopy.map((element) => {
   //       console.log(element);
   //       if (element.id === editStudent.id) {
   //          element = editStudent;
   //          return element;
   //       }
   //       return element;
   //    });
   //    console.log(editStudent);

   //    setStudent([...studentCopy]);
   // }, [isSet]);

   const handleOnClickDelete = (element) => {
      let currentStudent = student;
      currentStudent = currentStudent.filter((item) => {
         return item.id !== element.id;
      });
      setStudent(currentStudent);
      toast.error('Deleted');
   };

   const addANewStudent = (stu) => {
      setStudent([...student, stu]);
      toast.success('Added');
   };

   const handleOnchangeName = (event) => {
      // setStudentName({ name: event.target.value.name });
      // setEditStudent({ ...editStudent, name: studentClass.name });
      let editStudentCopy = editStudent;
      editStudentCopy.name = event.target.value;

      setEditStudent({
         ...editStudentCopy,
      });
   };

   const handleOnchangeClass = (event) => {
      let editStudentCopy = editStudent;
      editStudentCopy.class = event.target.value;

      setEditStudent({
         ...editStudentCopy,
      });
   };

   const handleOnclickEdit = (element) => {
      setEditStudent(element);
   };

   const handleOnclickSave = () => {
      let studentCopy = student;
      studentCopy = studentCopy.map((element) => {
         console.log(element);
         if (element.id === editStudent.id) {
            element = editStudent;
            return element;
         }
         return element;
      });
      console.log(editStudent);

      setStudent([...studentCopy]);

      setEditStudent({ id: '', name: '', class: '' });
   };

   return (
      <>
         <Header />
         <AddStudent addStudent={addANewStudent}></AddStudent>
         <div className="container w-50">
            <table className="table">
               <thead>
                  <tr>
                     <th scope="col">id</th>
                     <th scope="col">Name</th>
                     <th scope="col">Class</th>
                     <th scope="col">Action</th>
                  </tr>
               </thead>
               <tbody className="table-group-divider">
                  {student &&
                     student.length > 0 &&
                     student.map((element, index) => {
                        return (
                           <tr key={index}>
                              {editStudent.id !== element.id ? (
                                 <>
                                    <td>{element.id}</td>
                                    <td>{element.name}</td>
                                    <td>{element.class}</td>
                                    <td>
                                       <button
                                          onClick={() => handleOnclickEdit(element)}
                                          type="button"
                                          className="btn btn-sm d-inline-block btn-info"
                                       >
                                          Edit
                                       </button>
                                       <button
                                          onClick={() => handleOnClickDelete(element)}
                                          type="button"
                                          className="btn btn-sm d-inline-block btn-danger"
                                       >
                                          Delete
                                       </button>
                                    </td>
                                 </>
                              ) : (
                                 <>
                                    <td>{element.id}</td>
                                    <td>
                                       <input
                                          type="text"
                                          value={editStudent.name}
                                          onChange={(event) => handleOnchangeName(event)}
                                       />
                                    </td>
                                    <td>
                                       <input
                                          onChange={(event) => {
                                             handleOnchangeClass(event);
                                          }}
                                          type="text"
                                          value={editStudent.class}
                                       />
                                    </td>
                                    <td>
                                       <button
                                          onClick={() => {
                                             handleOnclickSave();
                                          }}
                                          type="button"
                                          className="btn btn-sm d-inline-block btn-info"
                                       >
                                          Save
                                       </button>
                                       <button
                                          onClick={() => handleOnClickDelete(element)}
                                          type="button"
                                          className="btn btn-sm d-inline-block btn-danger"
                                       >
                                          Delete
                                       </button>
                                    </td>
                                 </>
                              )}
                           </tr>
                        );
                     })}
               </tbody>
            </table>
         </div>
         {/* <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            // onPageChange=
            pageRangeDisplayed={5}
            // pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
         /> */}
      </>
   );
};
