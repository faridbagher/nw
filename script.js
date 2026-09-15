var words = [
    {
        german: "Haus",
        meaning: "خانه",
        audio: "haus.mp3",
        example: "Das Haus ist groß.",
        exampleTranslation: "خانه بزرگ است.",
        level: "A1"
    },

    {
        german: "Schule",
        meaning: "مدرسه",
        audio: "schule.mp3",
        example: "Ich gehe jeden Tag zur Schule.",
        exampleTranslation: "من هر روز به مدرسه می‌روم.",
        level: "A1"
    },

    {
        german: "Freund",
        meaning: "دوست",
        audio: "freund.mp3",
        example: "Mein Freund wohnt in meiner Nähe.",
        exampleTranslation: "دوست من نزدیک من زندگی می‌کند.",
        level: "A1"
    },

    {
        german: "lernen",
        meaning: "یاد گرفتن",
        audio: "lernen.mp3",
        example: "Ich lerne Deutsch.",
        exampleTranslation: "من آلمانی یاد می‌گیرم.",
        level: "A1"
    },

    {
        german: "arbeiten",
        meaning: "کار کردن",
        audio: "arbeiten.mp3",
        example: "Mein Vater arbeitet jeden Tag.",
        exampleTranslation: "پدرم هر روز کار می‌کند.",
        level: "A1"
    },

    {
        german: "essen",
        meaning: "غذا خوردن",
        audio: "essen.mp3",
        example: "Wir essen zusammen.",
        exampleTranslation: "ما با هم غذا می‌خوریم.",
        level: "A1"
    },

    {
        german: "Wasser",
        meaning: "آب",
        audio: "wasser.mp3",
        example: "Ich trinke Wasser.",
        exampleTranslation: "من آب می‌نوشم.",
        level: "A1"
    },

    {
        german: "Stadt",
        meaning: "شهر",
        audio: "stadt.mp3",
        example: "Die Stadt ist schön.",
        exampleTranslation: "شهر زیبا است.",
        level: "A1"
    }
];


var currentIndex = 0;
var filteredWords = words.slice();

var flashcard = document.getElementById("flashcard");
var flipBtn = document.getElementById("flipBtn");
var nextBtn = document.getElementById("nextBtn");
var speakWordBtn = document.getElementById("speakWordBtn");
var searchInput = document.getElementById("searchInput");
var levelSelect = document.getElementById("levelSelect");


function showWord() {

    if (filteredWords.length === 0) {

        document.getElementById("germanWord").textContent = "لغتی پیدا نشد";
        document.getElementById("backWord").textContent = "لغتی پیدا نشد";
        document.getElementById("meaning").textContent = "";
        document.getElementById("example").textContent = "";
        document.getElementById("exampleTranslation").textContent = "";

        return;
    }


    var word = filteredWords[currentIndex];


    document.getElementById("frontLevel").textContent = word.level;

    document.getElementById("backLevel").textContent = word.level;

    document.getElementById("germanWord").textContent = word.german;

    document.getElementById("backWord").textContent = word.german;

    document.getElementById("meaning").textContent = word.meaning;

    document.getElementById("example").textContent = word.example;

    document.getElementById("exampleTranslation").textContent =
        word.exampleTranslation;

    document.getElementById("wordCount").textContent =
        filteredWords.length;

    document.getElementById("currentNumber").textContent =
        currentIndex + 1;

    flashcard.classList.remove("flipped");
}


// برگرداندن کارت
flipBtn.addEventListener("click", function () {

    flashcard.classList.toggle("flipped");

});


// لغت بعدی
nextBtn.addEventListener("click", function () {

    if (filteredWords.length === 0) {
        return;
    }

    currentIndex++;

    if (currentIndex >= filteredWords.length) {
        currentIndex = 0;
    }

    showWord();

});


// پخش صدای کلمه
speakWordBtn.addEventListener("click", function () {

    if (filteredWords.length === 0) {
        return;
    }

    var word = filteredWords[currentIndex];

    var audio = new Audio("audios/" + word.audio);

    audio.play().catch(function () {

        alert("فایل صوتی پیدا نشد یا قابل پخش نیست.");

    });

});


// جستجو
searchInput.addEventListener("input", function () {

    var searchText = searchInput.value.toLowerCase();

    filteredWords = words.filter(function (word) {

        return word.german
            .toLowerCase()
            .indexOf(searchText) !== -1;

    });

    currentIndex = 0;

    showWord();

});


// انتخاب سطح
levelSelect.addEventListener("change", function () {

    var selectedLevel = levelSelect.value;


    if (selectedLevel === "all") {

        filteredWords = words.slice();

    } else {

        filteredWords = words.filter(function (word) {

            return word.level === selectedLevel;

        });

    }


    currentIndex = 0;

    showWord();

});


showWord();