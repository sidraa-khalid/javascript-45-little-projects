var alien_color= ['red','green','yellow'];

var x=alien_color.map((c)=>{
    if (c=='green') {
      console.log("The player just earned 5 points.");
    }
    else if( c=='yellow'){
      console.log("The player just earned 10 points.");
    }
    else if( c=='red'){
      console.log("The player just earned 15 points.");
    }
  })
   