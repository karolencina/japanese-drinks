let choices = [
    {
        choicesTitle: "Leaf or Flower?",
        choicesDescription: "Would you like a leaf infusion (the classic), or a floral infusion (something more special)?",
        optA: "Leaf",
        optB: "Flower",
        animationA: `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_30twhfdy.json"
                           background="transparent"
                           speed="1"
                           style="width: 160px; height: 160px"
                           hover
                           loop
            >
            </lottie-player>`,
        animationB: `<lottie-player src="https://assets9.lottiefiles.com/packages/lf20_lkugqbgr.json"
                           mode="bounce"
                           background="transparent"
                           speed="1.5"
                           style="width: 110px; height: 110px;"
                           hover
                           loop
            >
            </lottie-player>`,
        chosen: `<li><img  class="chosen-img" alt="hot" src="assets/hot.svg"></li>`,
    },
    {
        choicesTitle: "Alcohol or Soft?",
        choicesDescription: "Do you want an alcoholic drink or a non-alcoholic drink?",
        optA: "Alcohol",
        optB: "Soft",
        animationA: `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_o20ioe4f.json"
                           background="transparent"
                           speed="1"
                           style="width: 110px; height: 110px;"
                           hover
                           loop
            >
            </lottie-player>`,
        animationB: `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_ofhqjl4c.json"
                           background="transparent"
                           speed="1"
                           style="width: 130px; height: 130px;"
                           hover
                           loop
            >
            </lottie-player>`,
        chosen: `<li><img class="chosen-img" alt="leaf" src="assets/cold.svg"></li>`,
    },
    {
        choicesTitle: "Pure or Blend?",
        choicesDescription: "You can either get a pure leaf tea or a blend of tea leaves and... a surprise.",
        optA: "Pure",
        optB: "Blend",
        animationA: `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_ffpciyvw.json"
                           background="transparent"
                           speed="1"
                           style="width: 140px; height: 140px;"
                           hover
                           loop
            >
            </lottie-player>`,
        animationB: `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_biuimxo0.json"
                           mode="bounce" background="transparent"
                           speed="1"
                           style="width: 120px; height: 120px;"
                           hover
                           loop
            >
            </lottie-player>`,
        chosen: `<li><img  class="chosen-img" alt="hot" src="assets/hot.svg"></li>
                <li><img class="chosen-img" alt="leaf" src="assets/leaf.svg"></li>`,
    },
    {
        choicesTitle: "Plum or Rice?",
        choicesDescription: "I just hope you're not driving. Which alcohol would you like to try - plum or rice?",
        optA: "Plum",
        optB: "Rice",
        animationA: `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_qphfnt4j.json"
                           background="transparent"
                           speed="1"
                           style="width: 120px; height: 120px;"
                           hover
                           loop
            >
            </lottie-player>`,
        animationB: `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_enkkbrgt.json"
                           mode="bounce"
                           background="transparent"
                           speed="1"
                           style="width: 110px; height: 110px;"
                           hover
                           loop
            >
            </lottie-player>`,
        chosen: `<li><img class="chosen-img" alt="cold" src="assets/cold.svg"></li>
        <li><img class="chosen-img" alt="alcohol" src="assets/alc.svg"></li>`,
    },
    {
        choicesTitle: "Bacteria or Soy?",
        choicesDescription: "Don't worry! It's the good type of bacteria (it's called <em>LAB</em> or <em>Lactobacillus</em> and is a probiotic). Choose either that or soy.",
        optA: "Bacteria",
        optB: "Soy",
        animationA: `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"><script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_zfwtsojv.json"
                           mode="normal"
                           background="transparent"
                           speed="1"
                           style="width: 120px; height: 120px;"
                           hover
                           loop
            >
            </lottie-player>`,
        animationB: `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"><script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_hbzqmthi.json"
                           background="transparent"
                           speed="1"
                           style="width: 150px; height: 150px; margin-top: 30px"
                           hover
                           loop
            >
            </lottie-player>`,
        chosen: `<li><img class="chosen-img" src="assets/cold.svg"></li>
        <li><img class="chosen-img" src="assets/noalc.svg"></li>`,
    },
    {
        choicesTitle: "Sunlight or Shade?",
        choicesDescription: "Did you know that the same plant species <em>Camelia sinensis</em> (tea plant) can taste very different depending on whether it was grown in direct sunlight or shade?",
        optA: "Sunlight",
        optB: "Shade",
        animationA: `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_hcoqhjci.json"
                           background="transparent"
                           speed="1"
                           style="width: 200px; height: 200px;"
                           hover
                           loop
            >
            </lottie-player>`,
        animationB: `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_k7ifpxuo.json"
                           background="transparent"
                           speed="1"
                           style="width: 200px; height: 200px;"
                           hover
                           loop
            >
            </lottie-player>`,
        chosen: `<li><img class="chosen-img" alt="hot tea" src="assets/hot.svg"></li>
        <li><img class="chosen-img" alt="leaf" src="assets/leaf.svg"></li>
        <li><img class="chosen-img" alt="leaf with stars" src="assets/pure.svg"></li>`,
    },
    {
        choicesTitle: "Yeast or Milk?",
        choicesDescription: "Now the final ingredient - yeast or milk. You choose. (I promise it's not as bad as it sounds.)",
        optA: "Yeast",
        optB: "Milk",
        animationA: `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"><script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_1a81bhnj.json"
                           background="transparent"
                           speed="1"
                           style="width: 120px; height: 120px;"
                           loop
                           hover></lottie-player>`,
        animationB: `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_noqhl2sd.json"
                           background="transparent"
                           speed="1"
                           style="width: 140px; height: 140px; margin: 0 20px 10px 0"
                           hover
                           loop
            >
            </lottie-player>`,
        chosen: `<li><img class="chosen-img" src="assets/cold.svg"></li>
        <li><img class="chosen-img" src="assets/noalc.svg"></li>
        <li><img class="chosen-img" src="assets/bacteria.svg"></li>`,
    },
];

