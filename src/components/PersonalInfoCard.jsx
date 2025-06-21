import { useState } from 'react';
import { OffsetButtonElem } from './OffsetButtonElem';
import '../styles/PersonalInfoCard.css'

export function PersonalInfoCard({
  initialName = "First Last",
  initialEmail = "email",
  initialPhone = "phone",
}) {
  const [isEditing, setIsEditing] = useState(false);
  // saved
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhone);
  // editable
  const [formName, setFormName] = useState(initialName);
  const [formEmail, setFormEmail] = useState(initialEmail);
  const [formPhone, setFormPhone] = useState(initialPhone);
  function handleSave() {
    setName(formName);
    setEmail(formEmail);
    setPhone(formPhone);
    setIsEditing(false);
  }
  function handleDiscard() {
    setFormName(name);
    setFormEmail(email);
    setFormPhone(phone);
    setIsEditing(false);
  }
  let editCardButtons;
  if (isEditing) {
    editCardButtons = (
      <div className='saveDiscardEditButtons'>
        <div
          className='saveChangesButton'
          onClick={handleSave}
        ></div>
        <div
          className='discardChangesButton'
          onClick={handleDiscard}
        ></div>
      </div>
    )
  } else {
    editCardButtons = (
      <div
        className='editCardButton'
        onClick={() => setIsEditing(true)}
      ></div>
    )
  }
  const header = (
    <div className={`sectionHeaderWrapper ${'center'}`}>
      <OffsetButtonElem
        elem={
          isEditing ? (
            <input
              className='titleText'
              value={formName}
              onChange={(e)=>setFormName(e.target.value)}
            />
          ) : (
            <h1 className='titleText'>{formName}</h1>
          )
        }
        offsetButtons={editCardButtons}
        sideButtons='right'
      />
    </div>
  )
  const personalInfo = (
    <div className='entryContainer'>
      <div className="personalInfoCard">
        <div className="personalContactInfo">
          {isEditing ? (
            <input
              value={formEmail}
              onChange={(e)=>setFormEmail(e.target.value)}
            />
          ) : <p>{email}</p>
          }
          <p> | </p>
          {isEditing ? (
            <input
              value={formPhone}
              onChange={(e)=>setFormPhone(e.target.value)}
            />
          )  : <p>{phone}</p>
          }
        </div>
      </div>
    </div>
  )
  return (
    <div className ='sectionCard'>
      {header}
      <div className='entryListContainer'>
        {personalInfo}
      </div>
    </div>
  );
}