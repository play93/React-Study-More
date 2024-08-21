## styled-components & reset css

- css in Js 방식 (styled component)
  자바스크립트 안에 css가 있는 것.
  새로운 패키지를 사용해야 함
- 왜 사용해야 하나?
  => css만으로는 조건에 따라서 스타일을 적용하거나 특정 로직을 적용하는 것은 불가능하므로

<br>

## useState

-

```
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

```

이렇게 코드를 작성해도 각각 실행되는 것이 아니라 set을 해야 하는걸 모아서 한꺼번에 처리하기 때문에 (렌더링 최적화를 위해서) 위 세줄을 동일 요청으로 판단하고 한번만 업데이트를 해주기 때문에 1이 더해짐
(배치업데이트)

-

```
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);

```

함수형 업데이트 방식은 명령을 모아서 순차적으로 실행시킴 (prev인자로 다음 setCount에 들어감) 그래서 이 코드는 3이 더해짐

- 함수형 업데이트 => 자식컴포넌트에 굳이 count까지 가져오지 않아도 됨. count값을 가져와 (count + 1)을 해줄 수 있지만 이전값을 참조해서 이전값에 +1하는 방식 setCount((prev) => prev + 1); 으로 사용

<br>

## useEffect

어떤 컴포넌트가 화면에 보여졌을 때 뭔가 실행하고싶거나, 또는 사라졌을 때 실행하고 싶을 때 사용

```
useEffect(
    () => {
      console.log("hello useEffect");
    },
    [count] /*<=의존성배열*/
  );

```

=> count가 바뀌었을 때 useEffect로직을 실행!

모든 state의 변경사항을 확인하고싶으면 의존성배열을 안적어도 상관없음.
But 특정 state의 변경사항에 따라서 어떤 로직을 실행하고싶다? => 의존성 배열을 넣어줘야 함

<br>

## useRef

새로운 레퍼런스 객체를 생성해줌
특정 값을 저장하기 위한 훅

```
const ref = useRef()
```

useState는 값이 변경 => 리렌더링 하는 반면, useRef는 어떤 경우에도 리렌더링 X

특정 Dom요소에 접근 할 수 있음 => 조작도 가능!
컴포넌트 밖에 변수를 선언하는것 권장x

<br>

## useContext

자식 컴포넌트 => 자식 컴포넌트 => 자식 컴포넌트 => 자식 컴포넌트=> ... 가 많아지면 prop drilling 현상이 일어남
이게 너무 깊어지면 prop이 어디서부터 왔는지 파악이 어려워지고 어떤 컴포넌트에서 오류가 생기면 추적이 힘들어져 대처가 늦어짐

contextAPI를 쓰게되면 특정공간에 있는 모든 컴포넌트들에 접근할 수 있음 => 전역 데이터를 관리

- `createContext` : context 생성
- `useContext` : context를 구독하고 해당 context의 현재 값을 읽음
- `Provider` : context를 하위 컴포넌트에 전달 [중요!]

만능은 아님!

provider에서 제공한 value가 달라지게 되면 useContext를 사용하고 있는 모든 컴포넌트가 리렌더링됨 => value부분을 신경써야함
