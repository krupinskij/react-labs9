import { EMPLOYEES_LOADED, EMPLOYEE_ADDED, EMPLOYEES_LOADING, EMPLOYEES_LOADING_ERROR } from './constants';

export const loadEmployees = () => {
  return dispatch => {
    dispatch(employeesLoading())
    return fetch('http://localhost:3004/employees')
    .then((data) => data.json())
    .then(employees => dispatch(employeesLoaded(employees)))
    .catch(error => dispatch(employeesLoadingError(error)))
  }
}

const employeesLoading = () => {
  return {
    type: EMPLOYEES_LOADING
  }
}

const employeesLoaded = (employees) => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
}

const employeesLoadingError = error => {
  return {
    type: EMPLOYEES_LOADING_ERROR,
    payload: {
      error
    }
  }
}

export const employeeAdded = (employee) => {
  return {
    type: EMPLOYEE_ADDED,
    payload: {
      employee
    }
  };
}