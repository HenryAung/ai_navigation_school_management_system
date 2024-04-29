const db = require('../../../db'); 


 function getAllCampuses() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM ai_navigation_school_management.campuses', [], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}


function findCampuses(values) { 
    return new Promise ((resolve, reject) => { 
        
        const sql = "SELECT * FFROM ai_navigation_school_management.campuses WHERE class_id = ? OR campus_name = ?";
        
        db.query(sql, values , (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
    })
}

function addCampus(values) { 
    return new Promise ((resolve, reject) => { 
        const sql = 'INSERT INTO ai_navigation_school_management.campuses (campus_name, campus_address, campus_phone) VALUES (?, ?, ?)';
       
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
  getAllCampuses,
  findCampuses,
//   addStudent
};