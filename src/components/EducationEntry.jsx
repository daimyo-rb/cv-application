import '../styles/EducationEntry.css'

export function EducationEntry({
  schoolName,
  dateAttended,
  degree,
  location,
}) {
  return (
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
}