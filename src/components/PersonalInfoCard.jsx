import { SectionCard } from './SectionCard';
import '../styles/PersonalInfoCard.css'

export function PersonalInfoCard({
  name = "First Last",
  email = "email",
  phone = "phone",
}) {
  const entryList = [
    <div className="personalInfoCard">
      <div className="personalContactInfo">
        <p>{email}</p>
        <p> | </p>
        <p>{phone}</p>
      </div>
    </div>,
  ]
  return (
    <SectionCard
      sectionTitle={name}
      sectionHeaderAlign='center'
      entryList={entryList}
      canAddEntries={false}
      canRemoveEntries={false}
    />
  );
}