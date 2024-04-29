const db = require('../../../db'); 


 function getAllClasses() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM ai_navigation_school_management.classes', [], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}


function findClasses(values) { 
    return new Promise ((resolve, reject) => { 
        
        const sql = "SELECT * FFROM ai_navigation_school_management.classes WHERE class_id = ? OR class_name = ?";
        
        db.query(sql, values , (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
    })
}

function addClass(values) { 
    return new Promise ((resolve, reject) => { 
        const sql = 'INSERT INTO ai_navigation_school_management.classes (class_name, campus_id) VALUES (?, ?)';
       
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
  getAllClasses,
  findClasses,
  addClass
};