import { 
  EMPLOYEES_LOADED, 
  EMPLOYEES_LOADING, 
  EMPLOYEES_LOADING_ERROR,

  EMPLOYEE_ADDED,

  USER_LOGGED, 
  USER_LOGGING, 
  USER_LOGGING_ERROR
} from './constants';

export const initialState = {
  employees: null,
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADING: {
      return Object.assign({}, state, { employees: null, loading: true, error: null })
    }
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      return Object.assign({}, state, { employees, loading: false, error: false });
    }
    case EMPLOYEES_LOADING_ERROR: {
      const { error } = action.payload;
      return Object.assign({}, state, { loading: false, error })
    }
    
    case EMPLOYEE_ADDED: {
      const { employee } = action.payload;
      const newEmployees = [...state.employees, employee];
      return Object.assign({}, state, { employees: newEmployees });
    }

    case USER_LOGGING: {
      return Object.assign({}, state, { logging: true, error: null })
    }
    case USER_LOGGED: {
      const { users, login } = action.payload;
      const user = users.filter(user => user.username === login)[0];
      const logged = user !== undefined;
      return Object.assign({}, state, { user, logged, logging: false, error: false });
    }
    case USER_LOGGING_ERROR: {
      const { error } = action.payload;
      return Object.assign({}, state, { logging: false, error })
    }

    default:
        return state
  }
}

export default appReducer;