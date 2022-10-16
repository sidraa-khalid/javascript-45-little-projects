var m= ["amir","ibrahim","zain","ali"] ;

function show_magicians(mag_names){
    mag_names.map((x)=>{
        console.log( x );
    });

}
show_magicians(m);

function make_great(){
    for(i=0;i<m.length;i++){

m[i]=`the great magician: ${m[i]}`;

    }
}
make_great();

show_magicians(m);

