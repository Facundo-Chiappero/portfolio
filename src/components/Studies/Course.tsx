interface Props {
  course: {
    title: string
    name: string
    time: string
    description: string
  }
}

export default function Course({ course }: Props) {
  const { title, name, time, description } = course

  return (
    <li className="job-li">
      <div className="job-container">
        <div className="main-info">
          <h3>{title}</h3>
          <h4>{name}</h4>
          <time>{time}</time>
        </div>
        <p>{description}</p>
      </div>
    </li>
  )
}
