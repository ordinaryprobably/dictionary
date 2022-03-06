insert into word (title, meaning, authorId) values
('첫번째 신조어', '장고 부트스트랩이라는 뜻이군요!', 'cl0ez927p0006kgefi9dn2ct4'),
('페이커', '페이커는 정말로 대단한 프로게이머라고 생각합니다. 어떠신가요?', 'cl0ez927p0006kgefi9dn2ct4'),
('경제학 카페', '나를 깨우치는 좋은 책입니다.', 'cl0ez927p0006kgefi9dn2ct4'),
('또봉이네 치킨', '이 집의 치킨은 정말 맛있다고 생각해요.', 'cl0ez927p0006kgefi9dn2ct4'),
('페이커', '게임을 정말 잘하는 사람을 칭하는 대명사.', 'cl0ez927p0006kgefi9dn2ct4'),
('주전자', '소리지를때 목소리가 주전자 끓는 소리가 나는 사람을 놀리는 표현이다.', 'cl0ez927p0006kgefi9dn2ct4'),
('자바스크립트', '웹 또는 앱을 만들때 사용되는 프로그래밍 언어. 몇 십 년 전에 개발되었지만 아직까지도 사용중이다.', 'cl0ez927p0006kgefi9dn2ct4'),
('기다려봐', '기다려줘 제발 나를 기다려', 'cl0ez927p0006kgefi9dn2ct4');


-- create database if not exists dictionary;

-- use dictionary;

-- create table if not exists Users (
--   id int auto_increment primary key,
--   username varchar(30) not null unique,
--   created_at timestamp default now()
-- );

-- create table if not exists Words (
--   id int auto_increment primary key,
--   title varchar(100) not null,
--   meaning varchar(255) not null,
--   user_id int not null,
--   created_at timestamp default now(),
--   foreign key(user_id) references Users(id)
-- );

-- create table if not exists Word_Likes (
--   user_id int not null,
--   word_id int not null,
--   created_at timestamp default now(),
--   foreign key(user_id) references Users(id),
--   foreign key(word_id) references Words(id) on delete cascade,
--   primary key(user_id, word_id)
-- );

-- create table if not exists Comments (
--   id int auto_increment primary key,
--   content varchar(255),
--   created_at timestamp default now(),
--   user_id int not null,
--   word_id int not null,
--   foreign key(user_id) references Users(id),
--   foreign key(word_id) references Words(id) on delete cascade
-- );

-- create table if not exists Saves (
--   user_id int not null,
--   word_id int not null,
--   created_at timestamp default now(),
--   foreign key(user_id) references Users(id) on delete cascade,
--   foreign key(word_id) references Words(id) on delete cascade,
--   primary key(user_id, word_id)
-- );

-- /* Insert Samples */
-- insert into Users (username, password) values ('admin', '0000');
-- insert into Words (title, meaning, user_id)
-- values ('댕댕이', '강아지라는 뜻이다.', 1),
--        ('쩐다', '정말 대단하다는 의미를 가진 우리의 은어', 1),
--        ('페이커', '게임을 정말 잘하는 사람을 칭하는 대명사', 1);
-- insert into Comments (content, user_id, word_id)
-- values ('댕댕이라는 단어가 있군요!', 1, 1),
--        ('페이커는 정말 대단한 롤 프로게이머 입니다.', 1, 3),
--        ('페이커의 유니폼을 입어보고 싶군요!.', 1, 3);
-- insert into word_likes (user_id, word_id)
-- values (1, 3),
--        (1, 2);
-- select title, content from words left join comments on words.id = comments.word_id;