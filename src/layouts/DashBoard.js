import React from "react";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import EmployeeList from "../pages/EmployeeList";
import EmployerList from "../pages/EmployerList";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";

export default function DashBoard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width="4">
            <JobAdvertisementList />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn width="4">
            <EmployeeList />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn width="4">
            <EmployerList />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
