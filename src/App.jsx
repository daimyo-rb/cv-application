import './styles/App.css'
import { PersonalInfoCard } from './components/PersonalInfoCard'
import { EducationCard } from './components/EducationCard'
import { ExperienceCard } from './components/ExperienceCard'

function App() {
  return (
    <>
      <h1 className='pageTitle'>CV Builder</h1>
      <PersonalInfoCard/>
      <EducationCard/>
      <ExperienceCard/>
    </>
  )
}

export default App
