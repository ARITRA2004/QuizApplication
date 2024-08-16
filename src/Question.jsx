import React, { useRef } from "react";
import Questions from "./Questions";
import { useState } from "react";
import './Questions.css';

function Quest() {
    // const [question, setQuestion] = useState(Questions);
    const question = Questions;
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    const [selectAnswer, setselectAnswer] = useState(null);
    const [temp,setTemp] = useState(0);

    function prvQuestion() {
        setCount(prevCount => {
            return prevCount > 0 ? prevCount - 1 : prevCount;
        });
        if (count === 0) {
            alert("No questions before");
        }
    }
    function nextQuestion() {
        if (selectAnswer) {
            setCount(prevCount => {
                return prevCount < Questions.length - 1 ? prevCount + 1 : prevCount;
            });
        }
    }

    function chooseAns(event) {
        console.log(selectAnswer);

        let choice = event.target.name;

        setselectAnswer(choice);

        console.log(selectAnswer);

        if (choice === Questions[count].answer) {
            console.log("temp value",temp);
            setTemp((prvi)=>{
                prvi = prvi+1;
                if(temp === 0){
                    setScore((prv)=>{
                        console.log("score value before increasing",score);
                        prv = prv+1;
                        return prv;
                    })
                }
                else{
                    setScore(prv=>prv);
                }
            });
        }
        console.log("score value",score);
    }

    const target = useRef(null);
    const scor = useRef(null);


    function changePage(event) {
        setTemp(0);
        let e = event.target.innerText;
        console.log(e);

        if (e === "Submit") {
            if (selectAnswer) {
                target.current.style.display = "none";
                scor.current.style.display = "block";
                nextQuestion();
                // console.log(count);
            }
            else {
                alert("Choose an options first");
            }
        }
        else if(e === "Next"){
            if(!selectAnswer){
                alert('Choose an option first')
            }
            nextQuestion();
            setselectAnswer("");
        }

    }

    return (
        <>
            <div ref={target} className="main-container">
                <div className="second-container">
                    <div className="question">
                        <h2>{question[count].question}</h2>
                    </div>
                    <div className="options">
                        <div><button name="A" onClick={chooseAns}>{question[count].A}</button></div>
                        <div><button name="B" onClick={chooseAns}>{question[count].B}</button></div>
                        <div><button name="C" onClick={chooseAns}>{question[count].C}</button></div>
                        <div><button name="D" onClick={chooseAns}>{question[count].D}</button></div>
                    </div>
                    <div className="buttons">
                        <div><button onClick={prvQuestion}>Go Back</button></div>
                        <div>
                            {/* <button onClick={(e) => { nextQuestion(); changePage(e) }}>
                                {count + 1 === Questions.length ? "Submit" : "Next"}
                            </button> */}
                            <button onClick={changePage}>
                                {count + 1 === Questions.length ? "Submit" : "Next"}
                            </button>
                        </div>
                    </div>
                </div>
                <p>{count + 1} of {Questions.length}</p>
            </div>
            <div ref={scor} className="score" style={{ display: "none" }}>
                <h1>Your score is : {score}</h1>
            </div>
        </>
    )
}

export default Quest;