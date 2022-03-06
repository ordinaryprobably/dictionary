export default function Comment({ data }) {

  return (
    <div>
      <div>
        <span>{data.username}</span>
        <span>{data.date}</span>
      </div>
      <p>{data.content}</p>
    </div>
  )
}