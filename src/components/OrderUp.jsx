// import { Fragment } from "react"
// import { Kiosk } from "./Kiosk"

// export default function OrderUp() {
//     const FilterKiosks = Kiosk.filter(Kiosk => 
//         Kiosk.id === 1
        
//     );
//     const OrderKiosks = FilterKiosks.map(Kiosk =>
//         <li key={Kiosk.id}>
//             <p>{Kiosk.name}:</p>
//             <p>{Kiosk.menu}</p>
//         </li> 
        
//     );
//     return(
//       <section>
//         <h1>치즈버거 세트 메뉴를 주문하세요.</h1>
//         <p>{OrderKiosks}</p>
//       </section>
//     );
// }

export default function OrderUp({order}) {
    return(
        <section>
            <p> 치즈버거 {order}개/콜라 {order}개 + (이벤트)프렌치 프라이 {2 * order}개</p>
        </section>
    )
}