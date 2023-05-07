/*
The MIT License (MIT)

Copyright (c) 2015 Michał Sajnóg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

 */

/*
   Copyright (c) .NET Foundation and Contributors
   Copyright © 2022 Gérald Barré
   https://www.meziantou.net/anchor-navigation-in-a-blazor-application.htm

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0


 */
/*
 * <!--

Copyright (c) 2022 - theprogrammingexpert - https://codepen.io/theprogrammingexpert/pen/XWdoLbL

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall
be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.

-->

 */

function pdf(fullName, presname) {
    document.title = "משוב לפרזנטציה " + presname + ", " + fullName;
    window.print();
}
function Return2title() {
    document.title = "קתימבוט";
}



function scroll() {
    const sections = [document.querySelectorAll(".anc")];
    const inView = (section) => {
        let top = section.offsetTop;
        let height = section.offsetHeight;

        while (section.offsetParent) {
            section = section.offsetParent;
            top += section.offsetTop;
        }
        return (
            top + 450 < window.pageYOffset + window.innerHeight &&
            top + height - 200 > window.pageYOffset
        );

    };

    window.onscroll = () => {
        try {
            let next = false;
            sections[0].forEach((div) => {
                const a = document.getElementById("a" + div.id)
                if (inView(div) && !next) {
                    a.classList.add("dotA");
                    a.classList.remove("notA");
                    next = true;
                } else {
                    a.classList.add("notA");
                    a.classList.remove("dotA");
                }
            });
        }
        catch { }
    };

}
function stopS() {
    window.onscroll = null;
}


let webSocket;
function start() {
    //webSocket = new WebSocket('wss://localhost:5001/ws');
    webSocket = new WebSocket('wss://projects.telem-hit.net/2022/IOT_DanNetta/ws');
    webSocket.addEventListener("open", yay)

}
function yay() {
    alert("yay")
    console.log("start");
    webSocket.send("start");

}
function message() {
    webSocket.send("hi");
    webSocket.addEventListener('message', gotMessege);
}
function gotMessege(event) {
    //soc = document.getElementById("soc");
    //soc.innerHTML = event.data;
    alert(event.data);
    switch (event.data) {
        case "on":
            webSocket.send(userActive);
            break;
        case userActive:
            webSocket.send(presActive);
            break;
        case presActive:
            webSocket.send("start")
            break
        case "close":
            console.log("end");
            webSocket.closePath();
            break;
        default:
            break;

    }
}

function BlazorScrollToId(id) {
    const element = document.getElementById(id);
    try {
        let btn = document.getElementById("a" + id)
        btn.classList.add("dotA");
        btn.classList.remove("notA");
        console.log(btn);
    }
    catch { }
    if (element instanceof HTMLElement) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }

}


function drawRangeStatic(rangeID, arr) {
    let yellowR = "#F0CB7F";
    let greenR = "#9CF097";
    let redR = "#F073BC";

    let rangeC = document.getElementById(rangeID);
    let rangeWidth = rangeC.width;
    let rangeHeight = rangeC.height;
    let rangectx = rangeC.getContext("2d");
    rangectx.beginPath()
    rangectx.lineWidth = rangeHeight;
    rangectx.lineCap = 'round';
    rangectx.lineJoin = 'round';
    rangectx.moveTo(10, rangeHeight / 2);
    let Rangegrd = rangectx.createLinearGradient(0, 0, rangeWidth, 0);
    Rangegrd.addColorStop(0, redR);
    Rangegrd.addColorStop(arr[1] / 100, yellowR);
    Rangegrd.addColorStop(arr[2] / 100, greenR);
    Rangegrd.addColorStop(arr[3] / 100, greenR);
    Rangegrd.addColorStop(arr[4] / 100, yellowR);
    Rangegrd.addColorStop(arr[5] / 100, yellowR);
    Rangegrd.addColorStop(arr[6] / 100, redR);

    rangectx.strokeStyle = Rangegrd;
    rangectx.lineTo(rangeWidth - 10, rangeHeight / 2);
    rangectx.stroke();
    drawMarkerStatic("m" + rangeID)
}

function drawMarkerStatic(thid) {
    let squareCan = document.getElementById(thid);
    let squreW = 30;
    let squreH = 30;
    let squarectx = squareCan.getContext("2d");
    let squaregrd = squarectx.createLinearGradient(0, 0, squreH, squreH);
    squaregrd.addColorStop(0, "#7841CC");
    squaregrd.addColorStop(1, "#AE9CE6");
    squarectx.fillStyle = squaregrd;
    squarectx.beginPath();
    squarectx.rect(0, 0, squreW, squreH);
    squarectx.fill();
}

//function scoreCan(score, canID, w, lw, dots, isBig) {
//    console.log(2);
//    console.log(isBig);
//    var h = w
//    let can = document.getElementById(canID);
//    let canCon = can.getContext("2d");
//    can.width = w;
//    can.height = w;
//    let radius = w * 0.4;
//    canCon.beginPath();
//    canCon.lineWidth = lw;
//    var minus = (Math.PI * 0.5)
//    canCon.arc(w / 2, h / 2, radius, 0 - minus, (Math.PI * 2) * (score / 100) - minus, false);
//    var color = "#7841CC";
//    canCon.beginPath();



//    var gradient = canCon.createConicGradient(80, w / 2, w / 2);
//    if (isBig) {
//        gradient.addColorStop("0", "#F097CB");
//        gradient.addColorStop("0.5", "#F0CB7F");
//        gradient.addColorStop("0.9", "#9CF097");

//    }
//    else {
//        startC = "#AE9CE6";
//        endC = "#7841CC";

//        gradient.addColorStop("0", startC);
//        gradient.addColorStop("0.9", endC);
//    }


