function generateScaleFunction(prevMin, prevMax, newMin, newMax) {
    var offset = newMin - prevMin,
        scale = (newMax - newMin) / (prevMax - prevMin);
    return function (x) {
        return offset + scale * x;
    };
};

$(document).ready(function() {
    SmoothParallax.init();
    var root = document.documentElement;
    var scaleFunct = generateScaleFunction(0, 1482, 2000, 0);
    $(document).on("mousewheel", function() {
        var scaledValue = scaleFunct($(document).scrollTop());
        root.style.setProperty('--scroll-position', Math.abs(Math.ceil(scaledValue)));
    });
});