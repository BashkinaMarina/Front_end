/******* DZ № 1 ******/
 /*Запросить у пользователя строку и вырезать из нее 
случайное количество символов со случайной позиции*/




/*function myFunction() {
var user = prompt("line please");
var b = Math.random()*user.length;
var c = Math.random()*user.length;
var res =  user.substr (b,c);
return res;
}
var a = myFunction()
console.log(a);*/


/******* DZ № 2 ******/

/*1. Написать функцию генерации случайныx чисел.*/

/*function rand(a){

return Math.random()*a;
}
var res = rand(100);
console.log(Math.floor (res));*/

/*2. Модифицировать функцию, 
что бы создавались не только положительные числа ,
но и отрицательные.*/

/*function rand(a){

return  Math.round((Math.random()-0.5)*100);
}
var res = rand(100);
console.log(Math.floor (res));*/

/*3. Написать функцию которая приводит строку к виду 
Первая буква в верхнем регистре, все остальные в нижнем, 
пробелы в начале и конце строки следует удалить.
" dfdsfsffaw " -> "Dfdsfsffaw"*/

/*function text(a){
var b = (a.charAt(0));
return b [0].toUpperCase() + a.substr(1, a.length);
}
console.log(text(" dfdsfsffaw "
.replace(/(^\s+|\s+$)/g, '')));*/


/*4. Написать функцию которая принимает 1 аргумент (любой) 
и если возможно преобразует его в число и возвращает его, 
если это не возможно возвращает значение null.
*/
/*function conversionToNumber(){
var n = prompt("Введите значение");

if (isNaN(n)) {
  alert( "Строка преобразовалась в Null. Не число" );
} else {
  alert( "Число" );
}
return n;
}
console.log(conversionToNumber());*/