
(function(step) {
	var widthBody = getComputedStyle(document.body)
	var width = parseInt(widthBody.width)
	var x = width / step;
	for (var i = 0; i < x; i++) {
			var eldiv = document.createElement('div');
			eldiv.style.left = i * step + 'px';
			eldiv.style.backgroundColor = 'rgb(' + i +',' + i +', 0)';
			document.body.appendChild(eldiv);
	}
})(10);

/*var square = getComputedStyle(document.body); // определяем параметры пользователя;
var w = parseInt(square.width)/10; // создаем переменную, которую преобразовываем в целое число
var a = 0;
if (a++<w) {
	for (var i = 0; i < w; i++) {
		var div = document.createElement('div');
		div.style.cssText = 'width: 10px; height: 10px; background-color: black; position: absolute; overflow: hidden; float: left';
		document.body.appendChild(div);
		div.style.top = i * 10 + 'px';
		div.style.left = i * 10 + 'px';
		var colors = [i,i,i];
		if (colors[0] === 255) {
			colors[1]++;
			colors[0] = 0;
		}
		if (colors[1 === 255]) {
			colors[2]++;
			colors[1] = 0;
		}
		if (colors[2] === 255) {
			colors[0]++;
			colors[2] = 0;
		}
		div.style.background = 'rgb('+colors.join(',')+')';
	}}*/



	///////////////////


/*var user = {
   name: 'Kris',
   showName: function () {
       console.log(this.name);
   }
};




var admin = {
   name: 'Alex'};
   f2 : function name() {
   console.log(this.name);
}




console.log(user.showName.call(admin));*/
////////////////////////////////////
/*document.body.innerHTML += '<button>click</button>';
document.body.innerHTML += '<button>click</button>';
document.body.innerHTML += '<button>click</button>';
var counterButton = {
    "b1" : 0,
    "b2" : 0,
    "b3" : 0
};
var a = document.querySelectorAll("button");
for (var i = 0; i < a.length; i++) {
  a[i].addEventListener("click",inc.bind(counterButton, 'b' + (1 + i)));
     
    }    
    
    /*a[i].addEventListener('click', function () {
        console.log("arrow", this);
    });*/

/*function inc(str){
	this[str]++;
	console.log(this)
}*/
///////////////////////////////////
/*document.body.innerHTML += '<button>click</button>';
document.body.innerHTML += '<button>click</button>';
document.body.innerHTML += '<button>click</button>';
var counterButton = {
    "b1" : 0,
    "b2" : 0,
    "b3" : 0
};
try{
var  c = document.querySelectorAll("button");
for (var i = 0; i < a.length; i++) {
  a[i].addEventListener("click",inc.bind(counterButton, 'b' + (1 + i)));
     
    }    
    
    /*a[i].addEventListener('click', function () {
        console.log("arrow", this);
    });*/

/*function inc(str){
	this[str]++;
	console.log(this)
}
console.log('test');

} catch(err){
	console.error(err)
}console.log('test1');*/
///////////////////////////////
/*var user ='{"name": "John", "age":15}';
try{
	var user = JSON.parse(user);
	if( user.age < 18) {
		throw new Error('Доступ зарещен');
	} 
	}catch (err){
		console.log(err.message);
	} finally{
		console.log('hi');
	}*/
//////////////////////////////////
/*document.body.innerHTML = '<button>click</button>';
document.body.innerHTML += '<button>click</button>';
document.body.innerHTML += '<h1>0</h1>';

function inc(str) {
    var c = document.querySelectorAll("h1")[0];
    c = c.innerHTML;
    c = +c;
    c++;
    document.querySelector("h1").innerHTML = c
}

	var a = document.querySelector("button");
	a.addEventListener("click", inc);
	
	var d = document.querySelectorAll('button')[1];
	d.addEventListener('click', function(){

	var elemt = document.querySelectorAll("h1");
	var c = parseInt(elemt.innerHTML);
	if(c > 29){
	a.removeEventListener('click', inc);
	}
});*/
	//////////////////////////////////////
/*document.body.innerHTML = '<button>click</button>';
document.body.innerHTML += '<button>click</button>';
document.body.innerHTML += '<h1>0</h1>';

function inc(e) {
    console.log(e)
}

	var a = document.querySelector("button");
	a.addEventListener("click", inc);
	
	var d = document.querySelector('button:not(:first-child');
	d.addEventListener('click', function(e){

	console.log(e.target);
	console.log(e.clientX);
	console.log(e.clientY);
});*/
	/////////////////////////////////