function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

function daugyba (a, b) {
  const sandauga = a * b;
  return sandauga;
}
console.log(daugyba(3, 3));

function skaitmenuKiekisSkaiciuje(a) {
    count = 0;
    if (typeof a !== 'number' || a.toString() === 'NaN') {
        console.log('Pateikta netinkamo tipo reikšmė');
    } else {
        a += '';
        return a.length;   
    }
}
console.log(skaitmenuKiekisSkaiciuje(781));

function didziausiasSkaiciusSarase(a){
    if (!Array.isArray(a)) {
        console.log('Pateikta netinkamo tipo reikšmė.');
    } else if (a.length === 0) {
        console.log('Pateiktas sąrašas negali būti tuščias.');
    } else { return Math.max(...a); } 
}
console.log('max is: - ' + didziausiasSkaiciusSarase([3, 5]));


function isrinktiRaides(a, b){
    let s = '';
    let n = a.length;
    if(typeof a !== 'string') {
        console.log( 'Pirmasis kintamasis yra netinkamo tipo.');       
    } else if (n === 0 || n > 100) {
        console.log('Pirmojo kintamojo reikšmė yra netinkamo dydžio.');
    } else if (typeof b !== 'number') {  
        console.log('Antrasis kintamasis yra netinkamo tipo.');
    } else if (b <= 0) {
        console.log('Antrasis kintamasis turi būti didesnis už nulį.');       
    } else if (b >= a.length){
        console.log('Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.');
    } else {
            for (let i = b-1; i < n; i+=b) {
                s += a[i];            
            }
                return s;
            }
}
console.log('isrink: ' + isrinktiRaides('abcdefg', 2));

function dalyba(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number'   
    || '' + a === 'NaN' || '' + b === 'NaN'
    || a === Infinity || b === Infinity
    || a === -Infinity || b === -Infinity) {
        return 'KLAIDA';
    } else { 
        return a/b;
    }
}
console.log(dalyba(5, 2));