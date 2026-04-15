// export const Kiosk = [
//     {
//         id : 1,
//         name : "일반세트",
//         menu : "치즈버거1개/콜라1개 + (이벤트)프렌치 프라이2개",
//     },
//     {
//         id : 1,
//         name : "패밀리세트",
//         menu : "치즈버거2개/콜라2개 + (이벤트)프렌치 프라이4개",
//     },
// ];

import OrderUp from "./OrderUp";

export default function Kiosk() {
    return(
        <section>
            <h2>치즈버거 세트 메뉴를 주문하세요.</h2>
            <p>일반 세트 : </p>
            <OrderUp order={1} />
            <p>패밀리 세트 : </p>
            <OrderUp order={2} />
            <p>이용해 주셔서 감사합니다.</p>
        </section>
    );
};