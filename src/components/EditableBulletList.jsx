import { OffsetButtonElem } from './OffsetButtonElem'
import '../styles/EditableBulletList.css'

export function EditableBulletList({
  bulletList,
  isEditing=true,
}) {
  return (
    <div>
    <ul>
      {bulletList.map((bullet) => {
        const frag = (
          <li>
            <span className='bulletChar'>•</span>
            {bullet}
          </li>
        );
        return (
          isEditing ? (
            <OffsetButtonElem
              elem={frag}
              offsetButtons={<div className='deleteEntry'></div>}
              sideButtons='left'
              verticalAlignButtons='top'
            />
          ) : frag
       )}
      )}
      {isEditing && (
      <li>
        <div className='addButton'></div>
      </li>
      )}
    </ul>
    </div>
  )
}