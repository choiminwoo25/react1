# 202130436최민우
5/13 11주차

handle.jsx와 같이 특정 함수만 모아 놓은 파일을 모듈이라고 한다.
Handle과 같이 이벤트 핸들러만 모아 놓으면 Button 컴포넌트와 함께 어떤 프로젝트에서도 재사용이 용이하다. 
모듈의 이름은 camelcase로 사용한다.

-이벤트 전파
  --DOM 트리의 하위에 있는 <button>이 실행되면, 그 이벤트가
    DOM 트리의 상위 즉, 부모에게 전달된다.

- 이벤트 전파의 중지
  --이벤트 핸들러는 이벤트 오브젝트를 유일한 매개변수로 사용합니다
  --관례적으로 이벤트 오브젝트를 의미하는 "event"를 "e"로 줄여서 호출하는것이 일반적이다.
  --이 오브젝트는 이벤트의 정보를 읽어 들이는데 사용할 수 있다/
  --또한 이벤트 오브젝트가 전파를 멈출 수 있게 해준다,
  --이벤트가 부모 컴포넌트에 닿지 못하도록 막으려면, 다음 에제처럼 bubble 컴포넌트에 Button 컴포넌트를 추가하고, e.stopPropagation()을 호출하도록 한다.

```javascript
function Button({onClick, children, className}) {
    return(
        <button className={className} onClick={e => {
            e.stopPropagation();
            onClick();
        }}>{children}</button>
    )
}
```
- e.stopPropagation()와 e.preventDefault()
  --전파를 중지하는 데는 둘 다 유용하지만, 전혀 다른 기능을 가짐
  --e.stopPropagation()은 이벤트 핸들러가 상위 태그에서 실행되지 않도록 멈추는 기능
  --e.preventDefault() 는 브라우저 기본 동작을 갖고 있는 일부 이벤트가 해당 기본 동작을 실행하지 않도록 방지 하는 기능

- State
  --State는 컴포넌트의 기억장소
  -- 컴포넌트는 상호 작용의 결과로 화면의 내용을 변경해야 하는 경우가 많다.
  



ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
5/6 10주차

-이벤트 핸들러 함수의 전달
  --함수를 전달하는 것은 함수의 이름만 prop의 형태로 전달 ex:<button onClick={handleClick}>
  --함수를 호출하는 것은 함수의 이름에 소괄호를 함께 사용 ex: <button onClick={handleClick()}>

React에서 <button>을 컴포넌트처럼 처리하기때문에 props을 사용할 수 있음

-아래 방식으로 사용하면 관리와 재사용이 편리한 컴포넌트 만들 수 잇음
  -- 1. Button 컴포넌트는 버튼의 출력만 담당하게 한다.
  -- 2. 이벤트 핸들러는 별도의 파일에 모듈의 형대로 모아서 관리한다.
  -- 3. 부모 컴포넌트에서 Button 컴포넌트를 호출 할떄 이벤트 핸들러를 함께 전달한다.


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

4/29 9주차

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

4/15 7주차

배열의 항목들을 필터링하기
```javascript
const filterTests = heroes.filter(hero =>
        hero.name === "클라크 켄트"
    );
```
여기서 hero(아무거나 쓰는거 가능)에 here.name이 클라크 켄트인 정보를 임시저장
name 이 다르면 저장안함 그리고 저장한 값을 filterTests로 저장

-화살표함수
  --화살표 함수는 묵시적으로 바로 뒤에 잇는 식을 반환하기 때문에 return 문이 필요하지 않는다

  --그러나 뒤에 {}가 오는 경우에는 return을 명시적으로 작성해야 한다.

key props로 할당해줘야 배열 중 어떤 자식 요소인지 정확히 알기때문에 콘솔에서 경고가 안뜸, key props는 배열안에 포함되어야 한다

-프래그먼트와 key props 
  --프래그먼트 구문으로는 key를 전달할 수 없음
  이런경우 <div>태그로 그룹화 하거나 React에서 제공하는 <Fragmemt>태그를사용해야함(Fragment태그 사용할때 import 해야함)

-순수함수
  --1.자신의 일에만 집중하고, 함수가 호출되기 전에 존재했던 어떤 객체나 변수도 변경하지않음
컴포넌트는 순수함수로 만들어야 좋음

-지역 변경(local mutation)
  --잘못된 예제의 무제점은 컴포넌트가 외부에 있는 기존 변수를 렌더링 중에 변경했ㄷ는 것입니다.
  --그러나 렌더링 중에 생성된 변수와 객체를 변경하는 것은 전혀 문제되지 않음




ESLint 설치

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

4/8 6주차


promps 예제 실습
중복된 코드는 제거하는게 좋음

```javascript
export default function Items({name,isPacked}) {
    return(
        < li>
            {isPacked ? 
            (< del>
                {name + "✅"} <-- {} 쓰는 이유는 < del>태그 안에 잇어서

            </del>
            ) : (
                name <-- 얘는 isPacked앞에서 중괄호로 감싸고있어서 안씀
            )}

        </li>
    )
}
```


- return < li>{name} {isPacked > 0 && "✅"}</ li>;  
  - &&을 쓸 때 ispacked가 0이면 반환할떄 아무것도 안하는게 아니라 0을 반환함
  그래서 > 0 을 사용


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

4/1일 5주차

- !!!jsx안에서 javascript를 사용할때
  - 문자열("")을 제외한 모든건 중괄호({})

React 컴포넌트는 Props를 이용해 서로 통신
부모 컴포넌트(사용하는쪽->import 및 호출) 는 자식 컴포넌트(사용 당하는 쪽)에게 props를 통해서 데이터 전달
props는  모든 javascript 값을 전달 가능 

image 크기 width=200 으로 자식컴포넌트를 설정하고 부모컴포넌트에서 widh={200}라고 설정하지 않으면 기본으로 width=200으로 나옴

- spread문법 -> props를 한번에 전달
  - 무분별하게 사용하면 x
  - 가독성 떨어짐
  - 불필요한 데이터 전달
  - 우선순위 문제: <profile {...userData} age={30}/> 이 경우 뒤에 있는 age={30} 값이 적용

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

3/25일 4주차

//기본구조
function Profile () {
  return(
    <>
    
    </>
  )
}


- 파일이름=컴포넌트이름 ex) profile.jsx안의 profile컴포넌트
  - export하는 곳과 import하는 곳의 컴포넌트 이름이 같아야함
  - profile컴포넌트를 app.jsx에서 샤용하라면 app.jsx에서 import 해야함

1. 컴포넌트 중첩 가능
  - 컴포넌트 안에서 다른 컴포넌트를 선언하는건 아님

2. app컴포넌트에서 profile,MyTitle,Gallery컴포넌트를 불러와서 실행

3. 컴포넌트를 다른 파일로 분리해야 재사용이 편함



import 방법이 여러가지 Named Export
1. import { NamedComponent1 } from "./NamedComponenet" 
  - NamedComponenet안의  NamedComponent1을 가져옴

2. import { NamedComponent1, NamedComponent3 } from "./NamedComponenet" 
  - NamedComponenet안의  NamedComponent1,NamedComponent2을 가져옴

3. import { NamedComponent1 as Foo, NamedComponent3 as Bar } from "./NamedComponenet"
  - NamedComponent1 별칭을 Foo, NamedComponent3 별칭을 Bar로 지정

4. import  * as Foo  from "./NamedComponenet"
  - *(전체)를 Foo라는 namespace로 지정하여 가져옴 쓸땐 Foo.NamedComponent3 이런식으로 사용

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

