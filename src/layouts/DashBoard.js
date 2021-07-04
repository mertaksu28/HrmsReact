import React from 'react'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import EmployeeList from '../pages/EmployeeList'
import EmployerList from '../pages/EmployerList'


export default function DashBoard() {
    return (
        <div>
            <JobAdvertisementList/>
            <EmployeeList/>
            <EmployerList/>
        </div>
    )
}
