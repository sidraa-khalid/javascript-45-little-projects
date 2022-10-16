var x=['sidra','eman','admin','maleeha','samman'];
x.map((m)=>{
     
     console.log("\n Welcome to the website " + m);
     })

x.map((m)=>{
    (m=='admin' ? 
    console.log("\nHello admin, would you like to see a status report?") :  
     console.log("\nHello " + m +", thank you for logging in again.")
     )})
