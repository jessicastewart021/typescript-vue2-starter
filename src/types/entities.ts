export type Developer = {
  id: string;
  firstName: string;
  lastName: string;
  age?: number;
  skills: Skills[];
};

export type Team = {
  id: string;
  name: string;
  developers: Developer[];
};

export type FormattedDeveloper = string[];

export type FormattedTeam = {
  id?: string;
  name: string;
  developers?: FormattedDeveloper[];
};

export enum Skills {
  PHP = "PHP",
  JAVASCRIPT = "Javascript",
  VUE = "Vue",
  TYPESCRIPT = "Typescript",
}

export type Fields = {
  key: string;
  label: string;
  sortDirection?: string;
  class?: string;
  formatter?(item: Developer): string;
};

export type DeveloperForm = {
  firstName: string;
  lastName: string;
  age?: number | null;
  skills?: Skills[];
};

export type TeamForm = {
  name: string;
  developers: Developer[];
};
