import { createContext, ReactNode, useState, useContext } from "react";
import {
  experience,
  otherInformation,
  responsability,
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
    company: "Codeminer42",
    responsabilities: [
      {
        id: "1",
        description:
          "Development of user interfaces for a variety of clients across Brazil and the US",
      },
      { id: "2", description: "Attend and preparing of workshops" },
    ],
  },
  {
    id: "2",
    startDate: "2020-2-01",
    endDate: "2021-7-30",
    jobTitle: "Desenvolvedor Frontend",
    company: "LAIS/HUOL",
    responsabilities: [
      {
        id: "1",
        description:
          "Development of user interfaces for healthcare web applications",
      },
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

  const addRespExp = (newExp: string, company: string) => {
    const companyItemArray = myExperiences.filter(
      (companyItem) => companyItem.company === company
    );

    const [companyItemObject] = companyItemArray;

    const { responsabilities } = companyItemObject;

    const nextRespId = responsabilities.length + 1;

    const newResponsabilities: responsability[] = [
      ...responsabilities,
      { id: `${nextRespId}`, description: newExp },
    ];

    const newExperiences: experience[] = [];

    myExperiences.forEach((experience) => {
      if (experience.company === company) {
        newExperiences.push({
          ...experience,
          responsabilities: newResponsabilities,
        });
      } else {
        newExperiences.push(experience);
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
        setMyExperiences,
        myOtherInformations,
        setMyOtherInformations,
        updateSkills,
        updateTechs,
        addRespExp,
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
    setMyExperiences,
    myTechnologies,
    myOtherInformations,
    setMyOtherInformations,
    addRespExp,
    updateSkills,
    updateTechs,
  } = useContext(ResumeContext);

  return {
    mySkills,
    myExperiences,
    setMyExperiences,
    myTechnologies,
    myOtherInformations,
    setMyOtherInformations,
    addRespExp,
    updateSkills,
    updateTechs,
  };
}
