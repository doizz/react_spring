import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

//0. react 엔진 - 데이터변경감지에서 UI그려주는 엔진
//1. 실행방식(index.html) - SPA(싱글페이지 어플리케이션)
//2. JSX 문법


//(1) return 시에 하나의 dom만 리턴할수 있다.
//(2) 변수선언은 let, const로만 해야함.
//(3) if사용불가 삼항연산자 사용가능
//(4) 조건부 렌더링 (조건 && 값)
//(5) css디자인 
//  - 내부에 적는 방법
//  - 외부파일에 적는 방법
//  - 라이브러리 사용(부트스트랩,component-styled)



let a=10; //변수
const b= 20; //상수
const mystlye={
  color:"red"
};


function App() {
  let c;
  return( 
  <div>
    <div style={mystlye}>안녕{a === 10  ? "10입니다." : '10이아닙니당.'}</div>
    <h1 className="box-style">헤딩태그{b === 20 && '20입니다'}</h1>
    <hr />
    </div>
    );
}

export default App;
