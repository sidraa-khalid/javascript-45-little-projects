var current_users=['sidra','eman','admin','maleeha','samman'];
var new_users=['sarah','Eman','ayesha','MALEEHA','fatima'];


new_users.map((m)=>{



 (current_users.includes(m && m.toLowerCase()) ? console.log("the person " + m +" will need to enter a new username") : console.log("the username is available") )

})

