export type Employees = {
  id: number;
  name: string;
  document: string;
  phone: string;
  birthDate: Date;
  salary: string;
  createdAt: Date;
};

export type EmployeePage = {
  content?: Employees[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  size?: number;
  number: number;
  first: boolean;
  numberOfElements?: number;
  empty?: boolean;
};
