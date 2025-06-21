import '../styles/OffsetButtonElem.css'

export function OffsetButtonElem({
  elem,
  offsetButtons,
  sideButtons ='right',
  verticalAlignButtons = 'verticalCenter',
}) {
  return (
    <div className={'wrapper'}>
      {elem}
      <div className={
        `offsetButtons ${sideButtons} ${verticalAlignButtons}`
      }>
        {offsetButtons}
      </div>
    </div>
  )
}