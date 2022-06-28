# 트리플 입사 사전과제. 
## 과제목표
![image-4](https://user-images.githubusercontent.com/97146131/176143707-3061ae33-84ed-49d4-80e8-52856fbcfe8b.png)
## 프로젝트 실행 방법
React.js와 TypeScript를 사용. 그 외 일체 라이브러리 없음.  
## 해당 기술 사용 목적
- React.js
  - 평가항목에서 컴포넌트의 활용도를 체크하고 있고, 컴포넌트의 재활용을 위해 사용.
  - 개발 생태계가 많이 형성되어 웹 상에서 수월하게 정보 획득 가능.
- TypeScript
  - type 미지정으로 인한 런타임 오류를 해결 가능.
  - 트리플 실무에서 TypeScript를 사용.
  - 현재 학습중인 TypeScript를 적용해본다면 경험치 향상에도 도움이 될 것으로 판단.
## 과제 구현 완료
![구현 완료](https://user-images.githubusercontent.com/97146131/176148671-51e1124c-57bd-412c-8c15-6847fe50aeb9.gif)
## 트러블슈팅
### transition 작동 문제
1. 트리플 웹페이지 상에서는 애니메이션이 transition으로 적용.
2. 내가 적용한 애니메이션은 animation으로 적용. 그동안 transition은 사용한 경험이 없었고 animation을 많이 사용함.  
![정상](https://user-images.githubusercontent.com/97146131/175851450-70534793-2fdd-4276-9e02-e61b2a907d39.gif)

3. 트리플 웹페이지와 동일하게 적용하려 먼저 트리플 앱 로고부분의 animation을 transition으로 변경.
4. 변경 후 애니메이션 작동 불능.  
![비정상](https://user-images.githubusercontent.com/97146131/175851511-fef49bbe-f743-4ba0-9527-18aa8cc6f2e0.gif)

5. 인터넷문서를 살펴보니 animation은 요소의 상태변경이 없어도 언제나 작동이 가능하지만 transition은 요소의 상태변경이 있어야 작동이 가능.
6. 가설을 세움. 
 - 현재 트리플 웹페이지에서는스크롤이 되고 해당 요소가 화면에 보여짐과 동시에 애니메이션을 작동 시킴.
 - 스크롤 밖에서는 요소를 감추고 있는 상태.
7. 해당 요소의 뷰를 false 값으로 감추고 화면에 보이며 true값이 되는 기능이 필요할 것으로 보임.
8. styled-components로 컴포넌트를 생성했는데 단순하게 defaultProps로 속성을 추가하는 것을 불가능했음.
9. 타입스크립트로 styled-components의 타입을 정의할 수 있다는 내용의 글을 보았고 적용을 해 봄.  
https://velog.io/@hwang-eunji/styled-component-typescript
필요한 애니메이션은 은 보이지 않는 것과, 이동해야하는 것이고 두가지의 속성이므로 < {age : number} > 의 방법은 사용 불가.  
처음 시도해보는 타입스크립트 인터페이스를 사용해 보기로 함. 인터페이스로 관리한다면 여러 타입을 하나의 파일로 관리할 수 있다고 함.
10. 해결.  
![해결](https://user-images.githubusercontent.com/97146131/175885241-4beb1c9e-cf81-4e11-9250-47e5ab6177b4.gif)
11. 웬지 트리플 웹페이지와는 애니메이션 속도가 다른 듯 함.  
확인해보니 0ms, 300ms, 500ms의 속도로 각 애니메이션이 작동하고 있었음.  
일단 과제 지시사항인 애니메이션 속도 0ms, 100ms, 200ms를 적용하기로 함.
### 카운트 업 동작 방식 문제
1. 카운트 기능은 구현.
내가 필요한 부분을 완전하게 설명하고 있지는 않지만 도움이 된 링크가 있다.
  - 참고링크  
https://shylog.com/react-custom-hooks-scroll-animation-countup/
2. 동작방식에 문제.
위 링크로 작성한 코드는 카운트 컴포넌트가 여러개일 경우 각 컴포넌트의 동작이 다르다.
![카운트 문제](https://user-images.githubusercontent.com/97146131/176062412-1f487c83-3fdf-4ccc-bd9d-1a6a79d2d295.gif)

3. 과제 요구사항.
- 각 숫자는 0부터 시작합니다. //해결
- 세 숫자 모두 2초 동안 증가하고, 동시에 끝나야 합니다. //해결
- 증가 속도가 느려지는 효과를 구현해야 합니다. //해결
- React와 DOM API만을 이용해 구현해야 합니다. //해결
4. 최대 2000ms 내에서 각 카운트가 종료되는 시간이 다름. 해결 방안 모색 중.
5. 증가하며 도달지점 부근에서 카운트 속도가 느려지는 기능 추가 필요.
6. 각 컴포넌트 카운트 종료시점 동기와, easing기능 구현 완료.
  - 트리플 웹페이지에서 작동하는 프레임과 유사한 부드러운 카운팅을 위해 초당 60프레임으로 기능하게 했다. 좀 더 프레임을 올려보아도 시각적으로 더이상 부드러워지지 않았다.
  - useCountUp 커스텀훅의 useEffect내의 코드를 작성하면서 이해하는 것이 필요했는데, 이해하는 시간은 그리 오래 걸리지 않았다.  
totalFrames를 1씩 증가시킨 frame으로 나누고 그 값을 종료숫자에 곱해준다.  
frame이 점점 증가하며 현재 frame과 totalFrames의 값이 동일해지면 나누었을 때 그 값이 1이 될 것이고 1을 종료숫자에 곱한다면 종료숫자가 그대로 계산된다.  
매 프레임마다 계산되어 그 값은 setCount로 count에 할당한다.
  - setInterval의 종료시점은 현재 frame과 totalFrames의 값이 동일해질 때 종료되는 것으로 설정했다.
  - 참고링크  
https://jshakespeare.com/simple-count-up-number-animation-javascript-react/ //카운트 종료시점 동기화.
https://gist.github.com/gre/1650294 //easing 관련
