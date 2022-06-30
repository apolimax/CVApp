export type skill = {
  id: string;
  name: string;
  proficiency: string;
};

export type technology = {
  id: string;
  name: string;
  proficiency: string;
};

export type responsability = {
  id: string;
  description: string;
};

export type experience = {
  id: string;
  startDate: string;
  endDate: string | null;
  jobTitle: string;
  company: string;
  responsabilities: responsability[];
};

export type otherInformation = {
  id: string;
  description: string;
};

export type resumeContextType = {
  mySkills: skill[];
  myTechnologies: technology[];
  myExperiences: experience[];
  setMyExperiences: (experiences: experience[]) => void;
  setMyOtherInformations: (otherInfos: otherInformation[]) => void;
  myOtherInformations: otherInformation[];
  updateSkills: (newSkill: skill) => void;
  updateTechs: (newTech: technology) => void;
  addRespExp: (newExp: string, company: string) => void;
};
