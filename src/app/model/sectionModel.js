const db = require('../../../db'); 


 function getAllSections() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM ai_navigation_school_management.sections', [], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}


function findSectionsByClassID(values) { 
    return new Promise ((resolve, reject) => { 
        
        const sql = "SELECT * FFROM ai_navigation_school_management.sections WHERE class_id = ? ";
        
        db.query(sql, values , (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
    })
}

function addSection(values) { 
    return new Promise ((resolve, reject) => { 

        'INSERT INTO ai_navigation_school_management.classes (class_name, campus_id) VALUES (?, ?)';
        const sql = 'INSERT INTO ai_navigation_school_management.sections (section_name,academic_year_id , section_description , class_id , campus_id, start_date, end_date, duration ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)' ;
       
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
    getAllSections,
  findSectionsByClassID,
  addSection
};