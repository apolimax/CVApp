import { createContext, ReactNode, useState, useContext } from "react";
import {
  experience,
  otherInformation,
  resumeContextType,
  skill,
  technology,
} from "../types";

const ResumeContext = createContext({} as resumeContextType);

type ResumeContextProviderProps = {
  children: ReactNode;
};

const skills = [
  { id: "1", name: "PT-BR", proficiency: "100" },
  { id: "2", name: "EN", proficiency: "85" },
  { id: "3", name: "FR", proficiency: "80" },
];

const technologies = [
  { id: "1", name: "JS", proficiency: "70" },
  { id: "2", name: "HTML", proficiency: "80" },
  { id: "3", name: "CSS", proficiency: "75" },
];

const experiences = [
  {
    id: "1",
    startDate: "2022-4-01",
    endDate: null,
    jobTitle: "Desenvolvedor Frontend",
    company: "codeminer42",
    responsabilities: [
      "Development of user interfaces for a variety of clients across Brazil and the US",
      "Attend and preparing of workshops",
    ],
  },
  {
    id: "2",
    startDate: "2020-2-01",
    endDate: "2021-7-30",
    jobTitle: "Desenvolvedor Frontend",
    company: "LAIS/HUOL",
    responsabilities: [
      "Development of user interfaces for healthcare web applications",
    ],
  },
];

const otherInformations = [
  {
    id: "1",
    description:
      "Computer program registration issued by the National Institute of Industrial Property",
  },
  { id: "2", description: "Has studied engineering in France during one year" },
  { id: "3", description: "Former mechanical engineer" },
];

export default function ResumeContextProvider({
  children,
}: ResumeContextProviderProps) {
  const [mySkills, setMySkills] = useState<skill[]>(skills);
  const [myTechnologies, setMyTechnologies] =
    useState<technology[]>(technologies);
  const [myExperiences, setMyExperiences] = useState<experience[]>(experiences);
  const [myOtherInformations, setMyOtherInformations] =
    useState<otherInformation[]>(otherInformations);

  const updateSkills = (newSkill: skill) => {
    setMySkills([...mySkills, newSkill]);
  };

  const updateTechs = (newTech: technology) => {
    setMyTechnologies([...myTechnologies, newTech]);
  };

  const updateRespExp = (newExp: string, company: string) => {
    const currentCompany = myExperiences.find(
      (item) => item.company === company
    );

    const newExperiences = [...myExperiences];

    newExperiences.forEach((experience) => {
      if (experience.company === currentCompany?.company) {
        experience.responsabilities.push(newExp);
      }
    });

    setMyExperiences(newExperiences);
  };

  return (
    <ResumeContext.Provider
      value={{
        mySkills,
        myTechnologies,
        myExperiences,
        myOtherInformations,
        updateSkills,
        updateTechs,
        updateRespExp,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResumeContext() {
  const {
    mySkills,
    myExperiences,
    myTechnologies,
    myOtherInformations,
    updateRespExp,
    updateSkills,
    updateTechs,
  } = useContext(ResumeContext);

  return {
    mySkills,
    myExperiences,
    myTechnologies,
    myOtherInformations,
    updateRespExp,
    updateSkills,
    updateTechs,
  };
}
