import { useEffect, useState } from "react";
import Button3 from "../components/ui/Button3";
import { nanoid } from "nanoid";
import _ from "lodash";


const Question = () => {
    const [serverData, setServerData] = useState([])
    const [session, setSession] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [submit, setSubmit] = useState (false)

    
  
    useEffect(()=>{
        async function newQuestion() {
            try {
                let url = "https://opentdb.com/api.php?amount=5"
                let res = await fetch(url);
                const data = await res.json()
                let QtnsArr = []
                data.results.forEach(question =>
                     QtnsArr.push({id: nanoid(), answers:_.shuffle([question.correct_answer, ...question.incorrect_answers]), question : question.question, correct:question.correct_answer, checked: false, selected:null}))
                setServerData(QtnsArr)
            } catch (error) {
                console.log(error);
            }
        }
        newQuestion();
        
    },[session])

    function handlePlayAgain(){
        setSession(prevSession=>prevSession +1)
        setSubmit(false)
    }
    
    // console.log(serverData)
    function handleSelected(id, answer){
        setServerData(questions => questions.map(question =>{
            
            return  question.id === id ? {...question, checked: !question.checked, selected : answer} : question
          }))
          
        // serverData.map(qtn => qtn.id === id ? qtn.answers )
        return submit
    }
    
    function handleCheck(){
        let selected = true;
        let trueAnswer = 0
        serverData.forEach(qtn=>{
            if(qtn.selected === null){
                selected = false;
                return
            }
        })
        if(!selected){
            return
        }
        setServerData(questions =>questions.map(qtn => {
            return {...qtn, checked : true}
        }))
        setSubmit(true)
        serverData.forEach(question=>{
            if(question.selected === question.correct){
               trueAnswer +=1
            }
        })
        setCorrect(trueAnswer)
        
    }

    return ( 
        <div className="px-12 min-h-screen w-[1050px] mb-20 bg-[#F5F7FB] flex justify-center py-20 items-start relative" >
            <div>
                <img alt="" src="/blobs.png" className="absolute right-0 top-0"/>
                    
                <img alt="" src="/blobs1.png" className="absolute left-0 bottom-0"/>
            </div> 
            <div className="flex flex-col items-center ">

                {serverData.map(topic =>{
                    return(
                        <div key={topic.id} className=" pb-5 border-b-2 relative z-30 ">
                            <h2 className=" text-[#293264]  font-medium text-xl" dangerouslySetInnerHTML={{ __html:topic.question}}/>
                            <div className="flex justify-center gap-5 mt-5">                        
                                <Button3 idt={nanoid()} clicked={handleSelected} sent={submit} {...topic} className=" py-1 text-sm"  />
                            </div>
                        </div>
                    ) 
                })}
            </div>
            <div className="flex flex-col absolute bottom-10 mt-10">
            {submit && <h4 className='text-sm'>You scored {correct}/5 correct answers</h4>}
                <button onClick={submit ? handlePlayAgain :  handleCheck} className={`block py-3 px-6 bg-[#4D5B9E] hover:bg-[#687ad3] duration-200 cursor-pointer text-white rounded-2xl `}>{submit ? "Play Again" :  "check"}</button>
            </div>
        </div>
     );
}
 
export default Question;