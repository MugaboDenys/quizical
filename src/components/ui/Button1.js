

const Button1 = ({text, className, link}) => {
    return ( 
        <a href={link}  className={`block py-3 px-6 bg-[#4D5B9E] hover:bg-[#687ad3] duration-200 cursor-pointer text-white rounded-2xl ${className}`}>
            {text}
        </a>
     );
}
 
export default Button1;