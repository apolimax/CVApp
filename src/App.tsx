import OtherInformations from "./components/OtherInformations";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Profile from "./components/Profile";
import ProfilePicture from "./components/ProfilePictute";
import ResumeHeader from "./components/ResumeHeader";
import Skills from "./components/Skills";
import { useResumeContext } from "./context/context";

function App() {
  const { mySkills, myTechnologies, myExperiences, myOtherInformations } =
    useResumeContext();

  return (
    <main className="container">
      {/* gray space */}
      <div className="profile">
        <ProfilePicture />
        <Profile />
        <Skills skills={mySkills} technologies={myTechnologies} />
      </div>
      {/* blank space */}
      <div className="experiences">
        <ResumeHeader />
        <div className="experiences__info">
          <ProfessionalExperience experiences={myExperiences} />
          <OtherInformations otherInformations={myOtherInformations} />
        </div>
      </div>
    </main>
  );
}

export default App;
