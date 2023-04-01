let results = [
    {
        resultTitle: "Sakura",
        resultText: `You got Sakurayu! Cherry-blossom tea  or sakurayu (<em>桜湯</em>) is a hot drink with a salt-preserved cherry blossom (<em>sakurazuke</em>) in it. The flowers are bottled in such a manner that the flower closes up in a ball along with the stem. When hot water is poured over the cherry blossom, the salt melts, whereupon the petals open up and float on the surface of the water. The tea is served during once-in-a-lifetime ceremonies like marriage.`,
        resultImg: `<img src="assets/results/sakura.svg">`
    },
    {
        resultTitle: "Genmaicha",
        resultText: "f",
        resultImg: `<img src="assets/results/genmaicha.svg">`
    },
    {
        resultTitle: "Umeshu",
        resultText: `You got Umeshu! Plum Wine or Umeshu (<em>梅酒</em>) is a Japanese liqueur made by steeping fresh Japanese plum (<em>ume</em>) in <em>shochu</em> (white liquor) and sugar. Its has sweet and sour flavors with fruity aroma and can be either drank on its own or used as a base of cocktails like<em>Ume Highball</em> (a ginger drink), <em>Umeko</em> or "plum child" (a lemon drink).`,
        resultImg: `<img src="assets/results/umeshu.svg">`
    },
    {
        resultTitle: "Sake",
        resultText: "f",
        resultImg: `<img src="assets/results/sake.svg">`
    },
    {
        resultTitle: "Tonyu",
        resultText: "f",
        resultImg: `<img src="assets/results/soymilk.svg">`
    },
    {
        resultTitle: "Sencha",
        resultText: `You got Sencha! The abundance of sunlight during the cultivation of sencha results in rapid growth, increased vitamin C, as well as a high level of tannin which gives sencha its characteristic sharp flavor. The steaming process lasts for about 20 seconds, and is performed within 20 hours after the leaves are picked. Thanks to this steaming process, most of the leaves' green color, fragrance and nutritional components are retained.`,
        resultImg: `<img src="assets/results/sencha.svg">`
    },
    {
        resultTitle: "Matcha",
        resultText: "",
        resultImg: `<img src="assets/results/matcha.svg">`
    },
    {
        resultTitle: "Kombucha",
        resultText: "",
        resultImg: `<img src="assets/results/kombucha.svg">`
    },
    {
        resultTitle: "Yakuruto",
        resultText: "",
        resultImg: `<img src="assets/results/yakuruto.svg">`
    },
];

let lastChoices = ["Flower", "Blend", "Plum", "Rice", "Soy", "Sunlight", "Shade", "Yeast", "Milk"]
let lastChoice = localStorage.getItem('lastChoice');

let resultTitle = document.querySelector(".result-title");
let resultText = document.querySelector(".result-text");
let resultImg = document.querySelector(".result-img");

const fillResult = function (x) {
    resultTitle.innerHTML = results[x].resultTitle;
    resultText.innerHTML = results[x].resultText;
    resultImg.innerHTML = results[x].resultImg;
}

function showResult() {
    if (lastChoices.includes(lastChoice)) {
        console.log(true);
        console.log(lastChoice);
        switch (lastChoice) {
            case 'Flower':
                fillResult(0)
                break;
            case 'Blend':
                fillResult(1)
                break;
            case 'Plum':
                fillResult(2)
                break;
            case 'Rice':
                fillResult(3)
                break;
            case 'Soy':
                fillResult(4)
                break;
            case 'Sunlight':
                fillResult(5)
                break;
            case 'Shade':
                fillResult(6)
                break;
            case 'Yeast':
                fillResult(7)
                break;
            case 'Milk':
                fillResult(8)
                break;
            default:
                console.log("Something went wrong");
        }
    }
}

showResult();
