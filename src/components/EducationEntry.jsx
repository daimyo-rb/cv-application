import '../styles/EducationEntry.css'

export function EducationEntry({
  isEditing,
  entry,
  updateDraft,
}) {
  const { schoolName, dateAttended, degree, location, draft } = entry;
  const display = isEditing ? draft : { schoolName, dateAttended, degree, location };
  return (
    isEditing ? (
      <div className="educationEntry">
        <div className="splitLine">
          <input
            value={display.schoolName}
            onChange={(e) => updateDraft('schoolName',e.target.value)}
          />
          <input
            value={display.dateAttended}
            onChange={(e) => updateDraft('dateAttended',e.target.value)}
          />
        </div>
        <div className="splitLine">
          <input
            value={display.degree}
            onChange={(e) => updateDraft('degree',e.target.value)}
          />
          <input
            value={display.location}
            onChange={(e) => updateDraft('location',e.target.value)}
          />
        </div>
      </div>
    ) : (
      <div className="educationEntry">
        <div className="splitLine">
          <p>{schoolName}</p>
          <p>{dateAttended}</p>
        </div>
        <div className="splitLine">
          <p>{degree}</p>
          <p>{location}</p>
        </div>
      </div>
    )
  )  
}