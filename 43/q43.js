var magicians=['ali','ibrahim','zain'];
var great_magicians=[];
function show_magicians(mag_names){
    mag_names.map((m)=>{

        console.log(m);
    })

 
}
function make_great(){
    for(i=0;i<magicians.length;i++){
       
        great_magicians[i]=`the great: ${magicians[i]}`;

    }
}

show_magicians(magicians);
make_great();
show_magicians(great_magicians);
