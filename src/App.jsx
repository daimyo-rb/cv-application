import { useState } from 'react'
import './styles/App.css'
import { PersonalInfoCard } from './components/PersonalInfoCard'
import { EducationCard } from './components/EducationCard'

function App() {
  return (
    <>
      <h1>CV Builder</h1>
      <PersonalInfoCard/>
      <EducationCard/>
    </>
  )
}

export default App
