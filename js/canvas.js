var concise = {
    hasClass: function(elem, cName) {
        if (elem.className) {
            return !!elem.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
        }
        return false;
    },
    addClass: function(elem, cName) {
        if (!concise.hasClass(elem, cName)) {
            elem.className += " " + cName;
        }
    },
    removeClass: function(elem, cName) {
        if (concise.hasClass(elem, cName)) {
            elem.className = elem.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), "");
        }
    }
};
var XiaoRuo = function() {
    this.withs = (document.body.clientWidth) * 0.7;
    this.heights = 600;
    this.theColor = '#000';
    this.data = [0, 1, '#3f3f3f', 1,];

    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext('2d');

    this.drawLines = document.getElementById('drawLine');
    this.drawRectangle = document.getElementById('drawRectangle');
    this.drawCircle = document.getElementById('drawCircle');
    this.test = document.getElementById('inputText');
    this.draws = document.getElementById('fontInput');
    this.clears = document.getElementById('clear');
    this.widthChoose = document.getElementById('widthChoose');
    this.colorChoose = document.getElementById('colorChoose');

    this.init();
};
XiaoRuo.prototype = {
    init: function() {
        this.initCanvas();
        this.setData();
        this.draw();
    },
    setData: function() {
        var that = this;
        this.drawLines.onclick =  function() {
            that.data[0] = 0;
        };
        this.drawRectangle.onclick = function() {
            var childrena = this.children;
            that.data[0] = 1;
            if(concise.hasClass(childrena[0], 'none')) {
                concise.removeClass(childrena[0], 'none');
                concise.addClass(childrena[1], 'none');
                that.data[3] = 0;
            } else if (concise.hasClass(childrena[1], 'none')) {
                concise.removeClass(childrena[1], 'none');
                concise.addClass(childrena[0], 'none');
                that.data[3] = 1;
            }
        };
        this.drawCircle.onclick = function() {
            var childrena = this.children;
            that.data[0] = 2;
            if(concise.hasClass(childrena[0], 'none')) {
                concise.removeClass(childrena[0], 'none');
                concise.addClass(childrena[1], 'none');
                that.data[3] = 0;
            } else if (concise.hasClass(childrena[1], 'none')) {
                concise.removeClass(childrena[1], 'none');
                concise.addClass(childrena[0], 'none');
                that.data[3] = 1;
            }
        };
        this.test.onclick = function() {
            that.data[0] = 3;
        };
        this.draws.onclick = function() {
            that.data[0] = 4;
        };
        this.clears.onclick = function() {
            that.data[0] = 5;
        };
        this.widthChoose.onclick = function() {
            var childrena = this.children;
            if(concise.hasClass(childrena[0], 'block')) {
                that.data[1] = 2;
                concise.removeClass(childrena[0], 'block');
                concise.addClass(childrena[0], 'none');
                concise.removeClass(childrena[1], 'none');
                concise.addClass(childrena[1], 'block');
            } else if (concise.hasClass(childrena[1], 'block')) {
                that.data[1] = 3;
                concise.removeClass(childrena[1], 'block');
                concise.addClass(childrena[1], 'none');
                concise.removeClass(childrena[2], 'none');
                concise.addClass(childrena[2], 'block');
            } else if (concise.hasClass(childrena[2], 'block')) {
                that.data[1] = 4;
                concise.removeClass(childrena[2], 'block');
                concise.addClass(childrena[2], 'none');
                concise.removeClass(childrena[3], 'none');
                concise.addClass(childrena[3], 'block');
            } else if (concise.hasClass(childrena[3], 'block')) {
                that.data[1] = 1;
                concise.removeClass(childrena[3], 'block');
                concise.addClass(childrena[3], 'none');
                concise.removeClass(childrena[0], 'none');
                concise.addClass(childrena[0], 'block');
            }
        };
        this.colorChoose.onchange = function() {
            console.log(document.getElementById('theColor').value);
            that.data[2] = document.getElementById('theColor').value;
        }
    },
    initCanvas: function() {
        this.canvas.width = this.withs;
        this.canvas.height = this.heights;
    },
    draw: function() {
        var that = this;
        this.canvas.onmouseover = function() {
            switch (that.data[0]) {
                case 0:
                    that.drawLine();
                    break;
                case 1:
                    that.drawRectangles(that.data[3]);
                    break;
                case 2:
                    that.drawCircles(that.data[3]);
                    break;
                case 3:
                    that.inputText();
                    break;
                case 4:
                    that.fontInput();
                    break;
                case 5:
                    that.cleared();
                    break;
            }
        };
    },
    drawLine: function() {
        var that = this;
        this.canvas.onmousedown = function(evt) {
            var mousePosStart = getMousePos(canvas, evt);
            mousePosStartX = mousePosStart.x;
            mousePosStartY = mousePosStart.y;
        };
        this.canvas.onmouseup = function(evt) {
            var mousePosEnd = getMousePos(canvas, evt);
            mousePosEndX = mousePosEnd.x;
            mousePosEndY = mousePosEnd.y;
            that.context.beginPath();
            that.context.moveTo(mousePosStartX, mousePosStartY);
            that.context.lineTo(mousePosEndX, mousePosEndY);
            that.context.lineWidth = that.data[1];
            that.context.strokeStyle = that.data[2];
            that.context.stroke();
            that.context.closePath();
        };
    },
    drawCircles: function(i) {
        var that = this;
        if (i == 0) {
            this.canvas.onmousedown = function(evt) {
                var mousePosStart = getMousePos(canvas, evt);
                mousePosStartX = mousePosStart.x;
                mousePosStartY = mousePosStart.y;
            }
            this.canvas.onmouseup = function(evt) {
                var mousePosEnd = getMousePos(canvas, evt);
                mousePosEndX = mousePosEnd.x;
                mousePosEndY = mousePosEnd.y;
                that.context.beginPath();
                var length = Math.sqrt((mousePosStartX - mousePosEndX) * (mousePosStartX - mousePosEndX) + (mousePosStartY - mousePosEndY) * (mousePosStartY - mousePosEndY));
                that.context.arc(mousePosStartX, mousePosStartY, length, 0, 2 * Math.PI);
                that.context.closePath();
                that.context.lineWidth = that.data[1];
                that.context.strokeStyle = that.data[2];
                that.context.stroke();
            }
        } else if (i == 1) {
            this.canvas.onmousedown = function(evt) {
                var mousePosStart = getMousePos(canvas, evt);
                mousePosStartX = mousePosStart.x;
                mousePosStartY = mousePosStart.y;
            }
            this.canvas.onmouseup = function(evt) {
                var mousePosEnd = getMousePos(canvas, evt);
                mousePosEndX = mousePosEnd.x;
                mousePosEndY = mousePosEnd.y;
                that.context.beginPath();
                var length = Math.sqrt((mousePosStartX - mousePosEndX) * (mousePosStartX - mousePosEndX) + (mousePosStartY - mousePosEndY) * (mousePosStartY - mousePosEndY));
                that.context.arc(mousePosStartX, mousePosStartY, length, 0, 2 * Math.PI);
                that.context.closePath();
                that.context.fillStyle = that.data[2];
                that.context.fill();
            }
        }
    },
    drawRectangles: function(i) {
        var that = this;
        if (i == 0) {
            this.canvas.onmousedown = function(evt) {
                var mousePosStart = getMousePos(canvas, evt);
                mousePosStartX = mousePosStart.x;
                mousePosStartY = mousePosStart.y;
            }
            this.canvas.onmouseup = function(evt) {
                var mousePosEnd = getMousePos(canvas, evt);
                mousePosEndX = mousePosEnd.x;
                mousePosEndY = mousePosEnd.y;
                that.context.beginPath();
                var rectangleWidth = Math.abs(mousePosEndX - mousePosStartX);
                var rectangleHeight = Math.abs(mousePosEndY - mousePosStartY);
                that.context.strokeStyle = that.data[2];
                that.context.lineWidth = that.data[1];
                that.context.strokeRect(mousePosStartX, mousePosStartY, rectangleWidth, rectangleHeight);
                that.context.closePath();
            }
        } else if (i == 1) {
            this.canvas.onmousedown = function(evt) {
                var mousePosStart = getMousePos(canvas, evt);
                mousePosStartX = mousePosStart.x;
                mousePosStartY = mousePosStart.y;
            }
            this.canvas.onmouseup = function(evt) {
                var mousePosEnd = getMousePos(canvas, evt);
                mousePosEndX = mousePosEnd.x;
                mousePosEndY = mousePosEnd.y;
                that.context.beginPath();
                var rectangleWidth = Math.abs(mousePosEndX - mousePosStartX);
                var rectangleHeight = Math.abs(mousePosEndY - mousePosStartY);
                that.context.fillStyle = that.data[2];
                that.context.fillRect(mousePosStartX, mousePosStartY, rectangleWidth, rectangleHeight);
                that.context.closePath();
            }
        }
    },
    inputText: function() {
        var that = this;
        this.canvas.onmousedown = function(evt) {
            var mousePosStart = getMousePos(canvas, evt);
            mousePosStartX = mousePosStart.x;
            mousePosStartY = mousePosStart.y;
        }
        this.canvas.onmouseup = function(evt) {
            var mousePosEnd = getMousePos(canvas, evt);
            mousePosEndX = mousePosEnd.x;
            mousePosEndY = mousePosEnd.y;
            if (Math.abs(mousePosEndX - mousePosStartX) > 50) {
                var textArea = document.createElement('textarea');
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
                    that.context.beginPath();
                    that.context.font = that.data[1] * 4 + "px Arial";
                    that.context.fillStyle = that.data[2];
                    that.context.fillText(fonts, mousePosStartX - 30, mousePosStartY - 53);
                    that.context.closePath();
                    this.parentNode.removeChild(this);
                }
            }
        }
    },
    cleared: function() {
        var that = this;
        a = this.data[1] * 5;
        this.canvas.onmousedown = function(evt) {
            var mousePosStart = getMousePos(canvas, evt);
            x1 = mousePosStart.x;
            y1 = mousePosStart.y;
            that.context.save();
            that.context.beginPath();
            that.context.arc(x1, y1, a, 0, 2 * Math.PI);
            that.context.clip();
            that.context.clearRect(0, 0, that.withs, that.heights);
            that.context.restore();
            that.canvas.onmousemove = function(evt) {
                var mousePosNext = getMousePos(canvas, evt);
                x2 = mousePosNext.x;
                y2 = mousePosNext.y;
                var asin = that.thesWidth * Math.sin(Math.atan((y2 - y1) / (x2 - x1)));
                var acos = that.thesWidth * Math.cos(Math.atan((y2 - y1) / (x2 - x1)));
                var x3 = x1 + asin;
                var y3 = y1 - acos;
                var x4 = x1 - asin;
                var y4 = y1 + acos;
                var x5 = x2 + asin;
                var y5 = y2 - acos;
                var x6 = x2 - asin;
                var y6 = y2 + acos;
                that.context.save();
                that.context.beginPath();
                that.context.arc(x2, y2, a, 0, 2 * Math.PI);
                that.context.clip();
                that.context.clearRect(0, 0, that.withs, that.heights);
                that.context.restore();
                that.context.save();
                that.context.beginPath();
                that.context.moveTo(x3, y3);
                that.context.lineTo(x5, y5);
                that.context.lineTo(x6, y6);
                that.context.lineTo(x4, y4);
                that.context.closePath();
                that.context.clip();
                that.context.clearRect(0, 0, that.withs, that.heights);
                that.context.restore();
                x1 = x2;
                y1 = y2;
            }
            that.canvas.onmouseup = function() {
                that.canvas.onmousemove = null;
            }
        }
    },
    fontInput: function() {
        var that = this;
        this.canvas.onmousedown = function(evt) {
            var mousePosStart = getMousePos(canvas, evt);
            x1 = mousePosStart.x;
            y1 = mousePosStart.y;
            that.context.beginPath()
            that.context.fillStyle = that.data[2];
            that.context.arc(x1, y1, that.data[1], 0, 2 * Math.PI);
            that.context.fill();
            that.context.closePath();
            that.canvas.onmousemove = function(evt) {
                var mousePosNext = getMousePos(canvas, evt);
                x2 = mousePosNext.x;
                y2 = mousePosNext.y;
                var asin = that.data[1] * Math.sin(Math.atan((y2 - y1) / (x2 - x1)));
                var acos = that.data[1] * Math.cos(Math.atan((y2 - y1) / (x2 - x1)))
                var x3 = x1 + asin;
                var y3 = y1 - acos;
                var x4 = x1 - asin;
                var y4 = y1 + acos;
                var x5 = x2 + asin;
                var y5 = y2 - acos;
                var x6 = x2 - asin;
                var y6 = y2 + acos;
                that.context.beginPath();
                that.context.fillStyle = that.data[2];
                that.context.arc(x2, y2, that.data[1], 0, 2 * Math.PI);
                that.context.fill();
                that.context.closePath();
                that.context.beginPath();
                that.context.fillStyle = that.data[2];
                that.context.moveTo(x3, y3);
                that.context.lineTo(x5, y5);
                that.context.lineTo(x6, y6);
                that.context.lineTo(x4, y4);
                that.context.fill();
                that.context.closePath();
                x1 = x2;
                y1 = y2;
            }
            that.canvas.onmouseup = function() {
                canvas.onmousemove = null;
            }
        }
    }
};

function getMousePos(canvas, evt) {
    return {
        x: evt.clientX - canvas.offsetLeft,
        y: evt.clientY - canvas.offsetTop
    }
}
var xiaoRuo = new XiaoRuo();