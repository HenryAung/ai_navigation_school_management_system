const db = require('../../../db'); 


 function getAllStudents() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM ai_navigation_school_management.students', [], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

function getStudentByID(studentID) { 
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM ai_navigation_school_management.students WHERE student_id= ?', [studentID], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

function findStudents(values) { 
    return new Promise ((resolve, reject) => { 
        
        const sql = "SELECT * FFROM ai_navigation_school_management.students WHERE student_name = ? OR student_email = ?";
        
        db.query(sql, values , (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
    })
}

// function addStudent(values ) { 
//     return new Promise ((resolve, reject) => { 
//         const sql = 'INSERT INTO ai_navigation_school_management.students (firstname, lastname, gender, student_email, date_of_birth, address, phone_number) VALUES (?, ?, ?, ?, ?, ?, ?)';
       
//         db.query(sql, values , (error, result) => {
//             if (error) {
//               reject(error);
//             } else {
//               resolve(result);
//             }
//           });
//         })
// }



module.exports = {
  getAllStudents,
  findStudents,
//   addStudent,
  getStudentByID,
};