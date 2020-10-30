import React from 'react'
import { connect } from "react-redux";
import './Dashboard.styles.css'
function Dashboard(props) {
    const logout = () => {
        props.history.push('/');
    }

    return (
        <div className="dashboard">
            <header>DashBoard  <button className="send-style" style={{float:'right'}} onClick={logout}>Logout</button> </header>
                <table className="table">
                    <tr><th>ID</th><th>Name</th><th>Age</th><th>Gender</th><th>E-mail</th><th>Phone Num </th></tr>
                    {
                        props.dashboardData.user.map(employee=>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.age}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phoneNo}</td>
                            </tr>
                            )
                    }
                </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        dashboardData: state.DashboardData,
    })
}


export default connect(mapStateToProps)(Dashboard)