//    canCon.strokeStyle = gradient;
//    canCon.lineCap = "round";
//    canCon.lineWidth = lw;
//    canCon.arc(w / 2, h / 2, radius, 0 - minus, (Math.PI * 2) * (score / 100) - minus, false);

//    canCon.stroke();
//    canCon.font = +can.width / 3 + "px" + " rubik";
//    canCon.fillStyle = "#3E3737";
//    var metrics = canCon.measureText(score);
//    var textWidth = metrics.width;
//    var textHeight = w / 4;

//    var xPos = w / 2 - textWidth / 2,
//        yPos = h / 2 + textHeight / 2;
//    canCon.fillText(score, xPos, yPos);


//    let radians = score / 100 * 2 * Math.PI;
//    canCon.beginPath();

//    canCon.arc(w / 2 + radius * (Math.sin(radians)),
//        h / 2 - radius * (Math.cos(radians)), dots, 0, 2 * Math.PI, false);
//    let c;
//    if (score < 0.3)
//        c = '#F073BC';
//    else if (score < 0.70)
//        c = '#F0CB7F';
//    else {
//        c = '#9CF097';
//    }
//    if (isBig)
//        c = "#7841CC";
//    canCon.fillStyle = c;
//    canCon.fill();
//}

function drawStressChart(chartID, nums) {
    let graphSC = document.getElementById(chartID);
    let graphSctx = graphSC.getContext("2d");
    let graphSWidth = graphSC.width - 10;
    let graphSHeight = graphSC.height - 10;
    graphSctx.beginPath();
    graphSctx.lineWidth = 3;
    graphSctx.lineCap = 'round';
    graphSctx.lineJoin = 'round';
    graphSctx.strokeStyle = "#5346A3";

    graphSctx.moveTo(10, graphSHeight - nums[0] * (graphSHeight - 20) / 100);
    for (var i = 1; i < nums.length; i++) {
        x = (graphSWidth - 10) * i / (nums.length - 1);
        y = graphSHeight - nums[i] * (graphSHeight - 20) / 100;
        graphSctx.lineTo(x, y);
    }
    graphSctx.lineTo(x, graphSHeight);
    graphSctx.lineTo(10, graphSHeight);
    graphSctx.closePath();
    var grd = graphSctx.createLinearGradient(0, 0, graphSWidth, 0);
    var b = "";
    let yellow = "#F0CB7Faa";
    let green = "#9CF097aa";
    let red = "#F073BCaa";

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < 66) {
            if (b == "r")
                grd.addColorStop((i - 0.5) / nums.length, yellow);
            grd.addColorStop((i) / nums.length, green);
            b = "g"
        }
        else if (nums[i] < 75) {
            b = "y"
            grd.addColorStop(i / nums.length, "#F0CB7Faa");
        }
        else {
            if (b == "g")
                grd.addColorStop((i - 0.5) / nums.length, yellow);
            grd.addColorStop((i) / nums.length, red);
            b = "r"
        }

    }
    graphSctx.fillStyle = grd;
    graphSctx.fill();

    graphSctx.beginPath();
    graphSctx.strokeStyle = "#5346A3";
    canvas_arrow(graphSctx, 10, graphSHeight, graphSWidth, graphSHeight);
    canvas_arrow(graphSctx, 10, graphSHeight, 10, 10);
    graphSctx.stroke();

}
function calcS(stressID, nums) {
    newL = []
    var calc = 0.0833333333;
    for (var i = 0; i < nums.length; i++)
        newL.push(100 - nums[i] * calc)
    drawStressChart(stressID, newL)
}


function drawChart(chartID, nums) {

    nums.reverse();
    let graphC = document.getElementById(chartID);
    let graphctx = graphC.getContext("2d");
    graphctx.clearRect(0, 0, graphC.width, graphC.height);
    let graphWidth = graphC.width - 10;
    let graphHeight = graphC.height - 10;
    graphctx.beginPath();
    graphctx.lineWidth = 1;
    graphctx.strokeStyle = "#5346A3";
    canvas_arrow(graphctx, 10, graphHeight, graphWidth, graphHeight);
    canvas_arrow(graphctx, 10, graphHeight, 10, 10);
    graphctx.stroke();
    graphctx.beginPath();
    graphctx.lineWidth = 3;
    graphctx.lineCap = 'round';
    graphctx.lineJoin = 'round';
    graphctx.strokeStyle = "#5346A3";

    graphctx.moveTo(25, graphHeight - nums[0] * (graphHeight - 20) / 100);
    for (var i = 1; i < nums.length; i++) {
        x = (graphWidth - 20) * i / (nums.length - 1);
        y = graphHeight - nums[i] * (graphHeight - 20) / 100;
        graphctx.lineTo(x, y);
    }
    graphctx.stroke();
}
function canvas_arrow(context, fromx, fromy, tox, toy) {
    var headlen = 5; // length of head in pixels
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
}
//score,myid, width, lineWidth, goldCir,isBig
function scoreCan(score, canID, w, cir, line, isBig) {
    console.log(1);
    console.log(isBig);

    var h = w;
    let can = document.getElementById(canID);
    let canCon = can.getContext("2d");
    can.width = w;
    can.height = w;
    let radius = w * 0.4;
    canCon.beginPath();
    canCon.lineWidth = line;
    var minus = (Math.PI * 0.5)
    canCon.arc(w / 2, w / 2, radius, 0 - minus, (Math.PI * 2) * (score / 100) - minus, false);
    var color = "#7841CC";
    canCon.beginPath();

    var gradient = canCon.createConicGradient(80, w / 2, w / 2);
    if (isBig) {
        gradient.addColorStop("0", "#F097CB");
        gradient.addColorStop("0.5", "#F0CB7F");
        gradient.addColorStop("0.9", "#9CF097");

    }
    else {
        startC = "#AE9CE6";
        endC = "#7841CC";

        gradient.addColorStop("0", startC);
        gradient.addColorStop("0.9", endC);
    }

    canCon.strokeStyle = gradient;

    canCon.lineCap = "round";

    canCon.lineWidth = line;
    canCon.arc(w / 2, w / 2, radius, 0.005 - minus, (Math.PI * 2) * (score / 100) - minus, false);

    canCon.stroke();

    var color = "#3E3737";
    canCon.font = +w / 3 + "px" + " rubik";
    canCon.fillStyle = color;
    var metrics = canCon.measureText(score);
    var textWidth = metrics.width;
    var textHeight = w / 4;

    var xPos = w / 2 - textWidth / 2,
        yPos = w / 2 + textHeight / 2;
    if (score == 0 || score == "0")
        xPos = w / 2 - textWidth / 2;
    canCon.textAlign = "left";

    canCon.fillText(score, xPos, yPos);


    let radians = score / 100 * 2 * Math.PI - 0.015 * score / 20;
    canCon.beginPath();

    canCon.arc(w / 2 + radius * (Math.sin(radians)),
        w / 2 - radius * (Math.cos(radians)), cir, 0, 2 * Math.PI, false);
    if (score < 30)
        c = '#F073BC';
    else if (score < 70)
        c = '#F0CB7F';
    else {
        c = '#9CF097';
    }
    if (isBig)
        c = "#7841CC";
    canCon.fillStyle = c;
    //   canCon.fillStyle = "#F0CB7F";
    canCon.fill();
}

