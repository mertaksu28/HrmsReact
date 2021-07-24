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
              <GridColumn width="8">
                  <EmployeeList />
              </GridColumn>
              <GridColumn>
                  <EmployerList />
              </GridColumn>
        </GridRow>
        
        
      </Grid>
    </div>
  );
}
