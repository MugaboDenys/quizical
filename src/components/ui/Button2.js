const Button2 = ({text, className}) => {
    return ( 
        <button  className={`py-3 px-6 bg-[#D6DBF5] text-[#293264] rounded-3xl ${className}`}>
            {text}
        </button>
     );
}
 
export default Button2;