import { OffsetButtonElem } from './OffsetButtonElem'
import '../styles/EditableBulletList.css'

export function EditableBulletList({
  entry,
  isEditing,
  updateBullet,
  newBullet,
  deleteBullet,
}) {
  const { bulletList, draft } = entry;
  const displayBullets = isEditing ? draft.bulletList : bulletList;
  return (
    <div>
      <ul>
        {displayBullets.map((bullet) => {
          const frag = (
            <li key={bullet.bulletId}>
              {isEditing ? 
                <input value={bullet.text}
                  onChange={(e) => updateBullet(bullet.bulletId, e.target.value)}
                /> : <>
  <span className='bulletChar'>•</span>
                  {bullet.text}
                </>
              }
            </li>
          );
          return (
            isEditing ? (
              <OffsetButtonElem
                elem={frag}
                offsetButtons={
                  <div className='deleteEntry'
                    onClick={() => deleteBullet(bullet.bulletId)}
                  ></div>}
                sideButtons='left'
                verticalAlignButtons='top'
              />
            ) : frag
        )}
        )}
        {isEditing && (
        <li>
          <div
            className='addButton'
            onClick={() => newBullet(entry.id)}
          ></div>
        </li>
        )}
      </ul>
    </div>
  )
}