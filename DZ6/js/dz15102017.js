




function arrRand(max, min, leng){

var arr = [];
for (i = 0; i < leng; i++) {
 arr[i] = min+( Math.round(Math.random() * max));
	}
	return arr ;
}
var res = arrRand(8, 2, 3);
console.log(res);
console.log(res.join(","));
console.log( res + " "+ "masiv");


function sortarr_min(a,b){
if( a>b ){
	return 1;
	}
if(a<b){
	return -1;
	}
}
console.log(res.sort(sortarr_min));
function sortarr_max(a,b){
if( a<b ){
	return 1;
	}
if(a>b){
	return -1;
	}
}
console.log(res.sort(sortarr_max));