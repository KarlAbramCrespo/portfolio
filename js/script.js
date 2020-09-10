var loadArr = [];
var loadCtr = 0;
var loadInterval;

function init() {
    if (checkMobile()) {
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


    setupPages();
    setupMainMenu();
    animate();
}

function setupMainMenu() {
    mainMenuComputer.addEventListener("click", function () {
        showPage(skillsPageCont);
    });
}

function setupPages() {
    gsap.set(skillsPageCont, {
        y: "100%"
    });


    initSkillsPage();
}

function animate() {
    var tl = new TimelineMax();

    tl.set(main, {
        opacity: 1
    })

    tl.to(coverScreen, 0.5, {
        //        delay: 2,
        y: "-100%"
    })
}

function initSkillsPage() {
    appendToTier("ms_word_logo", "S", "images/logos/ms_word_logo.png");
    appendToTier("ms_powerpoint_logo", "S", "images/logos/ms_powerpoint_logo.png");
    appendToTier("html_logo", "A", "images/logos/html_logo.png");
    appendToTier("adobe_illustrator_logo", "A", "images/logos/adobe_illustrator_logo.png");
    appendToTier("adobe_premiere_logo", "A", "images/logos/adobe_premiere_logo.png");
    appendToTier("css_logo", "B", "images/logos/css_logo.png");
    appendToTier("js_logo", "B", "images/logos/js_logo.png");
    appendToTier("adobe_animate_logo", "B", "images/logos/adobe_animate_logo.png");
    appendToTier("adobe_photoshop_logo", "B", "images/logos/adobe_photoshop_logo.png");
    appendToTier("gimp_logo", "B", "images/logos/gimp_logo.png");
    appendToTier("unity_logo", "C", "images/logos/unity_logo.png");
    appendToTier("androidstudio_logo", "D", "images/logos/androidstudio_logo.png");
}

function appendToTier(elemName, tier, image) {
    var imageTempCont = document.createElement("div");
    imageTempCont.classList.add("imageCont");
    imageTempCont.name = elemName;
    var imageTemp = document.createElement("img");
    imageTemp.src = image;
    imageTempCont.appendChild(imageTemp);

    switch (tier) {
        case "S":
            document.querySelectorAll("#skillsListCont .tierRow")[0].appendChild(imageTempCont);
            break;
        case "A":
            document.querySelectorAll("#skillsListCont .tierRow")[1].appendChild(imageTempCont);
            break;
        case "B":
            document.querySelectorAll("#skillsListCont .tierRow")[2].appendChild(imageTempCont);
            break;
        case "C":
            document.querySelectorAll("#skillsListCont .tierRow")[3].appendChild(imageTempCont);
            break;
        case "D":
        default:
            document.querySelectorAll("#skillsListCont .tierRow")[4].appendChild(imageTempCont);
            break;
    }

    var nameTemp, descTemp;

    for (i = 0; i < skills.length; i++) {
        if (skills[i].id === elemName) {
            nameTemp = skills[i].name;
            descTemp = skills[i].description;
            break;
        }
    }

    imageTempCont.addEventListener("click", function () {
        document.querySelectorAll("#skillsDescCont .title")[0].innerHTML = nameTemp;
        document.querySelectorAll("#skillsDescCont .description")[0].innerHTML = descTemp;
    });
}

function showPage(elem) {
    gsap.to(elem, {
        y: 0
    });
}

function hidePage(elem) {
    gsap.to(elem, {
        y: "100%"
    });
}

function checkMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        console.log("mobile device detected!");
        return true;
    } else {
        return false;
    }
}

document.querySelectorAll("#skillsPageCont .closeBtn")[0].addEventListener("click", function () {
    hidePage(skillsPageCont);
});
