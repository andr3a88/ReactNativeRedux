import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
//import EmployeeReducer from './EmployeeReducer';


// As your app grows more complex, you'll want to split your reducing 
// function into separate functions, each managing independent parts of the 
// state.
// The combineReducers helper function turns an object whose values are 
// different reducing functions into a single reducing function you can pass 
// to createStore.
export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: null
});
