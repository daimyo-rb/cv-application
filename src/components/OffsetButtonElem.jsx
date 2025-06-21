import '../styles/OffsetButtonElem.css'

export function OffsetButtonElem({
  elem,
  offsetButtons,
  sideButtons ='right',
}) {
  return (
    <div className={'wrapper'}>
      {elem}
      <div class={`offsetButtons ${sideButtons}`}>
        {offsetButtons}
      </div>
    </div>
  )
}