import { EMPLOYEES_LOADED, EMPLOYEE_ADDED } from './constants';

export const employeesLoaded = (employees) => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
}

export const employeeAdded = (employee) => {
  return {
    type: EMPLOYEE_ADDED,
    payload: {
      employee
    }
  };
}