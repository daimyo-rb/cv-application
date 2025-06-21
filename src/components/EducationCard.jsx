import { useState } from 'react';
import { EducationEntry } from './EducationEntry.jsx';
import { ImmutableHeader } from './ImmutableHeader.jsx';
import { OffsetButtonElem } from './OffsetButtonElem';

export function EducationCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [entries, setEntries] = useState([
    {
      id: crypto.randomUUID(),
      schoolName: 'school',
      dateAttended: 'date',
      degree: 'degree',
      location: 'location',
      draft: null,
    }  
  ]);
  const startEditingHandler = () => {
    setIsEditing(true);
    setEntries(current => 
      current.map(entry => ({
        ...entry,
        draft: {
          schoolName: entry.schoolName,
          dateAttended: entry.dateAttended,
          degree: entry.degree,
          location: entry.location,
        }
      }))
    )
  }
  const saveHandler = () => {
    setIsEditing(false);
    setEntries(current => 
      current.map(entry => ({
        ...entry,
        ...entry.draft,
        draft: null,
      }))
    )
  }
  const discardHandler = () => {
    setIsEditing(false);
    setEntries(current => 
      current.map(entry => ({
        ...entry,
        draft: null,
      }))
    )
  }
  const updateDraft = (id, key, value) => {
    setEntries(current =>
      current.map(entry =>
        entry.id === id
          ? {
            ...entry,
            draft: {
              ...entry.draft,
              [key]: value,
            },
          } : entry
      )
    )
  }
  const newEntry = () => {
    setEntries(current => [
      ...current,
      {
        id: crypto.randomUUID(),
        schoolName: 'school',
        dateAttended: 'date',
        degree: 'degree',
        location: 'location',
        draft: {
          schoolName: 'school',
          dateAttended: 'date',
          degree: 'degree',
          location: 'location',
        }
      }
    ]
  )}
  const deleteEntry = (deleteId) => {
    setEntries(current =>
      current.filter(entry => 
        entry.id !== deleteId
      )
    )
  }
  const entryElems = isEditing ? (
    <>
      {entries.map((entry) => {
        return (
          <div className='entryContainer' key={entry.id}>
            <OffsetButtonElem
              elem={
                <EducationEntry
                  isEditing={isEditing}
                  entry={entry}
                  updateDraft={(key,value) => updateDraft(entry.id, key, value)}
                />
              }
              offsetButtons={
                <div
                  className='deleteEntry'
                  onClick={()=>deleteEntry(entry.id)}
                ></div>
              }
              sideButtons='left'
              verticalAlignButtons='top'
            />             
          </div>
        );
      })}
    </>
    ) : (
      <>  
        {entries.map((entry) => {
          return (
            <div className='entryContainer' key={entry.id}>
              <EducationEntry
                isEditing={isEditing}
                entry={entry}
                updateDraft={(key,value) => updateDraft(entry.id, key, value)}
              />
            </div>
          )
        })}
      </>
    );

  return (
    <div className ='sectionCard'>
      <ImmutableHeader
          sectionTitle='Education'
          sectionHeaderAlign='left'
          isEditing={isEditing}
          startEditingHandler={startEditingHandler}
          saveHandler={saveHandler}
          discardHandler={discardHandler}
        />
      <div className='entryListContainer'>
        {entryElems}
      </div>
      { isEditing && <div
        className='addButton'
        onClick={newEntry}
      ></div>}
    </div>
  )
}