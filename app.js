
const question = document.querySelector("#theQuestion")
const guesses = document.querySelectorAll(".theGuesses")
//const correctBonus = 10
let score = 0
let index = 0
//let currentAnswer = 3
let container = document.querySelector(".container")
let nextButton = document.querySelector(".next")
let questions = [
    {
        question: "Let me get a sandwich, ____________",
        ans: ["a.) babe.", "b.) mister.", "c.) the ocky way!", "d.) lightly toasted."],
        answer: "c.) the ocky way!",
    },
    {
        question: "Can I get a Bacon, egg and _____________?",
        ans: ["a.) ketchup","b.) a roll","c.) cheese","d.) a bev"],
        answer: "c.) cheese",
    },
    {
        question: "When is it okay for you to forget the bev?",
        ans: ["a.) If you're not thirsty", "b.) If you're on a diet", "c.) neva, neva, neva!", "d.) If you forgot"],
        answer: "c.) neva, neva, neva!",
    },
    {
        question: "If you see something, __________!",
        ans:["a.) Run", "b.) Mind your business", "c.) Say Something!", "d.) Yell at them"],
        answer: "c.) Say Something!",
    }
]
let finalScore = document.querySelector(".finalScore")

let getNewQuestion = () => {
        question.innerText = questions[index].question
        guesses.forEach((div,idx) => {
            //let btn = document.createElement("button")
            div.innerText = questions[index].ans[idx]
            // console.log(div.innerText)
            // console.log(idx)
            div.addEventListener('click', (e) => btnClicked(e))
            // div.removeEventListener('click', (e) => btnClicked(e))
          })
          function btnClicked (e) {
            //console.log(idx)
            console.log(questions[index].answer)
            if (e.target.innerText === questions[index].answer){
                            score+=10
                            alert("Correct")
                        }else{
                            score+=0
                            alert("Incorrect")
                          //  console.log(questions[idx].answer)
                        }             
          }
        
        } 
    startGame = () => {
        score = 0
        getNewQuestion()
    } 
    
    

    nextButton.addEventListener("click",(e)=>{
    if (index === questions.length-1){
        //finalScreen in css to style this
        container.classList.add("finalScreen")
        container.innerHTML = `Your Final Score is ${score}`
    }else{
        index++
        getNewQuestion()

    }
    //console.log(index)
})
startGame()