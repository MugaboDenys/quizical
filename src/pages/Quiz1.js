import Question from "../components/Question";
import Button1 from "../components/ui/Button1";

const Quiz1 = () => {
    
    return ( 
        <div className="min-h-screen w-[1050px] bg-[#F5F7FB] flex justify-center py-20 items-start relative">
            <div>
                <img alt="" src="/blobs.png" className="absolute right-0 top-0"/>
                    
                <img alt="" src="/blobs1.png" className="absolute left-0 bottom-0"/>
            </div>
            <div className="flex flex-col items-center">
            <Question />
                    <Button1 text={"Submit"} className={"w-fit"} />
            </div>
        </div>
     );
}
 
export default Quiz1;