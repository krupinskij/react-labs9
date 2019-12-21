import { 
  EMPLOYEES_LOADING, 
  EMPLOYEES_LOADED, 
  EMPLOYEES_LOADING_ERROR,
  EMPLOYEE_ADDED 
} from './constants';

export const initialState = {
  employees: [],
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADING: {
      return Object.assign({}, state, { loading: true, error: null })
    }
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      return Object.assign({}, state, { employees, loading: false, error: false });
    }
    case EMPLOYEES_LOADING_ERROR: {
      const { error } = action.payload;
      return Object.assign({}, state, { loading: true, error })
    }
    case EMPLOYEE_ADDED: {
      const { employee } = action.payload;
      const newEmployees = [...state.employees, employee];
      return Object.assign({}, state, { employees: newEmployees });
    }
    default:
        return state
  }
}

export default appReducer;