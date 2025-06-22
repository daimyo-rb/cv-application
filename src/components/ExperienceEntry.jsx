import { EditableBulletList } from "./EditableBulletList"

export function ExperienceEntry({
  isEditing,
  entry,
  updateDraft,
  updateBullet,
  newBullet,
  deleteBullet,
}) {
  const { name, date, bulletList, draft } = entry;
  const display = isEditing ? draft : { name, date, bulletList, draft };
  return (
    isEditing ? (
      <div className='experienceEntry'>
        <div>
          <div className='splitLine'>
            <input
              value={display.name}
              onChange={(e) => updateDraft('name',e.target.value)}
            />
            <input
              value={display.date}
              onChange={(e) => updateDraft('date',e.target.value)}
            />
          </div>
          <EditableBulletList
            entry={entry}
            updateBullet={updateBullet}
            isEditing={isEditing}
            newBullet={newBullet}
            deleteBullet={deleteBullet}
          />
        </div>
      </div>      
    ) : (
      <div className='experienceEntry'>
        <div>
          <div className='splitLine'>
            <p>{name}</p>
            <p>{date}</p>
          </div>
          <EditableBulletList
            entry={entry}
            updateBullet={updateBullet}
            isEditing={isEditing}
            newBullet={newBullet}
          />
        </div>
      </div>
    )
  )
}