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

    let companyName;

    if (currentCompany) {
      companyName = currentCompany.company;
    }

    if (companyName === "codeminer42") {
      const codeminer42 = myExperiences.find(
        (experienceItem) => experienceItem.company === "codeminer42"
      );
      codeminer42?.responsabilities.push(newExp);

      const laisOnly = myExperiences.filter(
        (experienceItem) => experienceItem.company !== "codeminer42"
      );

      if (codeminer42) {
        const newExps = [codeminer42, ...laisOnly];
        setMyExperiences(newExps);
      }
    } else {
      const lais = myExperiences.find(
        (experienceItem) => experienceItem.company === "LAIS/HUOL"
      );
      lais?.responsabilities.push(newExp);

      const codeminerOnly = myExperiences.filter(
        (experienceItem) => experienceItem.company !== "LAIS/HUOL"
      );

      if (lais) {
        const newExps = [...codeminerOnly, lais];
        setMyExperiences(newExps);
      }
    }
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
