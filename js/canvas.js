canvasWidth = 800;
canvasHeight = 600;
theColor = '#000';
thesWidth = 1;
window.onload = function() {
	choose();
	initCanvas();
	var click = document.getElementById('choose');
	var checked = document.getElementsByName('choose');
	click.onclick = function() {
		if (checked[0].checked) {
			drawLine();
		} else if (checked[1].checked) {
			drawCircle();
		} else if (checked[2].checked) {
			drawRectangle();
		} else if (checked[3].checked) {
			inputText();
		} else if (checked[5].checked) {
			cleared();
		} else if (checked[6].checked) {
			fontInput();
		}
	}
	colors();
	theWidths();
}

function choose() {
	var theWidth = document.getElementById('theWidth');
	var widthChoose = document.getElementById('widthChoose');
	var circle = document.getElementById('circle');
	var drawCircle = document.getElementById('drawCircle');
	var rectangle = document.getElementById('rectangle');
	var drawRectangle = document.getElementById('drawRectangle');
	widthChoose.onclick = function() {
		if (theWidth.style.display == 'block') {
			theWidth.style.display = 'none';
		} else {
			theWidth.style.display = 'block';
		}
	}
	drawCircle.onclick = function() {
		if (circle.style.display == 'block') {
			circle.style.display = 'none';
		} else {
			circle.style.display = 'block';
		}
	}
	drawRectangle.onclick = function() {
		if (rectangle.style.display == 'block') {
			rectangle.style.display = 'none';
		} else {
			rectangle.style.display = 'block';
		}
	}
}
var initCanvas = function() { //初始化
	canvas = document.getElementById("canvas");
	context = canvas.getContext('2d');
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
}

function drawLine() {
	canvas.onmousedown = function(evt) {
		var mousePosStart = getMousePos(canvas, evt);
		mousePosStartX = mousePosStart.x;
		mousePosStartY = mousePosStart.y;
	}
	canvas.onmouseup = function(evt) {
		var mousePosEnd = getMousePos(canvas, evt);
		mousePosEndX = mousePosEnd.x;
		mousePosEndY = mousePosEnd.y;
		context.beginPath();
		context.moveTo(mousePosStartX, mousePosStartY);
		context.lineTo(mousePosEndX, mousePosEndY);
		context.lineWidth = thesWidth;
		context.strokeStyle = theColor;
		context.stroke();
		context.closePath();
	}
}

function drawCircle() {
	if (document.getElementById('circle').style.display == 'block') {
		var circle = document.getElementById('circle');
		var checked3 = document.getElementsByName('circle');
		circle.onclick = function() {
			if (checked3[0].checked) {
				drawCircles(0);
			} else if (checked3[1].checked) {
				drawCircles(1);
			}
		}
	}
}

function drawCircles(i) {
	if (i == 0) {
		canvas.onmousedown = function(evt) {
			var mousePosStart = getMousePos(canvas, evt);
			mousePosStartX = mousePosStart.x;
			mousePosStartY = mousePosStart.y;
		}
		canvas.onmouseup = function(evt) {
			var mousePosEnd = getMousePos(canvas, evt);
			mousePosEndX = mousePosEnd.x;
			mousePosEndY = mousePosEnd.y;
			context.beginPath();
			var length = Math.sqrt((mousePosStartX - mousePosEndX) * (mousePosStartX - mousePosEndX) + (mousePosStartY - mousePosEndY) * (mousePosStartY - mousePosEndY));
			context.arc(mousePosStartX, mousePosStartY, length, 0, 2 * Math.PI);
			context.closePath();
			context.lineWidth = thesWidth;
			context.strokeStyle = theColor;
			context.stroke();
		}
	} else if (i == 1) {
		canvas.onmousedown = function(evt) {
			var mousePosStart = getMousePos(canvas, evt);
			mousePosStartX = mousePosStart.x;
			mousePosStartY = mousePosStart.y;
		}
		canvas.onmouseup = function(evt) {
			var mousePosEnd = getMousePos(canvas, evt);
			mousePosEndX = mousePosEnd.x;
			mousePosEndY = mousePosEnd.y;
			context.beginPath();
			var length = Math.sqrt((mousePosStartX - mousePosEndX) * (mousePosStartX - mousePosEndX) + (mousePosStartY - mousePosEndY) * (mousePosStartY - mousePosEndY));
			context.arc(mousePosStartX, mousePosStartY, length, 0, 2 * Math.PI);
			context.closePath();
			context.fillStyle = theColor;
			context.fill();
		}
	}
}

