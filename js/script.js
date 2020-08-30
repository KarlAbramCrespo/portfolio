var loadArr = [];
var loadCtr = 0;
var loadInterval;

function init() {
    if(checkMobile()){
        main.classList.add("mobile");
    }
    loadFonts();
    loadArr.push("loadFonts");

    loadInterval = setInterval(checkLoad, 500);
}

function loadFonts() {
    WebFont.load({
        google: {
            families: ['Abril Fatface', 'Roboto']
        },
        active: function () {
            loadCtr++;
        }
    });
}

function checkLoad() {
    if (loadArr.length == loadCtr) {
        clearInterval(loadInterval);
        start();
    }
}

function start() {
    console.log("Here we go!");
    animate();
}

function animate() {
    var tl = new TimelineMax();

    tl.set(main, {
        opacity: 1
    })

    tl.to(coverScreen, 0.5, {
        delay: 2,
        y: "-100%"
    })
}

function checkMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        console.log("mobile device detected!");
        return true;
    }else {
        return false;
    }
}
