import { useState } from 'react'
import { OffsetButtonElem } from './OffsetButtonElem';
import '../styles/SectionCard.css'

export function SectionCard( {
  sectionTitle,
  sectionHeaderAlign='left',
  entryList,
  canAddEntries=true,
  canRemoveEntries=true,
}) {
  const [isEditing, setIsEditing] = useState(true);
  let editCardButtons;
  if (isEditing) {
    editCardButtons = (
      <div className='saveDiscardEditButtons'>
        <div className='saveChangesButton'></div>
        <div className='discardChangesButton'></div>
      </div>
      )
  } else {
    editCardButtons = <div className='editCardButton'></div>
  }
  return (
    <div className ='sectionCard'>
      <div className={`sectionHeaderWrapper ${sectionHeaderAlign}`}>
        <OffsetButtonElem
          elem={<h1 className='titleText'>{sectionTitle}</h1>}
          offsetButtons={editCardButtons}
          sideButtons='right'
        />
      </div>
      <div className='entryListContainer'>
        {entryList.map((entry) => {
          return (
            <div className='entryContainer'>
              { isEditing && canRemoveEntries ? (
                <OffsetButtonElem
                  elem={entry}
                  offsetButtons={<div className='deleteEntry'></div>}
                  sideButtons='left'
                  verticalAlignButtons='top'
                />
                ) : entry
              }              
            </div>
          )
        })}
      </div>
      { isEditing && canAddEntries && <div className='addButton'></div>}
    </div>
  )
}