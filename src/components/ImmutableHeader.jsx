import { OffsetButtonElem } from './OffsetButtonElem';

export function ImmutableHeader({
  sectionTitle,
  sectionHeaderAlign,
  isEditing,
  startEditingHandler,
  saveHandler,
  discardHandler,
}) {
  let editCardButtons;
  if (isEditing) {
    editCardButtons = (
      <div className='saveDiscardEditButtons'>
        <div
          className='saveChangesButton'
          onClick={saveHandler}
        ></div>
        <div
          className='discardChangesButton'
          onClick={discardHandler}
        ></div>
      </div>
    )
  } else {
    editCardButtons = (
      <div
        className='editCardButton'
        onClick={startEditingHandler}
      ></div>
    )
  }
  return (
    <div className={`sectionHeaderWrapper ${sectionHeaderAlign}`}>
      <OffsetButtonElem
        elem={<h1 className='titleText'>{sectionTitle}</h1>}
        offsetButtons={editCardButtons}
        sideButtons='right'
      />
    </div>
  )
}