function scoreCanAni(score, canID, lineWidth,goldCir,mywidth) {
    let temp = 0;
    cir = goldCir;
    line = lineWidth;
    var w = mywidth;
    var h = w;
    let can = document.getElementById(canID);
    let canCon = can.getContext("2d");
    can.width = w;
    can.height = w;
    let radius = w * 0.4;
    var animate = setInterval(ani, 100 / 5);
    function ani() {
        canCon.clearRect(0, 0, w, w);
        canCon.beginPath();
        canCon.lineWidth = line;
        var minus = (Math.PI * 0.5)
        canCon.arc(w / 2, h / 2, radius, 0 - minus, (Math.PI * 2) * (temp / 100) - minus, false);
        var color = "#7841CC";
        canCon.beginPath();

        var gradient = canCon.createConicGradient(80, w / 2, w / 2);

        startC = "#AE9CE6";
        endC = "#7841CC";

        gradient.addColorStop("0", startC);
        gradient.addColorStop("0.9", endC);
        canCon.strokeStyle = gradient;

        canCon.lineCap = "round";

        canCon.lineWidth = line;
        var min = 0.2;
        if (temp < 10)
            min = 0
        canCon.arc(w / 2, h / 2, radius, 0.05 - minus, (Math.PI * 2) * (temp / 100) - minus - min, false);
        if (temp >0)
          canCon.stroke();

        canCon.font = +can.width / 3 + "px" + " rubik";
        canCon.fillStyle = "#3E3737";
        var metrics = canCon.measureText(temp);
        var textWidth = metrics.width;
        var textHeight = w / 4;

        //var xPos = w / 2 - textWidth / 2,
        //    yPos = h / 2 + textHeight / 2;
             var xPos = w / 2 - textWidth / 2,
            yPos = w / 2 + textHeight / 2;
        if (temp == 0 || temp == "0")
            xPos = w / 2 - textWidth / 2;
        canCon.textAlign = "left";

        canCon.fillText(temp, xPos, yPos);


        let radians = temp / 100 * 2 * Math.PI - 0.1;
        if (temp > 95)
            radians -= 0.1;
        if (temp == 100 )
            radians += 0.15;
        if (temp == 0)
            radians -= 0.05;

        canCon.beginPath();

        canCon.arc(w / 2 + radius * (Math.sin(radians)),
            h / 2 - radius * (Math.cos(radians)), cir, 0, 2 * Math.PI, false);
        //var minus = (Math.PI * 0.5)
        //canCon.arc(w / 2, w / 2, radius, 0 - minus, (Math.PI * 2) * (temp / 100) - minus, false);
        //var color = "#7841CC";
        //canCon.beginPath();

        //var gradient = canCon.createConicGradient(80, w / 2, w / 2);

        //startC = "#AE9CE6";
        //endC = "#7841CC";

        //gradient.addColorStop("0", startC);
        //gradient.addColorStop("0.9", endC);

        //canCon.strokeStyle = gradient;

        //canCon.lineCap = "round";

        //canCon.lineWidth = line;
        //canCon.arc(w / 2, w / 2, radius, 0.1 - minus, (Math.PI * 2) * (temp / 100) - minus, false);

        //canCon.stroke();

        //var color = "#3E3737";
        //canCon.font = +w / 3 + "px" + " rubik";
        //canCon.fillStyle = color;
        //var metrics = canCon.measureText(temp);
        //var textWidth = metrics.width;
        //var textHeight = w / 4;

        //var xPos = w / 2 - textWidth / 2,
        //    yPos = w / 2 + textHeight / 2;
        //if (temp == 0 || temp == "0")
        //    xPos = w / 2 - textWidth / 2;
        //canCon.textAlign = "left";

        //canCon.fillText(temp, xPos, yPos);


        //let radians = temp / 100 * 2 * Math.PI;
        //canCon.beginPath();

        //canCon.arc(w / 2 + radius * (Math.sin(radians)),
        //    w / 2 - radius * (Math.cos(radians)), cir, 0, 2 * Math.PI, false);
        if (temp < 30)
            c = '#F073BC';
        else if (temp < 70)
            c = '#F0CB7F';
        else {
            c = '#9CF097';
        }

        canCon.fillStyle = c;
        //   canCon.fillStyle = "#F0CB7F";
        canCon.fill();
        if (temp < score)
            temp++;
        else
            clearInterval(animate);
    }
}

