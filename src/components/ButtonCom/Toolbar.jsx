import ButtonCom from "./ButtonCom";
import  { handlePlay, handleStop}  from "./handle";
// import style from "/ButtonCom.module.css";
import samplevideo from "../../assets/sample.mp4";

export default function Toolbar() {
    
    return(
        <>
        <nav>
            <ButtonCom message="videoPlayer" handle={handlePlay}  > 
            Play
         </ButtonCom>
        &nbsp;
         <ButtonCom message="videoPlayer" handle={handleStop}> 
            Stop
         </ButtonCom>
        </nav>
        <br />
        <section>
            <video id="videoPlayer" src={samplevideo} controls width="350"/>
        </section>
         
        </>
    )
}