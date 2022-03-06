import prisma from "./lib/prisma";

prisma.word.createMany({
  data: [
    {title: '첫번째 신조어', meaning: '장고 부트스트랩이라는 뜻이군요!', authorId: 'cl0ez927p0006kgefi9dn2ct4'},
    {title: '페이커', meaning: '페이커는 정말로 대단한 프로게이머라고 생각합니다. 어떠신가요?', authorId: 'cl0ez927p0006kgefi9dn2ct4'},
    {title: '경제학 카페', meaning: '나를 깨우치는 좋은 책입니다.', authorId: 'cl0ez927p0006kgefi9dn2ct4'},
    {title: '또봉이네 치킨', meaning: '이 집의 치킨은 정말 맛있다고 생각해요.', authorId: 'cl0ez927p0006kgefi9dn2ct4'},
    {title: '페이커', meaning: '게임을 정말 잘하는 사람을 칭하는 대명사.', authorId: 'cl0ez927p0006kgefi9dn2ct4'},
    {title: '주전자', meaning: '소리지를때 목소리가 주전자 끓는 소리가 나는 사람을 놀리는 표현이다.', authorId: 'cl0ez927p0006kgefi9dn2ct4'},
    {title: '자바스크립트', meaning: '웹 또는 앱을 만들때 사용되는 프로그래밍 언어. 몇 십 년 전에 개발되었지만 아직까지도 사용중이다.', authorId: 'cl0ez927p0006kgefi9dn2ct4'},
    {title: '기다려봐', meaning: '기다려줘 제발 나를 기다려', authorId: 'cl0ez927p0006kgefi9dn2ct4'},
  ]
})

// insert into word (title, meaning, authorId) values
// ('첫번째 신조어', '장고 부트스트랩이라는 뜻이군요!', 'cl0ez927p0006kgefi9dn2ct4'),
// ('페이커', '페이커는 정말로 대단한 프로게이머라고 생각합니다. 어떠신가요?', 'cl0ez927p0006kgefi9dn2ct4'),
// ('경제학 카페', '나를 깨우치는 좋은 책입니다.', 'cl0ez927p0006kgefi9dn2ct4'),
// ('또봉이네 치킨', '이 집의 치킨은 정말 맛있다고 생각해요.', 'cl0ez927p0006kgefi9dn2ct4'),
// ('페이커', '게임을 정말 잘하는 사람을 칭하는 대명사.', 'cl0ez927p0006kgefi9dn2ct4'),
// ('주전자', '소리지를때 목소리가 주전자 끓는 소리가 나는 사람을 놀리는 표현이다.', 'cl0ez927p0006kgefi9dn2ct4'),
// ('자바스크립트', '웹 또는 앱을 만들때 사용되는 프로그래밍 언어. 몇 십 년 전에 개발되었지만 아직까지도 사용중이다.', 'cl0ez927p0006kgefi9dn2ct4'),
// ('기다려봐', '기다려줘 제발 나를 기다려', 'cl0ez927p0006kgefi9dn2ct4');