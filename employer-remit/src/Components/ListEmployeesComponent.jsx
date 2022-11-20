import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class ListEmployeesComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      employees: []
    }

  }

  componentDidMount(){
    EmployeeService.getEmployee().then((res)=>{
      this.setState({employees: res.data});
    })
  }
  render() {
    return (
      <div>
        <h2 className='text-center'>List of Employees</h2>
        <div className='row'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Employer Contribution</th>
                <th>Employee Contribution</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
              <tbody>
                {this.state.employees.map(
                  employee=>
                  <tr key={employee.id}>
                    <td>{employee.firstname}</td>
                    <td>{employee.surname}</td>
                    <td>{employee.employerAmt}</td>
                    <td>{employee.employeeAmt}</td>
                    <td>{employee.email}</td>

                  </tr>
                )}
              </tbody>
          </table>
        </div>
        
      </div>
    );
  }
}

export default ListEmployeesComponent;
