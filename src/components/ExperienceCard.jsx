import { SectionCard } from './SectionCard.jsx'
import { ExperienceEntry } from './ExperienceEntry.jsx'
import '../styles/ExperienceCard.css'

export function ExperienceCard() {
  const entries = [
    <ExperienceEntry
      name='bob'
      date='today'
      bulletList={[1,2]}
    />,
  ]
  return (
    <SectionCard
      sectionTitle='Experience'
      entryList={entries}
    />
  )
}