function drawPie(myid, one, two) {
    let arc = document.getElementById(myid);
    var first = 10 + 160 * one / 100;
    var sec = first + 160 * two / 100;
    arc.style = "background: conic-gradient( #DFCFF900 10deg, #DFCFF9 10deg " + first + "deg, #C2A9E8 " + first + "deg " + sec + "deg, #A999E5 " + sec + "deg 170deg, #DFCFF900 170deg)";
}

function drawPieH(myid, one, two) {
    let arc = document.getElementById(myid);
    var first = 100 + 160 * one / 100;
    var sec = first + 160 * two / 100;
    arc.style = "background: conic-gradient( #DFCFF900 100deg, #DFCFF9 100deg " + first + "deg, #C2A9E8 " + first + "deg " + sec + "deg, #A999E5 " + sec + "deg 260deg, #DFCFF900 260deg)";
}

//................................................
//...ציור של הציון על פי איידי..................
//................................................

function innerscore(id) {
    let my = document.getElementById(id)
    let score = my.innerHTML;
    var num = 0;
    function drawCirSmall() {
        my.style = "background: linear-gradient(0deg, #DFCFF9 0%, #BCADEB " + num + "% , #ECF0FF " + num + "%);";
        num += score / 30;
        if (num < score)
            myRequestId = window.requestAnimationFrame(drawCirSmall);
    }
    drawCirSmall();
}


(function ($) {
    $.fn.circleGraphic = function (options, lineWidth, cirsize, isBig, canID) {
        $.fn.circleGraphic.defaults = {
            color: '#7841CC',
            startAngle: 0,
        };
        let $this = $(this)
        var opts = $.extend({}, $.fn.circleGraphic.defaults, options);

        var percentage = $this.html();

     

        let startC;
        let endC;
        if (percentage < 30) {
            startC = "#F4B6DA";
            endC = "#F097CB";
        }
        else if (percentage < 70) {
            startC = "#F4DAA5";
            endC = "#F0CB7F";
        }
        else {
            startC = "#B9F4B6";
            endC = "#9CF097";

        }
        var ID = "c" + percentage + Math.random();
        $this.append("<canvas id='" + ID + "'></canvas>");

        var canvas = document.getElementById(ID),
            context = canvas.getContext('2d');

        var Width = $this.width();
        $this.height(Width);
        var Height = $this.height();

        canvas.width = Width;
        canvas.height = Height;

        var startAngle = opts.startAngle
        if (percentage > 95) {
            startAngle = 0.02;
        }


           var endAngle = percentage / 100,
            angle = startAngle,
            radius = Width * 0.4;

        function drawTrackArc() {
            context.beginPath();
            context.lineWidth = lineWidth;
            context.arc(Width / 2, Height / 2, radius, (Math.PI / 180) * (startAngle * 360 - 90), (Math.PI / 180) * (endAngle * 360 + 270), false);
            //        context.stroke();
            context.closePath();
        }

        function drawOuterArc(_angle, _color) {
            var angle = _angle;
            var color = _color;
            context.beginPath();


            var gradient = context.createConicGradient(80, Width / 2, Width / 2);
            if (isBig) {
                gradient.addColorStop("0", "#F097CB");
                gradient.addColorStop("0.5", "#F0CB7F");
                gradient.addColorStop("0.9", "#9CF097");

            }
            else {
                //gradient.addColorStop("0", "#AE9CE6");
                //gradient.addColorStop("0.9", "#7841CC");
                startC = "#AE9CE6";
                endC = "#7841CC";

                gradient.addColorStop("0", startC);
                gradient.addColorStop("0.9", endC);
            }
            context.strokeStyle = gradient;

            context.lineCap = 'round';

            context.lineWidth = lineWidth;
            context.arc(Width / 2, Height / 2, radius, (Math.PI / 180) * (startAngle * 360 - 90), (Math.PI / 180) * (angle * 360 - 90), false);
            context.stroke();
            context.closePath();
        }

        function numOfPercentage(_angle, _color) {
            var angle = Math.ceil(_angle * 100);

            var color = "#3E3737";
            context.font = +Width / 50 + "em" + " rubik";
            context.fillStyle = color;
            var metrics = context.measureText(angle);
            var textWidth = metrics.width;
            var textHeight = Width / 4;

            var xPos = Width / 2 - textWidth / 2,
                yPos = Height / 2 + textHeight / 2;
            if (angle == 0 || angle == "0")
                xPos = Width / 2 + textWidth / 2
            context.fillText(angle, xPos, yPos);
            context.textAlign = "left";

        }

        function drawACircleInTheEnd() {
            
            let radians = angle * 2 * Math.PI + 0.025;
            if (percentage == 100)
                radians += 0.025;
            if (percentage == 0)
                radians -= 0.025;
            context.beginPath();
            context.arc(Width / 2 + radius * (Math.sin(radians)),
                Height / 2 - radius * (Math.cos(radians)), cirsize, 0, 2 * Math.PI, false);
            let c;
            if (angle < 0.3)
                c = '#F073BC';
            else if (angle < 0.70)
                c = '#F0CB7F';
            else {
                c = '#9CF097';
            }
            if (isBig)
                c = "#7841CC";
            context.fillStyle = c
            context.fill();
            context.lineWidth = 0;
            context.strokeStyle = c;
            context.stroke();

        }

        function draw() {
            var loop = setInterval(function () {
                context.clearRect(0, 0, Width, Height);
                drawTrackArc();
                drawOuterArc(angle, opts.color);
                numOfPercentage(angle, opts.color);
                drawACircleInTheEnd();
                angle += 0.01;
                if (angle > endAngle) {
                    clearInterval(loop);
                }

            }, 1000 / 60);
        }
        draw();
        return $this;
    }
}
)(jQuery);
//הפעלת ציור
function drawc(f, line, cir, isBig, cid) {
    //lineWidth = line;
    //cirsize = cir;
    $("#" + f).circleGraphic(line, line, cir, isBig, cid);
}

