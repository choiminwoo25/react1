export default function Items({name,isPacked}) {
    
        let itemContent = name
        if(isPacked){
            itemContent = <del>{name+ "✅"}</del>
        }
        return(
            <li>{itemContent}</li>
        ) ;   



    
    //&&연산자
    //return <li>{name} {isPacked > 0 && "✅"}</li>; // &&을 쓸 때 ispacked가 0이면 반환할떄 아무것도 안하는게 아니라 0을 반환함
    

    // return(
    //     <li>
    //         {isPacked ? 
    //         (<del>
    //             {name + "✅"}

    //         </del>
    //         ) : (
    //             name
    //         )}

    //     </li>
    // )
    
    
    // ? :
    // return <li>{name} {isPacked ? "✅" : ""}</li>;
        
    


    
        
       
       
   
}