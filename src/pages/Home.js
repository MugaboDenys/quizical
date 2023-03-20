import Button1 from "../components/ui/Button1";
const Home = () => {
    return ( 
        <div className="h-[750px] w-[750px] bg-[#F5F7FB] flex justify-center items-center relative">
            <img alt="" src="/blobs.png" className="absolute right-0 top-0"/>
            <div>
                <h2 className="text-[#293264] text-3xl font-medium">Quizzical</h2>
                <p className="text-[#293264]">Your Online self assessment</p>
                <Button1 text={"Start quiz"} className={"px-10 mt-10"} link={'/questions'} />
            </div>
            <img alt="" src="/blobs1.png" className="absolute left-0 bottom-0"/>
        </div>
     );
}
 
export default Home;