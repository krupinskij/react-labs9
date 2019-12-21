import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { loadEmployees } from '../redux/actions'

const EmployeeLine = ({ employee }) => <div>{employee.name} ({employee.age} yrs old): {employee.company}</div>

class PageEmployeesList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if(!this.props.user) {
      this.props.history.push("/")
    }
  }

  componentDidMount() {
    if(this.props.employees) return;
    
    this.props.loadEmployees();

    // this.setState({ isLoading: true });
    // fetch('http://localhost:3004/employees')
    // .then((data) => data.json())
    // // Without Redux
    // // .then((employees) => this.setState({ employees, isLoading: false }));
    // // With Redux
    // .then((employees) => {
    //   this.props.employeesLoaded(employees);
    //   this.setState({ isLoading: false });
    // });
  }

  render() {
    const { isLoading, employees, user } = this.props;

    if(isLoading) {
      return <p>Loading ...</p>
    }
    
    return (
      <div>
        <h1>Employees List:</h1>

        { user && <p style={ fullNameStyle }>{ user.full_name } </p> }
        
        {employees && employees.map((employee => <EmployeeLine key={employee._id} employee={employee} />))}
        <Link to="/new">
          <button>Create employee</button>
        </Link>
      </div>
    );
  }
}

const fullNameStyle = {
  position: 'absolute',
  right: '5%',
  top: '5%',
  fontSize: '200%'
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    employees: state.employees,
    user: state.user,
    isLoading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadEmployees: () => dispatch(loadEmployees())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PageEmployeesList))