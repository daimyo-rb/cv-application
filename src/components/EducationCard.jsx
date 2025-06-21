import { SectionCard } from './SectionCard.jsx'
import { EducationEntry } from './EducationEntry.jsx';
import '../styles/EducationCard.css'

export function EducationCard() {
  const entries = [
    <EducationEntry
      schoolName='school'
      dateAttended='today'
      degree='science'
      location='place'
    />,
  ];
  return (
    <SectionCard
      sectionTitle='Education'
      entryList={entries}
    />
  )
}