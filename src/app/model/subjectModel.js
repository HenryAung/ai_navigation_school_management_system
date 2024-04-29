const db = require('../../../db'); 


 function getAllSubjects() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM ai_navigation_school_management.subjects', [], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}



function addSubject(values) { 
    return new Promise ((resolve, reject) => { 

    
        const sql = 'INSERT INTO ai_navigation_school_management.subjects (subject_name, subject_code, subject_description, class_id) VALUES (?, ?, ?, ?)';
       
        db.query(sql, values , (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
        })
}



module.exports = {
    getAllSubjects,
    addSubject
};