import { useEffect, useState } from 'react';
import './addStudent.scss';

export const AddStudent = (props) => {
   const [student1, setStudent1] = useState({});
   const [studentName, setStudentName] = useState('');
   const [studentClass, setStudentClass] = useState('');

   useEffect(() => {
      setStudent1({
         id: Math.floor(Math.random() * 76) + 24,
         name: studentName,
         class: studentClass,
      });
   }, [studentName, studentClass]);

   const handleOnclickSubmit = (event) => {
      event.preventDefault();

      props.addStudent(student1);
      setStudentName('');
      setStudentClass('');
   };

   const handleOnchangeName = (event) => {
      let name = event.target.value;
      setStudentName(name);
   };

   const handleOnchageClass = (event) => {
      let classStu = event.target.value;
      setStudentClass(classStu);
   };
   return (
      <div className="container w-75">
         <form className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-around">
               <div className="">
                  <input
                     onChange={(event) => handleOnchangeName(event)}
                     type="text"
                     className="form-control"
                     name="name"
                     placeholder="name"
                     value={studentName}
                  />
               </div>
               <div className="">
                  <input
                     onChange={(event) => handleOnchageClass(event)}
                     type="text"
                     className="form-control"
                     name="class"
                     placeholder="class"
                     value={studentClass}
                  />
               </div>
            </div>
            <div className="w-75">
               <button
                  onClick={(event) => handleOnclickSubmit(event)}
                  type="submit"
                  className="w-100 btn btn-primary w-25"
               >
                  Submit
               </button>
            </div>
         </form>
      </div>
   );
};
