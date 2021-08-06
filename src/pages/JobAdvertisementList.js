import React from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobadvertisament";
import { useEffect } from "react";
import { useState } from "react";

export default function JobAdvertisementList() {
  const [jobadvertisements, setJobAdvertisement] = useState([]);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAll()
      .then((result) => setJobAdvertisement(result.data.data));
  }, [jobadvertisements]);

  const handleConfirmedClick =(id)=> {
      
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.confirmed(id).then(result => console.log(result.data))
  }

  return (
    <div>
      <h2>İş ilanları</h2>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Minumum Maaş</Table.HeaderCell>
            <Table.HeaderCell>Maximum Maaş</Table.HeaderCell>
            <Table.HeaderCell>Onaylı mı?</Table.HeaderCell>
            <Table.HeaderCell>Detay</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobadvertisements.map((jobadvertisement) => (
            <Table.Row>
              <Table.Cell>{jobadvertisement.description}</Table.Cell>
              <Table.Cell>{jobadvertisement.minSalary}</Table.Cell>
              <Table.Cell>{jobadvertisement.maxSalary}</Table.Cell>
              <Table.Cell>
                <Icon
                  name={
                    jobadvertisement.confirmed
                      ? "arrow alternate circle down green"
                      : "close red big"
                  }
                />
              </Table.Cell>

              <Table.Cell>
                <Button.Group>
                  <Button positive onClick={() => handleConfirmedClick(jobadvertisement.id)}>Onayla</Button>
                  <Button negative>Sil</Button>
                </Button.Group>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
