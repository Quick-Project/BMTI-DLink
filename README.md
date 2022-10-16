# BMTI-DLink

안녕하세요 참여인원: 헬리, 백준, 부기, 승새, 앤디, 피터
<br/>

## ✅ 조모임 일정

| 날짜                | 시간 |
|  --------- | --- |
|  22.10.15 |     |
|  22.10.16 |     |
|  22.10.17 |     |
|  22.10.18 |     |
|  22.10.19 |     |



<br/>

## ✅ 참여 방법

> 1 ~ 3 은 한 번만, 4 ~ 9 과정을 반복하여 진행합니다.

1. 중앙 저장소를 나의 깃허브 계정에 fork 한다.
2. 로컬 저장소에 본인의 원격 저장소를 clone 한다.

   ```bash
   $ git clone 본인의 원격 저장소 URL
   ```

3. PR이 반영되어 변경된 중앙 저장소의 내용을 각 개인의 로컬 저장소에 받아 올 수 있어야 하므로 중앙 저장소도 로컬에 연결한다.

   - `2.`에서 clone한 본인의 원격 저장소에는 자동으로 `origin`이라는 이름이 부여되었습니다.
   - 중앙원격저장소를 `upstream`이란 이름으로 추가합니다.

     ```bash
     $ git remote add upstream https://github.com/seb-fe-40-algorithm-3/baekjoon-algorithm-study.git

     ## git 리모트 url 보기
     $ git remote -v
     ```

4. 스터디 진행 주차로 브랜치 생성한 후 생성한 브랜치로 이동

   ```bash
   ## 1주차일 경우
   $ git checkout -b feature/1주차
   ## n주차일 경우
   $ git checkout -b feature/n주차
   ```

5. 이동한 브랜치에서 프로젝트 작업을 시작한다.

   - `n주차` 폴더 생성
   - `n주차` 폴더 하위에 자신의 이름으로 폴더를 생성하고 폴더 내에 소스코드를 작성한다. (`🚫 타인의 소스를 절대로!! 수정하지 않습니다.`)

     ```plaintext
     예) baekjoon-online-judge > 2주차 > 김진희 > 01_1330.js
     ```

   - 조장은 `n주차` 폴더 안에 `n주차.md`파일도 생성하여 작성한다.

     - `1주차.md`

       ```plaintext
       # 입출력과 사칙연산

       입력, 출력과 사칙연산을 연습해 봅시다. Hello World! (총 15문제)
       ```

6. 작성된 내용을 본인의 원격 저장소로 push 한다.

   ```bash
   $ git add .
   $ git commit -m "커밋 메시지" # 커밋 컨벤션에 대해 생각해봅시다!
   $ git push origin feature/n주차
   ```

7. PR을 날린다.🕊

   - 본인의 원격 저장소 깃허브 페이지에서
   - push한 브랜치를 선택하여
   - 중앙 저장소의 `main` 브랜치에 Pull Request 합니다.
     - `PR 컨벤션에 대해서도 생각해 봅시다!`

8. 자유롭게 코드리뷰를 한다.

9. PR이 merge된 후 중앙 저장소에 있는 다른 기여자의 소스코드를 본인 원격 저장소에 가져오고 싶은 경우

   ```bash
   $ git checkout main
   $ git pull upstream main
   $ git push origin main
   ```

   - 이후 4번 과정부터 반복하여 진행

<br />
