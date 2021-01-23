const startbttn = document.getElementById("strtbtn");
const nextbttn = document.getElementById("nxtbtn");
const qcontainerele = document.getElementById("qcontainer");
const quesele = document.getElementById("ques");
const ansbttnsele = document.getElementById("ansbtns");

let shffldq, currqindex;

startbttn.addEventListener("click", startquiz);
nextbttn.addEventListener("click", () => {
    currqindex++;
    setnextq();
});

function startquiz() {
    startbttn.classList.add("hide");
    shffldq = quess.sort();
    currqindex = 0;
    qcontainerele.classList.remove("hide");
    setnextq();
}

function setnextq() {
    reset();
    showques(shffldq[currqindex]);
}

function showques(ques) {
    quesele.innerText = ques.ques;
    ques.anss.forEach((ans) => {
        const button = document.createElement("button");
        button.innerText = ans.text;
        button.classList.add("btn");
        if (ans.correct) {
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click", selectans);
        ansbttnsele.appendChild(button);
    });
}

function reset() {
    clearclass(document.body);
    nextbttn.classList.add("hide");
    while (ansbttnsele.firstChild) {
        ansbttnsele.removeChild(ansbttnsele.firstChild);
    }
}

function selectans(e) {
    const selectedbutton = e.target;
    const correct = selectedbutton.dataset.correct;
    setclass(document.body, correct);
    Array.from(ansbttnsele.children).forEach((button) => {
        setclass(button, button.dataset.correct);
    });
    if (shffldq.length > currqindex + 1) {
        nextbttn.classList.remove("hide");
    } else {
        startbttn.innerText = "Restart";
        startbttn.classList.remove("hide");
    }
}

function setclass(element, correct) {
    clearclass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearclass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

const quess = [{
        ques: "What is not a Frontend part?",
        anss: [{
                text: "HTML",
                correct: false,
            },
            {
                text: "CSS",
                correct: false,
            },
            {
                text: "JAVASCRIPT",
                correct: false,
            },
            {
                text: "NODEJS",
                correct: true,
            },
        ],
    },
    {
        ques: "Where is Taj Mahal?",
        anss: [{
                text: "Kanpur",
                correct: false,
            },
            {
                text: "Prayagraj",
                correct: false,
            },
            {
                text: "Agra",
                correct: true,
            },
            {
                text: "Gorakhpur",
                correct: false,
            },
        ],
    },
    {
        ques: "National animal of India?",
        anss: [{
                text: "Lion",
                correct: false,
            },
            {
                text: "Elephant",
                correct: false,
            },
            {
                text: "Tiger",
                correct: true,
            },
            {
                text: "Horse",
                correct: false,
            },
        ],
    },
    {
        ques: "World's tallest statue?",
        anss: [{
                text: "Statue of Liberty",
                correct: false,
            },
            {
                text: "Statue of Unity",
                correct: true,
            },
            {
                text: "The Spring Temple Buddha",
                correct: false,
            },
            {
                text: "Sendai Daikkannon",
                correct: false,
            },
        ],
    },
];