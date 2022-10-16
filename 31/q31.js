var x=['sidra','eman','admin','maleeha','samman'];
var y=x.length; 
( y>0 ? console.log("the list of users is not empty") : console.log("we need to find some users") );


for (i=0; i<=y;i++)
{
    x.pop();
}
( x>0 ? console.log("the list of users is not empty") : console.log("we need to find some users") );


console.log(x);