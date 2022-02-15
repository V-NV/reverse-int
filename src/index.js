module.exports = function reverse (n){

let c = n;

if (c < 0){c = c * -1}

let a = String(c);

let i = a.length - 1;

console.log(a,c,i);

d = 0;
i2 = i;

 for(i1 = 1; i1 <= i; i1++)
 
{

b = c % 10;

c = c / 10 - (b / 10);

d = d + b * 10**i2;

i2 = i2 - 1;

console.log(b,c,d,i2);


 }
  

d = d+c;

return(d);
}
