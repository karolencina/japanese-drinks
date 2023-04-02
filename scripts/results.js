let results = [
    {
        resultTitle: "Sakura",
        resultText: `You got Sakurayu! Cherry-blossom tea  or sakurayu (<em>桜湯</em>) is a hot drink with a salt-preserved cherry blossom (<em>sakurazuke</em>) in it. The flowers are bottled in such a manner that the flower closes up in a ball along with the stem. When hot water is poured over the cherry blossom, the salt melts, whereupon the petals open up and float on the surface of the water. The tea is served during once-in-a-lifetime ceremonies like marriage.`,
        resultImg: `<img src="assets/results/sakura.svg">`
    },
    {
        resultTitle: "Genmaicha",
        resultText: `You got Genmaicha! Genmaicha is a mixture of almost the same amount of green tea heated at high temperatures, and brown rice steamed and roasted until it gets a light ginger color or bursts like popcorn. Some also contain a dash of salt. The quality of genmaicha depends more on the quality of the brown rice than the tea leaves.`,
        resultImg: `<img src="assets/results/genmaicha.svg">`
    },
    {
        resultTitle: "Umeshu",
        resultText: `You got Umeshu! Plum Wine or Umeshu (<em>梅酒</em>) is a Japanese liqueur made by steeping fresh Japanese plum (<em>ume</em>) in <em>shochu</em> (white liquor) and sugar. Its has sweet and sour flavors with fruity aroma and can be either drank on its own or used as a base of cocktails like<em>Ume Highball</em> (a ginger drink), <em>Umeko</em> or "plum child" (a lemon drink).`,
        resultImg: `<img src="assets/results/umeshu.svg">`
    },
    {
        resultTitle: "Sake",
        resultText: `You got Sake! Sake is an alcoholic drink made from fermented rice. The foundations of good sake are quality rice, clean water, koji mold and yeast. They are combined and fermented in precise processes that have been refined over the centuries.`,
        resultImg: `<img src="assets/results/sake.svg">`
    },
    {
        resultTitle: "Tonyu",
        resultText: `You got Tonyu! Did you know that soy milk (<em>Tonyu</em> or <em>豆乳</em>) is the most popular plant-based milk in Japan? It is available in over 50 flavors. The drink produced by grinding dried soybeans in water and it is very high nutritional content, containing a healthy amount of protein and carbohydrates, and no cholesterol.`,
        resultImg: `<img src="assets/results/soymilk.svg">`
    },
    {
        resultTitle: "Sencha",
        resultText: `You got Sencha! The abundance of sunlight during the cultivation of sencha results in rapid growth, increased vitamin C, as well as a high level of tannin which gives sencha its characteristic sharp flavor. The steaming process is performed within 20 hours after the leaves are picked. Thanks to this steaming process, most of the leaves' green color, fragrance and nutritional components are retained.`,
        resultImg: `<img src="assets/results/sencha.svg">`
    },
    {
        resultTitle: "Matcha",
        resultText: `You got Matcha! Only the highest quality leaves grown in shade are used for matcha. Leaves are dried and milled into a fine powder which is then mixed with hot water. Matcha is the form of green tea that is used in tea ceremony.`,
        resultImg: `<img src="assets/results/matcha.svg">`
    },
    {
        resultTitle: "Kombucha",
        resultText: `You got Kombucha! Kombucha is an acidic, fermented drink made from a base of tea, sugar, bacteria and yeast. To make kombucha, a <em>symbiotic colony of bacteria and yeast</em> (<em>SCOBY</em>) is added to the tea and sugar, and the mixture is allowed to ferment. Although it's tea-based, Kombucha tastes nothing like tea but more like a mixture of cider, wine and beer.`,
        resultImg: `<img src="assets/results/kombucha.svg">`
    },
    {
        resultTitle: "Yakuruto",
        resultText: `You got Yakuruto (you may know it as Yakult)! This fermented milk-based drink's history started in 1930s in Japan, when scientist Dr. Minoru Shirota, cultivated the <em>Lactobacillus casei Shirota</em>bacteria. It took Dr. Shirota another 5 years of research to find the right food medium for the L. casei Shirota bacteria. In 1935 the first bottle of Yakult, was produced.`,
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
