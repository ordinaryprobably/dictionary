create database if not exists dictionary;

use dictionary;

create table if not exists Users (
  id int auto_increment primary key,
  username varchar(30) not null unique,
  created_at timestamp default now()
);

create table if not exists Words (
  id int auto_increment primary key,
  title varchar(100) not null,
  meaning varchar(255) not null,
  user_id int not null,
  created_at timestamp default now(),
  foreign key(user_id) references Users(id)
);

create table if not exists Word_Likes (
  user_id int not null,
  word_id int not null,
  created_at timestamp default now(),
  foreign key(user_id) references Users(id),
  foreign key(word_id) references Words(id) on delete cascade,
  primary key(user_id, word_id)
);

create table if not exists Comments (
  id int auto_increment primary key,
  content varchar(255),
  created_at timestamp default now(),
  user_id int not null,
  word_id int not null,
  foreign key(user_id) references Users(id),
  foreign key(word_id) references Words(id) on delete cascade
);

create table if not exists Saves (
  user_id int not null,
  word_id int not null,
  created_at timestamp default now(),
  foreign key(user_id) references Users(id) on delete cascade,
  foreign key(word_id) references Words(id) on delete cascade,
  primary key(user_id, word_id)
);

/* Insert Samples */
insert into Users (username, password) values ('admin', '0000');
insert into Words (title, meaning, user_id)
values ('댕댕이', '강아지라는 뜻이다.', 1),
       ('쩐다', '정말 대단하다는 의미를 가진 우리의 은어', 1),
       ('페이커', '게임을 정말 잘하는 사람을 칭하는 대명사', 1);
insert into Comments (content, user_id, word_id)
values ('댕댕이라는 단어가 있군요!', 1, 1),
       ('페이커는 정말 대단한 롤 프로게이머 입니다.', 1, 3),
       ('페이커의 유니폼을 입어보고 싶군요!.', 1, 3);
insert into word_likes (user_id, word_id)
values (1, 3),
       (1, 2);
select title, content from words left join comments on words.id = comments.word_id;
