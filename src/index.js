const ITERATIONS = 5;

var a = 0;
var b = 1;
var c = 1;

for(var i=0;i<ITERATIONS;i++) {
    console.log(a);
    a=b;
    b=c;
    c=a+b;
}