//let lineWidth;
//let cirsize;


function login() {
    var loginBTN = document.getElementById("navLogin");
    var mainBTN = document.getElementById("navMain");
    try {
        mainBTN.style = "display: flex";
        loginBTN.classList.remove("goldBtn");
        loginBTN.classList.add("out");
        loginBTN.innerHTML = "<span class='icon-out-icon' style='font-size:1.5em;'></span>";
    }
    catch {

    }
}
function logout() {
    try {
        var loginBTN = document.getElementById("navLogin");
        var mainBTN = document.getElementById("navMain");
        mainBTN.style = "display: none";
        loginBTN.classList.remove("out");
        loginBTN.classList.add("goldBtn");
        loginBTN.innerHTML = "התחברות";
    }
    catch { }
}

//................................................//
//..................משתנים ונהנים...............//
//...............................................//
//גודל מסך
let videoW;
let videoH;
//מודל עיבוד תמונה
let poseNet;
let poses = [];

//אובייקטים גלובאליים
let video;
let audio;
let canvas;
let ctx;
let vidoeStream;
let audioStream;

let soundCanvas;
let canvasContext;

let drawVisual;
let drawNoteVisual;
let lodeP;
let stopbtn;
//משתני כיוון
let right, left, up, down, hcenter, vcenter;
//בדיקת שינויים
let hbefore, vbefore, changes, t;
//מונים
let mytime, totalRight, totalLeft, totalHcenter, totalVcenter, totalUp, totalDown;
//מיקום כתפיים
let sholdL, sholdR;

//מערכים למדידה
let distSholders, lefts, rights, pitchs, volumes

//זמני עצירה בדיבור
let quietime, quietstart, quietend, quietbefore, secQuiet, pauses;

//משתמשים מחוברים
let userActive;
let presActive;


if (window.innerWidth < window.innerHeight) {
    videoW = window.innerWidth * 0.8;
    videoH = videoW * 0.75;
}
else {
    videoH = window.innerHeight * 0.7;
    videoW = videoH / 0.75;
}

function getwidth() {
    return Math.floor(videoW);
}
function getheight() {
    return Math.floor(videoH);
}

//.....................................//
//...........פונקצית איתחול...........//
//.....................................//

function resetVariebles() {
    distSholders = [];
    lefts = [];
    rights = [];
    pitchs = [];
    volumes = [];
    secQuiet = 0;
    pauses = 0;


    changes = totalRight = totalLeft = totalHcenter = totalVcenter = totalUp = totalDown = 0;

}
let thereArd = false;
//מתחיל- פותח מצלמה וקורא לטעינת המודל
async function startVideo(user, presentation, ardu, type) {
    thereArd = ardu;

    lodeP = document.getElementById("lodeP");
    lodeP.style.display = "flex";
    if (type != "comp") {
        var audio1 = new Audio('./Sound/stand.mp3');
        audio1.volume = 1
        audio1.play();
    }
    stopbtn = document.getElementById("stopbtn");
    userActive = user;
    presActive = presentation;
    //אתחול משתנים
    resetVariebles()
    poses = [];
    mytime = 0;
    quietbefore = true;
    right = left = up = down = hcenter = vcenter = 0;
    hbefore = vbefore = "";

    video = document.getElementById("video");

    video.volumes = 0;
    canvas = document.getElementById("canvas");
    console.log(video);
    console.log(canvas);
    ctx = canvas.getContext('2d');
    soundCanvas = document.getElementById("soundCanvas");
    audio = document.getElementById('audio');

    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (!navigator?.mediaDevices?.getUserMedia) {
        //לא נפתח מיקרופון
        alert("נראה שיש פה בעיה.. מומלץ לפתוח בדפדפן chrome");
        return;
    }
    vidoeStream = stream;
    video.srcObject = vidoeStream;
    video.play();


    poseNet = await ml5.poseNet(video, modelReady);

    poseNet.on('pose', function (results) {
        poses = results;
    });

}
let countnum;
var lani;
//אחרי שהמודל נטען- תחילת החישוב
async function modelReady() {
    console.log('model loaded!')
    let win = document.getElementById("win");
    win.classList.add("high");
    win.classList.remove("low");



    init()
    countnum = 3
    if (thereArd) {
        lani = setInterval(lodeme, 15000 / 100);
    }
    else {
        playSound();
    }
    loadpresCount = 0;
    //  setTimeout(playSound, 58500);
    //setTimeout(playSound, 5000);
}



var loadpresCount;
var countthelode
function lodeme() {
    var loadpres = document.getElementById("loadpres");
    loadpres.style.width = loadpresCount + "%";
    if (loadpresCount == 100) {
        clearInterval(lani);
        playSound();
    }
    loadpresCount++;

}
var drawhz;

function playSound() {
    var audio = new Audio('./Sound/start321.mp3');
    audio.volume = 1
    audio.play();
    setTimeout(startpres, 1400);
}

