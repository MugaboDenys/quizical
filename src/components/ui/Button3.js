import { nanoid } from "nanoid";
import { useState } from "react";

const Button3 = ({answers, checked, id , sent, selected, correct , className, clicked}) => {
    const [sel, setSel] = useState(null)
    let styles
    
    function handleClick(answer) {
        setSel(answer)
        clicked(id,answer)
    }
    return ( 
        <div href="/" className="flex  gap-10" >
            {answers.map((item, index)=>{
                
                if(checked){
                    styles={ backgroundColor: sel === item && '#D6DBF5' }
                    if(sent){
                        if(sel === item){
                            if(correct === item){
                                styles={ backgroundColor: '#94D7A2' }
                            }
                            else{
                                styles={ backgroundColor: '#F8BCBC' }
                            }
                            
                        }
                        if(item === correct){
                            styles={ backgroundColor: '#94D7A2' }
                        }
                    }
                    
                }
                return (
                    <button value={item} style={styles} key={index} onClick={()=>handleClick(item)} className={`py-3 min-w-[10rem] cursor-pointer hover:bg-[#e7ebff] duration-300 px-2 border-2 border-[#293264] text-[#293264] rounded-xl ${className}`}>{item}</button>
                )
            })}
        </div>
     );
}
 
export default Button3;