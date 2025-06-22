import { useState } from 'react';
import { ExperienceEntry } from './ExperienceEntry.jsx'
import { ImmutableHeader } from './ImmutableHeader.jsx';
import { OffsetButtonElem } from './OffsetButtonElem';

export function ExperienceCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [entries, setEntries] = useState([
    {
      id: crypto.randomUUID(),
      name: 'bob',
      date: 'today',
      bulletList: [
        {
          bulletId: crypto.randomUUID(),
          text: 'job responsibility 1',
        },
        {
          bulletId: crypto.randomUUID(),
          text: 'job responsibility 2',
        },        
      ],
      draft: null,
    },
  ]);
  const startEditingHandler = () => {
    setIsEditing(true);
    setEntries(current => 
      current.map(entry => ({
          ...entry,
          draft: {
            name: entry.name,
            date: entry.date,
            bulletList: entry.bulletList,
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
        entry.id === id ? {
          ...entry,
          draft: {
            ...entry.draft,
            [key]: value,
          }
        } : entry
      )
    )
  }
  const updateBullet = (entryId, bulletId, newText) => {
    setEntries(current =>
      current.map(entry => {
        if (entry.id !== entryId) return entry;
        return {
          ...entry,
          draft: {
            ...entry.draft,
            bulletList: entry.draft.bulletList.map(bullet => 
              bullet.bulletId === bulletId
              ? {...bullet, text: newText}
              : bullet
            ),
          },
        };
      })
    )
  }
  const newBullet = (entryId) => {
    setEntries(current => 
      current.map(entry => {
        if (entry.id !== entryId) return entry;
        return {
          ...entry,
          draft: {
            ...entry.draft,
            bulletList: [
              ...entry.draft.bulletList,
              {
                bulletId: crypto.randomUUID(),
                text: '',
              }
            ]
          }
        }
      })
    )
  }
  const deleteBullet = (entryId, bulletId) => {
    setEntries(current => 
      current.map(entry => {
        if (entry.id !== entryId) return entry;
        return {
          ...entry,
          draft: {
            ...entry.draft,
            bulletList: entry.draft.bulletList.filter(
              bullet => bullet.bulletId !== bulletId
            )
          }
        }
      }
    ))
  }
  const newExperience = () => {
    setEntries(current => [
        ...current,
        {
          id: crypto.randomUUID(),
          name: 'new experience',
          date: 'date',
          bulletList: [
            {
              bulletId: crypto.randomUUID(),
              text: 'job responsibility 1',
            }, 
          ],
          draft: {
            name: 'name',
            date: 'date',
            bulletList: [
              {
                text: 'job responsibility 1',
              }
            ]
          },
        }
      ])
  }
  const deleteExperience = (id) => {
    setEntries(current => 
      current.filter(entry => entry.id !== id)
    )
  }
  const header = (
    <ImmutableHeader
      sectionTitle='Experience'
      sectionHeaderAlign='left'
      isEditing={isEditing}
      startEditingHandler={startEditingHandler}
      saveHandler={saveHandler}
      discardHandler={discardHandler}
    />
  )
  return (
    <div className ='sectionCard'>
      {header}
      <div className='entryListContainer'>
        {entries.map((entry) => {
          const curElem = <ExperienceEntry
            isEditing={isEditing}
            entry={entry}
            updateDraft={(key, value) => updateDraft(entry.id, key, value)}
            updateBullet={(bulletId, newText) => updateBullet(entry.id, bulletId, newText)}
            newBullet={newBullet}
            deleteBullet={(bulletId) => deleteBullet(entry.id, bulletId)}
          />
          return (
            <div className='entryContainer'>
              { isEditing ? (
                <OffsetButtonElem
                  elem={curElem}
                  offsetButtons={
                    <div className='deleteEntry'
                      onClick={() => deleteExperience(entry.id)}
                    ></div>}
                  sideButtons='left'
                  verticalAlignButtons='top'
                />
                ) : (
                  curElem
                )
              }              
            </div>
          )
        })}
      </div>
      { isEditing && <div
          className='addButton'
          onClick={newExperience}
        ></div>}
    </div>
  )
}