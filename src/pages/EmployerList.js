import React from 'react'
import { Table } from 'semantic-ui-react'
import { useEffect } from 'react'
import { useState } from 'react'
import EmployerService from '../services/employerService'

export default function EmployerList() {

    const [employers, setEmployer] = useState([])
    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getAll().then(result=>setEmployer(result.data.data))
    }, [])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <th>İş Veren</th>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                        <Table.HeaderCell>Web Adresi</Table.HeaderCell>                      
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map(employer => (
                            <Table.Row>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                                <Table.Cell>{employer.webAddress}</Table.Cell>
                            </Table.Row>
                        )) 
                    }

                </Table.Body>
            </Table>
        </div>
    )
}
