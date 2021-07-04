import React from 'react'
import { Table } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobadvertisament'
import { useEffect } from 'react'
import { useState } from 'react'


export default function JobAdvertisementList() {
    const [jobadvertisements, setJobAdvertisement] = useState([])
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getAll().then(result => setJobAdvertisement(result.data.data))

    }, [])
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Minumum Maaş</Table.HeaderCell>
                        <Table.HeaderCell>Maximum Maaş</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobadvertisements.map(jobadvertisement => (
                            <Table.Row>
                                <Table.Cell>{jobadvertisement.description}</Table.Cell>
                                <Table.Cell>{jobadvertisement.minSalary}</Table.Cell>
                                <Table.Cell >{jobadvertisement.maxSalary}</Table.Cell>
                            </Table.Row>
                        )) 
                    }

                </Table.Body>
            </Table>
        </div>
    )
}
