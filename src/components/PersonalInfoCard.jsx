import '../styles/PersonalInfoCard.css'
export function PersonalInfoCard({
  name = "First Last",
  email = "email",
  phone = "phone",
}) {
  return (
    <div className="personalInfoCard">
      <h2>{name}</h2>
      <div className="personalContactInfo">
        <p>{email}</p>
        <p> | </p>
        <p>{phone}</p>
      </div>
    </div>
  );
}