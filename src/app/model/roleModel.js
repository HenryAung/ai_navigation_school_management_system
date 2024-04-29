const db = require('../../../db'); 


 function getAllRoles() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM ai_navigation_school_management.user_roles', [], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}



function addRole(values) { 
    return new Promise ((resolve, reject) => { 

    
        const sql = 'INSERT INTO ai_navigation_school_management.user_roles (user_role_name) VALUES (?)' ;
       
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
    getAllRoles,
    addRole
};