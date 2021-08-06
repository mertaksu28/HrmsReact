import React from "react";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import EmployeeList from "../pages/EmployeeList";
import EmployerList from "../pages/EmployerList";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import NewJobAdvertisement from "../pages/NewJobAdvertisement";
import { Route, Router, Switch } from "react-router";

export default function DashBoard() {
  return (
    <div>
        <Route exact path="/is-ilanlari" component={JobAdvertisementList}/>
        <Route exact path="/employerlist" component={EmployerList}/>
        <Route exact path="/employeelist" component={EmployeeList} />
        <Route exact path="/yeni-is-ilani" component={NewJobAdvertisement} />
    </div>
  );
}
/*
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
        <GridRow>
          <GridColumn width="4">
            <NewJobAdvertisement />
          </GridColumn>
        </GridRow>
      </Grid>
*/