function startpres() {
    let countdown = document.getElementById("countdown");
    let win = document.getElementById("win");

    win.style.display = "none";
    countdown.style.display = "block";
    if (countnum > 0) {
        countdown.innerText = countnum;
        countnum--;
        setTimeout(startpres, 900);
    }
    else {
        //אינטרוול למדידה
        resetVariebles();
        t = setInterval(count, 1000);
    }
}
let sqaure;
let sqaureCTX;
//מתחיל עיבוד של תמונה + סאונד
async function init() {
    var source;
    lodeP.style.display = "none";

    canvas.style.display = "flex";
    sqaure = document.getElementById("green");
    sqaureCTX = sqaure.getContext("2d");
    sqaure.style.display = "flex";

    soundCanvas.style.display = "flex";
    canvasContext = soundCanvas.getContext("2d");
    var prestime = document.getElementById("prestime");
    prestime.style.display = "flex";


    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    var analyser = audioContext.createAnalyser();
    analyser.minDecibels = -100;
    analyser.maxDecibels = -10;
    analyser.smoothingTimeConstant = 0.85;
    if (!navigator?.mediaDevices?.getUserMedia) {
        //לא נפתח מיקרופון
        alert("נראה שיש פה בעיה.. מומלץ לפתוח בדפדפן chrome");
        return;
    } else {
        var constraints = { audio: true };
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (stream) {
                audioStream = stream;
                // הכנסת המדיה
                source = audioContext.createMediaStreamSource(audioStream);
                audio.srcObject = stream;
                // חיבור למפענח
                source.connect(analyser);
                //קריאה לפונקציה שמציגה את הגרף
                visualize();
            })
            .catch(function (err) {
                alert("כדי להשתמש במערכת צריך לאשר סאונד ומצלמה");
                return;
            });
    }
    // ................................................//
    //.....................יצירת גרף..................//
    //................................................//

    async function visualize() {
        //ציור על הקנבס
        var cWIDTH = soundCanvas.width;
        var cHEIGHT = soundCanvas.height;


        drawhz = function () {
            if (window.location.pathname.includes("Presentation") == false) {
                stopAll();
            }
            else {
                drawVisual = requestAnimationFrame(drawhz);
                //רמת דגימה - לבדוק השפעה
                analyser.fftSize = 4096;
                var bufferLength = analyser.fftSize;
                var dataArray = new Uint8Array(bufferLength);
                analyser.getByteTimeDomainData(dataArray);

                canvasContext.fillStyle = 'rgb(236, 240, 255)';
                canvasContext.fillRect(0, 0, cWIDTH, cHEIGHT);

                canvasContext.lineWidth = 2;
                canvasContext.strokeStyle = '#AE9CE6';

                canvasContext.beginPath();

                var sliceWidth = cWIDTH * 1.0 / bufferLength;
                var x = 0;


                for (var i = 0; i < bufferLength; i++) {
                    var v = dataArray[i] / 128.0;
                    volumes.push(v);
                    var y = v * cHEIGHT / 2;

                    if (i === 0) {
                        canvasContext.moveTo(x, y);
                    } else {
                        canvasContext.lineTo(x, y);
                    }

                    x += sliceWidth;
                }

                //יצירת קנבס
                canvasContext.lineTo(soundCanvas.width, soundCanvas.height / 2);
                canvasContext.stroke();
                ctx.clearRect(0, 0, Math.floor(videoW), Math.floor(videoH))
                ctx.drawImage(video, 0, 0, Math.floor(videoW), Math.floor(videoH));
                // We can call both functions to draw all keypoints and the skeletons


                // For one pose only (use a for loop for multiple poses!)
                if (poses.length > 0) {
                    const pose = poses[0].pose;

                    sholdL = pose.leftShoulder;
                    sholdR = pose.rightShoulder;

                    let eyeR = pose.rightEye;
                    let eyeL = pose.leftEye;

                    let EarL = pose.leftEar;
                    let EarR = pose.rightEar;
                    let nose = pose.nose;
                    let ed = dist(eyeL.x, eyeL.y, eyeR.x, eyeR.y)
                    let dl = dist(EarL.x, EarL.y, eyeL.x, eyeL.y);
                    let dr = dist(EarR.x, EarR.y, eyeR.x, eyeR.y);
                    let l2n = dist(nose.x, nose.y, EarL.x, EarL.y);
                    let r2n = dist(nose.x, nose.y, EarR.x, EarR.y);


                    if (nose.y - EarR.y < -5)
                        up++;

                    else if (EarR.y - nose.y < -30)
                        down++;
                    else
                        vcenter++;


                    if (r2n - l2n < -ed)
                        right++;
                    else if (l2n - r2n < -ed)
                        left++;
                    else
                        hcenter++;

                    //        ctx.beginPath();
                    sqaureCTX.lineWidth = 10;
                    let rectW = Math.floor(videoW) * 0.9;
                    let rectH = Math.floor(videoH) * 0.9;
                    let maxY = Math.floor(rectH) / 4;
                    let minY = Math.floor(rectH) * 3 / 4;
                    let minX = Math.floor(videoW) * 0.1;
                    let maxX = rectW;
                    if (eyeL.y < maxY / 2 || eyeR.y < maxY / 2 || eyeL.y > minY || eyeR.y > minY || sholdR.x < minX || sholdL.x > maxX)
                        sqaureCTX.strokeStyle = "#F073BC";
                    else
                        sqaureCTX.strokeStyle = "#9CF097";
                    sqaureCTX.rect(minX / 2, maxY / 4, rectW, rectH);
                    //   sqaureCTX.rect(minX / 2, 0, rectW, rectH);
                    sqaureCTX.stroke();

                }
            };
        }
        var previousValueToDisplay = 0;
        var smoothingCount = 0;
        var smoothingThreshold = 5;
        var smoothingCountThreshold = 10;


        //כתיבת ערכים
        var drawNote = function () {
            drawNoteVisual = requestAnimationFrame(drawNote);
            var bufferLength = analyser.fftSize;
            var buffer = new Float32Array(bufferLength);
            analyser.getFloatTimeDomainData(buffer);
            var autoCorrelateValue = autoCorrelate(buffer, audioContext.sampleRate);

            // עד כמה לדייק
            var valueToDisplay = autoCorrelateValue;
            //הרץ
            valueToDisplay = Math.round(valueToDisplay);

            if (autoCorrelateValue === -1) {
                if (!quietbefore) {
                    quietstart = Date.now();
                    quietbefore = true;
                }
                console.log("שקט מדי...");
                pauses++;
                return;
            }

            smoothingThreshold = 9999;
            smoothingCountThreshold = 2;

            //האם להחליף את המספר שמוצג- לפי רמת ההחלקה
            function noteIsSimilarEnough() {
                // Check threshold for number, or just difference for notes.
                if (typeof valueToDisplay == "number") {
                    return (
                        Math.abs(valueToDisplay - previousValueToDisplay) < smoothingThreshold
                    );
                }
                else {
                    return valueToDisplay === previousValueToDisplay;
                }
            }
            //להבין
            // Check if this value has been within the given range for n iterations
            if (noteIsSimilarEnough()) {
                if (smoothingCount < smoothingCountThreshold) {
                    smoothingCount++;
                    return;
                }
                else {
                    previousValueToDisplay = valueToDisplay;
                    smoothingCount = 0;
                }
            }
            else {
                previousValueToDisplay = valueToDisplay;
                smoothingCount = 0;
                return;
            }
            if (typeof valueToDisplay == "number") {
                pitchs.push(valueToDisplay);

                if (quietbefore) {
                    quietend = Date.now();
                    quietbefore = false;
                    quietime = quietend - quietstart;
                    console.log(quietime);

                    if (quietime > 1000) {
                        secQuiet++;
                    }
                }
            }
        };
        if (window.location.pathname.includes("Presentation")) {
            drawhz();
            drawNote();
        }
    }
}
function playTurnOn() {
    var audio = new Audio('./Sound/turnon.mp3');
    audio.volume = 1
    audio.play();
}
async function count() {
    let countdown = document.getElementById("countdown");
    countdown.style.display = "none";
    mytime++;
    if (mytime % 60 == 0)
        stopbtn.style.display = "flex";

    var prestime = document.getElementById("prestime");
    var min = Math.floor(mytime / 60);
    if (min < 10)
        min = "0" + min;
    var sec = mytime % 60;
    if (sec < 10)
        sec = "0" + sec
    prestime.innerHTML = min + ":" + sec;
    if (poses.length > 0) {
        const pose = poses[0].pose;
        sholdL = pose.leftShoulder;
        sholdR = pose.rightShoulder;
        var ds = dist(sholdR.x, sholdR.y, sholdL.x, sholdL.y);
        distSholders.push(ds);
        lefts.push(sholdL.x);
        rights.push(sholdR.x)
    }

    //ימין שמאל
    if (right > left && right > hcenter) {
        totalRight++
        if (hbefore != "right") {
            changes++;
            hbefore = "right"
        }
    }
    if (left > right && left > hcenter) {
        totalLeft++
        if (hbefore != "left") {
            changes++;
            hbefore = "left"
        }
    }
    if (hcenter > right && hcenter > left) {
        totalHcenter++
        if (hbefore != "center") {
            changes++;
            hbefore = "center"
        }
    }

    //למעלה למטה
    if (up > down && up > vcenter) {
        totalUp++

    }
    if (down > up && down > vcenter) {
        totalDown++
    }
    if (vcenter > up && vcenter > down) {
        totalVcenter++
    }
    right = left = up = down = hcenter = vcenter = 0;





    if (mytime % 30 == 0) {
        try {
            var stdpitch = standardDeviation(pitchs).toFixed(2);
        }
        catch {
            stdpitch = 100000000;
        }
        try {
            var stdvol = standardDeviation(volumes).toFixed(4);
        }
        catch {
            stdvol = 10000;
        }
        var volpostdata = ', "QuiteTime":' + pauses + ', "Pauses":' + secQuiet;
        var movesData = ', "Moves":' + findChanges(distSholders, lefts, rights);
        var eyeData = '"Right":' + totalRight + ', "Left":' + totalLeft + ', "Hcenter":' + totalHcenter + ', "Up":' + totalUp + ', "Down":' + totalDown + ', "Vcenter":' + totalVcenter + ', "Changes":' + changes;
        volpostdata += ', "Pitch":' + stdpitch + ', "Volume":' + stdvol;
        postdata = '{' + eyeData + movesData + volpostdata + '}';
        post(postdata);
        resetVariebles()
    }
}

