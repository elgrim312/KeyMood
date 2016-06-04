/**
 * Created by alice on 04/06/2016.
 */
'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

var width, height;
function resize() {
    canvas.width = width = window.innerWidth;
    canvas.height = height = window.innerHeight;
}

function render(t) {
    requestAnimationFrame(render);

    ctx.clearRect(0, 0, width, height);

    ctx.lineWidth = 3;
    ctx.shadowColor = ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.shadowBlur = 3;

    const startY = height * 0.7;
    const startX = width * -0.1;
    const lineWidth = width * 1.1;
    const heightOffset = width * 0.08;
    const speed = 0.002;

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.bezierCurveTo(
        //longueur courbe
        startX + lineWidth *.5,
        //taille césure
        (startY *1.7) + Math.cos(t * speed * 0.9) * heightOffset,
        //place césure
        (startX *0.8) + lineWidth * 0.6,
        //descente césure
        (startY *.5) + Math.sin(t * speed * 0.9) * heightOffset,
        //placement courbe x
        (startX *1.5) + lineWidth,
        //placement courbe y
        (startY *1.45)
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.bezierCurveTo(
        //longueur courbe
        (startX *1.5) + lineWidth *0.6,
        //taille césure
        (startY *0.6) + Math.cos(t * speed * 0.7) *  (heightOffset*-1),
        //place césure
        (startX *4) + lineWidth * 0.8,
        //descente césure
        (startY *1.8) + Math.sin(t * speed * 0.7) * (heightOffset*-1),
        //placement courbe x
        startX + lineWidth,
        //placement courbe y
        startY
    );
    ctx.stroke();


}
window.addEventListener('resize', resize);

resize();
render(performance.now());
