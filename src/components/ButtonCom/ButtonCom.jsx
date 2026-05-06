// import style from "/ButtonCom.module.css";
export default function ButtonCom({handle, message, children}) {

     

    return(
        <>
        

       <button onClick={() => handle({message})} >
        {children}
        </button>
        </>
    )
}