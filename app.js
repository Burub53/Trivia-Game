
const question = document.querySelector("#theQuestion")
const guesses = document.querySelectorAll(".theGuesses")
//const correctBonus = 10
let score = 0
let index = 0
let container = document.querySelector(".container")
let nextButton = document.querySelector(".next")
let restartButton = document.querySelector(".refresh")
let questions = [
    {
        question: "1.) Fill in the blank. Let me get a sandwich, ____________",
        ans: ["a.) babe.", "b.) mister.", "c.) the ocky way!", "d.) lightly toasted."],
        answer: "c.) the ocky way!",
    },
    {
        question: "2.) Fill in the blank. Can I get a Bacon, egg and _____________?",
        ans: ["a.) ketchup", "b.) a roll", "c.) cheese", "d.) a bev"],
        answer: "c.) cheese",
    },
    {
        question: "3.) When is it okay for you to forget the bev?",
        ans: ["a.) If you're not thirsty", "b.) If you're on a diet", "c.) neva, neva, neva!", "d.) If you forgot"],
        answer: "c.) neva, neva, neva!",
    },
    {
        question: "4.) Fill in the blank. If you see something, __________!",
        ans: ["a.) Run", "b.) Mind your neck", "c.) Say Something!", "d.) Yell at them"],
        answer: "c.) Say Something!",
    },
    {
        question: "5.) You walk outside with a high of -2 and your boy asks you how it is outside. How do you describe the weather?",
        ans: ["a.) Yeah bro it's really cold outside", "b.) I think you should wear a jacket and gloves", "c.) It's BRIC", "d.) The weather app says it is -2 degrees but feels like -18"],
        answer: "c.) It's BRIC"
    }
]
let finalScore = document.querySelector(".finalScore")



let getNewQuestion = () => {
    guesses.forEach((div) => {
        div.removeEventListener('click', btnClicked)
    })
    question.innerText = questions[index].question
    guesses.forEach((div, idx) => {
        div.innerText = questions[index].ans[idx]
        div.addEventListener('click', (e) => btnClicked(e))
    })
    function btnClicked(e) {
        if (e.target.innerText === questions[index].answer) {
            score += 10
            alert(`Correct your current score is ${score}`)
        } else {
            score = 0
            alert(`Nah you're back at ${score}`)
        }
    }

}
startGame = () => {
    score = 0
    getNewQuestion()
}



nextButton.addEventListener("click", (e) => {
    if (index === questions.length - 1) {
        container.classList.add("finalScreen")
        container.innerHTML = `Your Final Score is ${score}`
    } else {
        index++
        getNewQuestion()

    }
})

// restartButton.addEventListener("click",(e) => {
//     alert("You can't retake this for AT LEAST another year!")
// })

startGame()