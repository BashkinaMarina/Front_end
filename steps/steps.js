
(function(width, step) {
	var x = width / step;
	for (var i = 0; i < x; i++) {
		var eldiv = document.createElement('div');
		eldiv.style.left = i * step + 'px';
		eldiv.style.backgroundColor = 'rgb(' + i +', 0, 0)';
		document.body.appendChild(eldiv);
	}
})(1366, 10);