function drawRectangle() {
	if (document.getElementById('rectangle').style.display == 'block') {
		var rectangle = document.getElementById('rectangle');
		var checked4 = document.getElementsByName('rectangle');
		rectangle.onclick = function() {
			if (checked4[0].checked) {
				drawRectangles(0);
			} else if (checked4[1].checked) {
				drawRectangles(1);
			}
		}
	}
}

function drawRectangles(i) {
	if (i == 0) {
		canvas.onmousedown = function(evt) {
			var mousePosStart = getMousePos(canvas, evt);
			mousePosStartX = mousePosStart.x;
			mousePosStartY = mousePosStart.y;
		}
		canvas.onmouseup = function(evt) {
			var mousePosEnd = getMousePos(canvas, evt);
			mousePosEndX = mousePosEnd.x;
			mousePosEndY = mousePosEnd.y;
			context.beginPath();
			var rectangleWidth = Math.abs(mousePosEndX - mousePosStartX);
			var rectangleHeight = Math.abs(mousePosEndY - mousePosStartY);
			context.strokeStyle = theColor;
			context.lineWidth = thesWidth;
			context.strokeRect(mousePosStartX, mousePosStartY, rectangleWidth, rectangleHeight);
			context.closePath();
		}
	} else if (i == 1) {
		canvas.onmousedown = function(evt) {
			var mousePosStart = getMousePos(canvas, evt);
			mousePosStartX = mousePosStart.x;
			mousePosStartY = mousePosStart.y;
		}
		canvas.onmouseup = function(evt) {
			var mousePosEnd = getMousePos(canvas, evt);
			mousePosEndX = mousePosEnd.x;
			mousePosEndY = mousePosEnd.y;
			context.beginPath();
			var rectangleWidth = Math.abs(mousePosEndX - mousePosStartX);
			var rectangleHeight = Math.abs(mousePosEndY - mousePosStartY);
			context.fillStyle = theColor;
			context.fillRect(mousePosStartX, mousePosStartY, rectangleWidth, rectangleHeight);
			context.closePath();
		}
	}
}

function inputText() {
	canvas.onmousedown = function(evt) {
		var mousePosStart = getMousePos(canvas, evt);
		mousePosStartX = mousePosStart.x;
		mousePosStartY = mousePosStart.y;
	}
	canvas.onmouseup = function(evt) {
		var mousePosEnd = getMousePos(canvas, evt);
		mousePosEndX = mousePosEnd.x;
		mousePosEndY = mousePosEnd.y;
		if (Math.abs(mousePosEndX - mousePosStartX) > 50) {
			textArea = document.createElement('textarea');
			textArea.className = 'noneBorder';
			textArea.style.top = evt.clientY + 'px';
			textArea.style.left = evt.clientX + 'px';
			textArea.style.width = Math.abs(mousePosEndX - mousePosStartX);
			textArea.style.height = Math.abs(mousePosEndY - mousePosStartY);
			document.body.appendChild(textArea);
		}
		var deleteNodes = document.getElementsByTagName('textarea');
		for (var i = 0; i < deleteNodes.length; i++) {
			deleteNodes[i].onblur = function() {
				var fonts = this.value;
				context.beginPath();
				context.font = thesWidth * 4 + "px Arial";
				context.fillStyle = theColor;
				context.fillText(fonts, mousePosStartX - 30, mousePosStartY - 53);
				context.closePath();
				this.parentNode.removeChild(this);
			}
		}
	}
}

