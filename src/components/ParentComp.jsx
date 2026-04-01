import Profile from "./profile"
import MyTitle from "./MyTitle"
import ChildComp from "./ChildComp"
import reactLogo from "../assets/react.svg";


export default function ParentComp() {
    return(
        <>
         <ChildComp
            imageInfo={
                {
                    src: reactLogo,
                    alt: "React",
                }
            }
           width={100} height={100}
         
         
         />

        </>
    )
}