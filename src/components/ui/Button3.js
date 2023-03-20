import { useState } from "react";

const Button3 = ({title=[], className, styles, clicked}) => {
    
    return ( 
        <div href="/" className="flex  gap-10" >
            {title.map(item=>
                <span style={styles} onClick={clicked} className={`py-3 min-w-[10rem] cursor-pointer hover:bg-[#e7ebff] duration-300 px-2 border-2 border-[#293264] text-[#293264] rounded-xl ${className}`}>{item}</span>
                )}
        </div>
     );
}
 
export default Button3;