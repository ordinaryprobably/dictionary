import Link from 'next/link';
import classes from '../../styles/WordSummary.module.css';

export default function WordSummary({ word }) {
  return (
    <>
      <div className={classes.WordSummary}>
        <div className={classes.votes}>
          <img src='../images/arrow-up.svg' />
          <span>{0}</span>
          <img src='../images/arrow-down.svg' />
        </div>
        <div className={classes.details}>
          <div className={classes.details_head}>
            <Link href={`/word/${word.title}/${word.id}`}>
              <span>{word.title}</span>
            </Link>
            <div>댓글 {0}개</div>
            <div className='created_at'>{word.created_at}</div>
          </div>
          <div className={classes.details_body}>
            <p>{word.meaning}</p>
            <div className={classes.details_reports}>
              <span>이 해석을 신고하기</span>
              <span>번역하기</span>
              <span>저장하기</span>
            </div>
          </div>
        </div>
      </div>
      <hr className={classes.hr}/>
    </>
  )
}