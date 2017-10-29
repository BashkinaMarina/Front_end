/**
 * Created by Marina on 29.10.2017.
 */
/*  ДЗ открывающ.
 <ol>/выполнено
 <li></li>/выполнено
 <li></li>/выполнено
 <li></li>/выполнено
 </ol>/выполнено
 <h1>текст</h1>/выполнено
 <h3>текст</h3>/выполнено
 <div>/выполнено
 	<div>/выполнено
  	<div></div>/выполнено
 	</div>/выполнено
 </div>/выполнено
 перед каждой li добавить <span> внутри которого должно бытьчисло 0 до 1000 000()
 h1 изменять число внутри 1 сек отчет с 0
 внутри самого глубокого <div>каждую секунку уменьшать число, начала отсчета New day
 c с помощью js*/

//создали элементы ol,li,h1,h3,div
			var olElemt = document.createElement('ol');
				document.body.appendChild(olElemt);
		 for( var i =0; i<3; i++){
			var liElement = document.createElement('li');
		 		olElemt.appendChild(liElement);
			 var spanElemt = document.createElement('span');
			 	spanElemt.innerHTML=Math.round(1000000*Math.random())
			 	olElemt.insertBefore(spanElemt, liElement);
		 }
			var h1Elemt = document.createElement('h1');
				document.body.appendChild(h1Elemt);
				h1Elemt.innerHTML = ('Заголовок h1');
			var d=0; var p=0;
				setInterval(function () {
			var num = document.querySelectorAll("h1");
			var m = []
			for (var i = 0; i < num.length;i++){
				m.unshift(num[i])
			}
			if (d >= num.length) {
				d = 0;
			}
			p++;
			num[d].innerHTML = p;
			d++;
		}, 1000);
		var h3Elemt = document.createElement('h3');
				document.body.appendChild(h3Elemt);
				h3Elemt.innerHTML = ('Заголовок h3');
		var divElemt1 = document.createElement('div');
				document.body.appendChild(divElemt1);
		var divelem2 = document.createElement('div');
				divElemt1.appendChild(divelem2);
		var divEl3 = document.createElement('div');
  			divelem2.appendChild(divEl3);
		var f = function t (){
		var date = new Date();
		var time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
				document.querySelectorAll('div')[2].innerHTML = time;
				window.setTimeout(t, 1000);
		
	}();
	