let choiceTitle = document.querySelector(".choices-title");
let choiceDescription = document.querySelector(".choices-description")
let animationA = document.querySelector(".animationA");
let optA = document.querySelector(".optionA .choice-name");
let animationB = document.querySelector(".animationB");
let optB = document.querySelector(".optionB .choice-name");
let chosen = document.querySelector(".chosen-img-container ul");
let result = '';

function caseFill(x) {
    choiceTitle.innerHTML = choices[x].choicesTitle;
    choiceDescription.innerHTML = choices[x].choicesDescription;
    animationA.innerHTML = choices[x].animationA;
    optA.innerHTML = choices[x].optA;
    animationB.innerHTML = choices[x].animationB;
    optB.innerHTML = choices[x].optB;
    chosen.innerHTML = choices[x].chosen
}

function showResult() {
    window.location.href = "result.html"
}

function handleOptAClick() {
    if (result === '') {
        switch (optA.innerHTML) {
            case 'Hot':
                caseFill(0);
                break;
            case 'Leaf':
                caseFill(2);
                break;
            case 'Alcohol':
                caseFill(3);
                break;
            case 'Pure':
                caseFill(5);
                break;
            case 'Plum':
                localStorage.setItem('lastChoice', optA.innerHTML);
                window.location.href = "result.html";
                break;
            case 'Bacteria':
                caseFill(6)
                break;
            case 'Sunlight':
                localStorage.setItem('lastChoice', optA.innerHTML);
                window.location.href = "result.html";
                break;
            case 'Yeast':
                localStorage.setItem('lastChoice', optA.innerHTML);
                window.location.href = "result.html";
                break;
            default:
                console.log("Something went wrong");
        }
    }
}



function handleOptBClick() {
    if (result === '') {
        switch (optB.innerHTML) {
            case 'Cold':
                caseFill(1);
                break;
            case 'Flower':
                localStorage.setItem('lastChoice', optB.innerHTML);
                window.location.href = "result.html";
                break;
            case 'Soft':
                caseFill(4);
                break;
            case 'Blend':
                localStorage.setItem('lastChoice', optB.innerHTML);
                window.location.href = "result.html";
                break;
            case 'Rice':
                localStorage.setItem('lastChoice', optB.innerHTML);
                window.location.href = "result.html";
                break;
            case 'Soy':
                localStorage.setItem('lastChoice', optB.innerHTML);
                window.location.href = "result.html";
                break;
            case 'Plum':
                localStorage.setItem('lastChoice', optB.innerHTML);
                window.location.href = "result.html";
                break;
            case 'Shade':
                localStorage.setItem('lastChoice', optB.innerHTML);
                window.location.href = "result.html";
                break;
            case 'Milk':
                localStorage.setItem('lastChoice', optB.innerHTML);
                window.location.href = "result.html";
                break;
            default:
                console.log("Something went wrong");
        }
    }
}

