import classes from '../../styles/Header.module.css'

export default function Header() {
  return (
    <div className={classes.Header}>
      <h1 className={classes.greeting}>안녕,</h1>
      <h1 className={classes.nickname}>Ordinary Probably</h1>
      <hr className={classes.hr}/>
    </div>
  )
}