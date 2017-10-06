var vb = (function varbar () {

    var canvas, ctx, plot;

    var addCanvas = function (height, width) {
        canvas = document.createElement("canvas");
        canvas.height = height;
        canvas.width = width;
        document.body.appendChild(canvas);
        ctx = canvas.getContext("2d");
    };

    var translate = function (x, y) {
        return [x, canvas.height - y];
    };

    var xTrans = function (x) {
        return x;
    };

    var yTrans = function (y) {
        return canvas.height - y;
    };

    var drawBar = function (x, width, height) {
        ctx.beginPath();
        ctx.moveTo.apply(ctx, translate(x, 0));
        ctx.lineTo.apply(ctx, translate(x, height));
        ctx.lineTo.apply(ctx, translate(x + width, height));
        ctx.lineTo.apply(ctx, translate(x + width, 0));
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    };

    var run = function (chartOpts, data) {
        addCanvas(chartOpts.totalHeight, chartOpts.totalWidth);
        plot = {
            height: canvas.height - chartOpts.topPad - chartOpts.bottomPad,
            width:  canvas.width - chartOpts.leftPad - chartOpts.rightPad,
        };
    };

    return {
        addCanvas: addCanvas,
        drawBar: drawBar,
    };

})();

vb.addCanvas(512, 512);
vb.drawBar(0, 50, 100);
vb.drawBar(50, 24, 133);
