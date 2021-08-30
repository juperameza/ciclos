function CicloS(limite) {
    let resultado=4;
    for (let i = 4, j=1; (i-1) <=limite; i+=2,j++) {
        if(j%2==0){
           resultado+=(4/(i-1));
        }
        else{
            resultado-=(4/(i-1));
        }
    }
    console.log(resultado)
}

function factorial (n) {
	let total = 1; 
	for (let i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}
function Euler(limite) {
    let resultado=1;
   for (let i = 1; i < limite; i++) {
       resultado+=(1/factorial(i))
       
   }
   console.log(resultado)
}
CicloS(100);
Euler(12)