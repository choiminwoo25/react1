4주차

//기본구조
function Profile () {
  return(
    <>
    
    </>
  )
}


파일이름=컴포넌트이름 ex) profile.jsx안의 profile컴포넌트
export하는 곳과 import하는 곳의 컴포넌트 이름이 같아야함



profile컴포넌트를 app.jsx에서 샤용하라면 app.jsx에서 import 해야함

컴포넌트 중첩 가능
컴포넌트 안에서 다른 컴포넌트를 선언하는건 아님

app컴포넌트에서 profile,MyTitle,Gallery컴포넌트를 불러와서 실행

컴포넌트를 다른 파일로 분리해야 재사용이 편함



import 방법이 여러가지 Named Export
1.import { NamedComponent1 } from "./NamedComponenet" 
//NamedComponenet안의  NamedComponent1을 가져옴

2.import { NamedComponent1, NamedComponent3 } from "./NamedComponenet" 
//NamedComponenet안의  NamedComponent1,NamedComponent2을 가져옴

3.import { NamedComponent1 as Foo, NamedComponent3 as Bar } from "./NamedComponenet"
// NamedComponent1 별칭을 Foo, NamedComponent3 별칭을 Bar로 지정

4.import  * as Foo  from "./NamedComponenet"
// *(전체)를 Foo라는 namespace로 지정하여 가져옴 쓸땐 Foo.NamedComponent3 이런식으로 사용

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
5주차

!!!jsx안에서 javascript를 사용할때
-> 문자열("")을 제외한 모든건 중괄호({})

React 컴포넌트는 Props를 이용해 서로 통신
부모 컴포넌트(사용하는쪽->import 및 호출) 는 자식 컴포넌트(사용 당하는 쪽)에게 props를 통해서 데이터 전달
props는  모든 javascript 값을 전달 가능 


