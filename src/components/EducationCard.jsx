import '../styles/EducationCard.css'

export function EducationCard() {
  return <div className="educationCard">
    <h1>Education</h1>
    <div className="splitLineContainer">
      <p>School</p>
      <p>Date</p>
    </div>
    <div className="splitLineContainer">
      <p>Degree</p>
      <p>Location</p>
    </div>
  </div>
}