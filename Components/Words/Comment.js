export default function Comment({ data }) {
  const date = new Date(data.createdAt);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  
  return (
    <div>
      <div>
        <span>{data.author.name}</span>
        <span>{year}/{month}/{day}</span>
      </div>
      <p>{data.content}</p>
    </div>
  )
}