function cleared() {
	a = thesWidth*5;
	canvas.onmousedown = function(evt) {
		var mousePosStart = getMousePos(canvas, evt);
		x1 = mousePosStart.x;
		y1 = mousePosStart.y;
		context.save();
	    context.beginPath();
	    context.arc(x1,y1,a,0,2*Math.PI);
	    context.clip();
	    context.clearRect(0,0,canvasWidth,canvasHeight);
	    context.restore();
		canvas.onmousemove = function(evt) {
			var mousePosNext = getMousePos(canvas, evt);
			x2 = mousePosNext.x;
			y2 = mousePosNext.y;
			var asin = thesWidth*Math.sin(Math.atan((y2-y1)/(x2-x1)));
			var acos = thesWidth*Math.cos(Math.atan((y2-y1)/(x2-x1)));
			var x3 = x1+asin;
			var y3 = y1-acos;
			var x4 = x1-asin;
			var y4 = y1+acos;
			var x5 = x2+asin;
			var y5 = y2-acos;
			var x6 = x2-asin;
			var y6 = y2+acos;
			context.save();
	        context.beginPath();
	        context.arc(x2,y2,a,0,2*Math.PI);
	        context.clip();
	        context.clearRect(0,0,canvasWidth,canvasHeight);
	        context.restore();
	        context.save();
	        context.beginPath();
	        context.moveTo(x3,y3);
	        context.lineTo(x5,y5);
	        context.lineTo(x6,y6);
	        context.lineTo(x4,y4);
	        context.closePath();
	        context.clip();
	        context.clearRect(0,0,canvasWidth,canvasHeight);
	        context.restore();
	        x1 = x2;
	        y1 = y2;
		}
		canvas.onmouseup = function(){
			canvas.onmousemove = null;
		}
	}
}

function fontInput() {

	canvas.onmousedown = function(evt) {
		var mousePosStart = getMousePos(canvas, evt);
		x1 = mousePosStart.x;
		y1 = mousePosStart.y;
		context.beginPath()
		context.fillStyle = theColor;
	    context.arc(x1,y1,thesWidth,0,2*Math.PI);
	    context.fill();
	    context.closePath();
		canvas.onmousemove = function(evt) {
			var mousePosNext = getMousePos(canvas, evt);
			x2 = mousePosNext.x;
			y2 = mousePosNext.y;
			var asin = thesWidth*Math.sin(Math.atan((y2-y1)/(x2-x1)));
			var acos = thesWidth*Math.cos(Math.atan((y2-y1)/(x2-x1)))
			var x3 = x1+asin;
			var y3 = y1-acos;
			var x4 = x1-asin;
			var y4 = y1+acos;
			var x5 = x2+asin;
			var y5 = y2-acos;
			var x6 = x2-asin;
			var y6 = y2+acos;
			context.beginPath();
			context.fillStyle = theColor;
		    context.arc(x2,y2,thesWidth,0,2*Math.PI);
		    context.fill();
		    context.closePath();
		    context.beginPath();
		    context.fillStyle = theColor;
		    context.moveTo(x3,y3);
	        context.lineTo(x5,y5);
	        context.lineTo(x6,y6);
	        context.lineTo(x4,y4);
	        context.fill();
	        context.closePath();
	        x1 = x2;
	        y1 = y2;
		}
		canvas.onmouseup = function(){
			canvas.onmousemove = null;
		}
	}
}

function colors() {
	var color = document.getElementById('colorChoose');
	color.onblur = function() {
		theColor = color.value;
	}
}

function theWidths() {
	var theWidth = document.getElementById('theWidth');
	var checked2 = document.getElementsByName('theWidth');
	theWidth.onclick = function() {
		if (checked2[0].checked) {
			thesWidth = 1;
		} else if (checked2[1].checked) {
			thesWidth = 3;
		} else if (checked2[2].checked) {
			thesWidth = 5;
		} else if (checked2[3].checked) {
			thesWidth = 10;
		}
	}
}

function getMousePos(canvas, evt) {
	return {
		x: evt.clientX - canvas.offsetLeft,
		y: evt.clientY - canvas.offsetTop
	}
}