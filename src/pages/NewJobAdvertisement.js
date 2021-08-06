import React, { useEffect, useState } from "react";

import { Formik } from "formik";
import { Button, Dropdown } from "semantic-ui-react";
import WorkingTimeService from "../services/workingTimeService";
export default function NewJobAdvertisement() {
  const [workingTime, setWorkingTime] = useState([])

  useEffect(() => {
      let workingTimeService = new WorkingTimeService();

      workingTimeService.getAll().then(result => setWorkingTime(result.data.data));

  }, [])

  
  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          handleSubmit,
          isSubmitting,
          setFieldValue
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="form ui">
            <Dropdown clearable selection 
            options={workingTime.map((x, index) => {
                    return { text: x.workingTimeName, key: index, value: x.id }
                  })}
            onChange={(event, data) =>
                    setFieldValue("workingTime.id", data.value)
                  }
            />

            <Button type="submit" positive>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