function stopAll() {
    clearInterval(t)
    let stream = vidoeStream;
    let tracks = stream.getTracks();
    window.cancelAnimationFrame(drawVisual);
    window.cancelAnimationFrame(drawhz);
    window.cancelAnimationFrame(drawNoteVisual);
    canvas = null;
    ctx = null;
    drawVisual = null

    tracks.forEach(function (track) {
        track.stop();
    });
    stream = audioStream;
    tracks = stream.getTracks();
    tracks.forEach(function (track) {
        track.stop();
    });
}

function stopVid() {
    //    video.pause();  

    clearInterval(t)

    var audio2 = new Audio('./Sound/done.mp3');
    audio2.volume = 1
    audio2.play();

    let stream = vidoeStream;
    let tracks = stream.getTracks();
    window.cancelAnimationFrame(drawVisual);
    window.cancelAnimationFrame(drawhz);
    window.cancelAnimationFrame(drawNoteVisual);
    let prestime = document.getElementById("prestime");
    prestime.style = "display:none";
    ctx.clearRect(0, 0, Math.floor(videoW), Math.floor(videoH))
    canvas.style = "display:none";
    sqaure.style.display = "none";

    canvas = null;
    video = null
    ctx = null;
    drawVisual = null
    soundCanvas.style = "display:none";
    stopbtn.style = "display:none";

    tracks.forEach(function (track) {
        track.stop();
    });
    stream = audioStream;
    tracks = stream.getTracks();
    tracks.forEach(function (track) {
        track.stop();
    });

    //video.srcObject = null;



    //video.pause();

    //window.localStream.getVideoTracks()[0].stop();
    //video.src = '';

    //window.localStream.getAudioTracks()[0].pause();
}




