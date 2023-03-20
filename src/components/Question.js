import { useEffect, useState } from "react";
import Button3 from "./ui/Button3";
import { nanoid } from "nanoid";
import _ from "lodash";


const Question = () => {
    const [serverData, setServerData] = useState([])
    const [session, setSession] = useState(0)
    const [selected, setSelected] = useState(false)   
    const styles = {
        backgroundColor : serverData.forEach(qtn => qtn.answers.forEach(ans =))
    }
     
    useEffect(()=>{
        async function newQuestion() {
            try {
                let url = "https://opentdb.com/api.php?amount=5"
                let res = await fetch(url);
                const data = await res.json()
                console.log(data)
                let QtnsArr = []
                data.results.forEach(qtn =>
                    qtn.type === "multiple" && QtnsArr.push({id: nanoid(), answers:_.shuffle([qtn.correct_answer, ...qtn.incorrect_answers]), question : qtn.question, correct:qtn.correct_answer, selected: false, checked:false}))
                setServerData(QtnsArr)
            } catch (error) {
                console.log(error);
            }
        }
        newQuestion();
        
    },[session])
    
    console.log(serverData)
    function handleSelected(id){
        console.log(id)
        // serverData.map(qtn => qtn.id === id ? qtn.answers )
    }

    return ( 
        <div className="px-12" > 
            {serverData.map(topic =>{
                return(
                    <div key={topic.id} className=" pb-5 border-b-2 relative z-30 ">
                        <h2 className=" text-[#293264]  font-medium text-xl">{topic.question}</h2>
                        <div className="flex justify-center gap-5 mt-5">                        
                            <Button3 clicked={()=>handleSelected(topic.id)}  title={topic.answers} className=" py-1 text-sm" styles={styles} />
                        </div>
                    </div>
                )
            })}
            <div className="flex gap-5 mt-5">
                {serverData[0] && serverData[0].answers.map(item=>(
                    <Button3 key={item} text={item} className=" py-1 text-sm" />
                    ))
                }
            </div>            
             {/* <h2>{JSON.stringify(serverData)}</h2> */}
        </div>
     );
}
 
export default Question;calypse
