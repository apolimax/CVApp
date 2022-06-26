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

export type responsability = string;

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
  myOtherInformations: otherInformation[];
  updateSkills: (newSkill: skill) => void;
  updateTechs: (newTech: technology) => void;
  updateRespExp: (newExp: string, company: string) => void;
  updateOtherInfos: (newInfo: string) => void;
};