//פוסט
async function post(postdata) {
    $.ajax({
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        method: "POST",
        url: "api/FireBase/AddComputerData/u" + userActive + "/" + presActive,
        data: postdata //אופציונאלי
    })
        .done(function (data) { //ברגע שהפעולה הסתיימה   
            console.log(data);
        })
        .fail(function () { //במצב של שגיאה  
            //      alert("קרתה תקלה");
            return;
        })

}



//..........................................//
//............מלא חישובים....................
//..........................................//

//פונקציה למציאת סטיית תקן
function standardDeviation(arr) {
    let mean = arr.reduce((acc, curr) => {
        return acc + curr
    }, 0) / arr.length;


    arr = arr.map((el) => {
        return (el - mean) ** 2
    })

    let total = arr.reduce((acc, curr) => acc + curr, 0);

    return Math.sqrt(total / arr.length)
}


//פונקציה למציאת ממוצע מערך
function findAvg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum / arr.length;
}


//פונקציה למדידת מרחק בין 2 נקודות
function dist(x1, y1, x2, y2) {
    let y = x2 - x1;
    let x = y2 - y1;
    return Math.sqrt(x * x + y * y);
}

//פונקציה למציאת שינויי במערך
function findChanges(arrayDis, arrayL, arrayR) {
    var changes = 0;
    var changebefore = false;
    for (var i = 0; i < arrayDis.length - 1; i++) {
        if (Math.abs(arrayDis[i] - arrayDis[i + 1]) > 30 || Math.abs(arrayL[i] - arrayL[i + 1]) > arrayDis[i] || Math.abs(arrayR[i] - arrayR[i + 1]) > arrayDis[i]) {

            changebefore = true;
        }

        else {
            if (changebefore) {
                changes++;
                changebefore = false;
            }
        }
    }
    return (changes);
}

//פונקציה למציאת התדר איכשהו
// Must be called on analyser.getFloatTimeDomainData and audioContext.sampleRate
// From https://github.com/cwilso/PitchDetect/pull/23
function autoCorrelate(buffer, sampleRate) {
    // Perform a quick root-mean-square to see if we have enough signal
    var SIZE = buffer.length;
    var sumOfSquares = 0;
    for (var i = 0; i < SIZE; i++) {
        var val = buffer[i];
        sumOfSquares += val * val;
    }
    var rootMeanSquare = Math.sqrt(sumOfSquares / SIZE);
    if (rootMeanSquare < 0.01) {
        return -1;
    }

    // Find a range in the buffer where the values are below a given threshold.
    var r1 = 0;
    var r2 = SIZE - 1;
    var threshold = 0.2;

    // Walk up for r1
    for (var i = 0; i < SIZE / 2; i++) {
        if (Math.abs(buffer[i]) < threshold) {
            r1 = i;
            break;
        }
    }

    // Walk down for r2
    for (var i = 1; i < SIZE / 2; i++) {
        if (Math.abs(buffer[SIZE - i]) < threshold) {
            r2 = SIZE - i;
            break;
        }
    }

    // Trim the buffer to these ranges and update SIZE.
    buffer = buffer.slice(r1, r2);
    SIZE = buffer.length;

    // Create a new array of the sums of offsets to do the autocorrelation
    var c = new Array(SIZE).fill(0);
    // For each potential offset, calculate the sum of each buffer value times its offset value
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE - i; j++) {
            c[i] = c[i] + buffer[j] * buffer[j + i];
        }
    }

    // Find the last index where that value is greater than the next one (the dip)
    var d = 0;
    while (c[d] > c[d + 1]) {
        d++;
    }

    // Iterate from that index through the end and find the maximum sum
    var maxValue = -1;
    var maxIndex = -1;
    for (var i = d; i < SIZE; i++) {
        if (c[i] > maxValue) {
            maxValue = c[i];
            maxIndex = i;
        }
    }

    var T0 = maxIndex;

    // Not as sure about this part, don't @ me
    // From the original author:
    // interpolation is parabolic interpolation. It helps with precision. We suppose that a parabola pass through the
    // three points that comprise the peak. 'a' and 'b' are the unknowns from the linear equation system and b/(2a) is
    // the "error" in the abscissa. Well x1,x2,x3 should be y1,y2,y3 because they are the ordinates.
    var x1 = c[T0 - 1];
    var x2 = c[T0];
    var x3 = c[T0 + 1];

    var a = (x1 + x3 - 2 * x2) / 2;
    var b = (x3 - x1) / 2;
    if (a) {
        T0 = T0 - b / (2 * a);
    }

    return sampleRate / T0;
}






/////////////////////////////////////////////
// למחוקקקקקקקקקקקקקקקקקקק
///////////////////////////////////////////////



//להבין איך להשתמש או למחוקק
//פונקציה לבחירת תמונה ספציפית
function getFrame(src, dest, dotNetHelper) {
    let video = document.getElementById(src);
    let canvas = document.getElementById(dest);
    canvas.getContext('2d').drawImage(video, 0, 0, 320, 240);
    let dataUrl = canvas.toDataURL("image/jpeg");
    dotNetHelper.invokeMethodAsync('ProcessImage', dataUrl);
}

