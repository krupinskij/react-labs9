import { 
  EMPLOYEES_LOADED, 
  EMPLOYEES_LOADING, 
  EMPLOYEES_LOADING_ERROR,

  EMPLOYEE_ADDED,

  USER_LOGGED, 
  USER_LOGGING, 
  USER_LOGGING_ERROR
} from './constants';

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

export const logUser = (login) => {
  return dispatch => {
    dispatch(userLogging())
    return fetch('http://localhost:3004/users')
    .then((data) => data.json())
    .then(users => dispatch(userLogged(users, login)))
    .catch(error => dispatch(userLoggingError(error)))
  }
}

const userLogging = () => {
  return {
    type: USER_LOGGING
  }
}

const userLogged = (users, login) => {
  return {
    type: USER_LOGGED,
    payload: {
      users,
      login
    }
  };
}

const userLoggingError = error => {
  return {
    type: USER_LOGGING_ERROR,
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