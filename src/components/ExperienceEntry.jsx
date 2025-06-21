import { EditableBulletList } from "./EditableBulletList"

export function ExperienceEntry({
  name,
  date,
  bulletList,
}) {
  return (
    <div className='experienceEntry'>
      <div>
        <div className='splitLine'>
          <p>{name}</p>
          <p>{date}</p>
        </div>
        <EditableBulletList bulletList={bulletList}/>
      </div>
    </div>
  )
}