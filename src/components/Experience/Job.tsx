import './jobStyles.css'

interface Props {
  job: {
    title: string
    name: string
    time: string
    tasks: string
  }
}

export default function Job({ job }: Props) {
  const { title, name, time, tasks } = job

  return (
    <li className="job-li">
      <div className="job-container">
        <div className="main-info">
          <h3>{title}</h3>
          <h4>{name}</h4>
          <time>{time}</time>
        </div>
        <p>{tasks}</p>
      </div>
    </li>
  )
}
