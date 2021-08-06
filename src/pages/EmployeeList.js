import React from 'react'
import { Table } from 'semantic-ui-react'
import { useEffect } from 'react'
import { useState } from 'react'
import EmpleyeeService from '../services/employeeService'


export default function EmployeeList() {

    const [employees, setEmployee] = useState([])
    useEffect(() => {
        let employeeService = new EmpleyeeService()
        employeeService.getAll().then(result=>setEmployee(result.data.data))
    }, [])

    return (
        <div>
            <th>Çalışanlar</th>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Adı</Table.HeaderCell>
                        <Table.HeaderCell>Soyadı</Table.HeaderCell>
                        <Table.HeaderCell>Email Adresi</Table.HeaderCell>                      
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employees.map(employee => (
                            <Table.Row>
                                <Table.Cell>{employee.firstName}</Table.Cell>
                                <Table.Cell>{employee.lastName}</Table.Cell>
                                <Table.Cell>{employee.email}</Table.Cell>
                            </Table.Row>
                        )) 
                    }

                </Table.Body>
            </Table>
        </div>
    )
}
