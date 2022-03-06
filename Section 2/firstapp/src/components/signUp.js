import {
  CardContent,
  Paper,
  Grid,
  Card,
  TextField,
  Button,
} from "@mui/material";

import { Formik } from "formik";
import api_config from "../config";
import Swal from "sweetalert2";

const Signup = () => {
  const url = api_config.api_url;

  const userForm = {
    name: "",
    username: "",
    password: "",
    age: "",
  };

  const userSubmit = (values) => {
    console.log(values);

    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 409) {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Username already exists",
          });
        } else if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "successful",
            text: "Sign up complete",
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <Paper className="signup-container" margin={5}>
        <Grid container justifyContent="center">
          <Grid item md={3} sm={2}>
            <Card>
              <CardContent>
                <p className="h3 text-center mb-5 mt-5">Signup Here</p>

                <Formik initialValues={userForm} onSubmit={userSubmit}>
                  {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        className="w-100 mt-3"
                        placeholder="Name"
                        label="Name"
                        variant="outlined"
                        id="name"
                        onChange={handleChange}
                        value={values.name}
                        helperText="Enter "
                      />
                      <TextField
                        className="w-100 mt-3"
                        placeholder="Username"
                        label="Username"
                        variant="outlined"
                        id="username"
                        onChange={handleChange}
                        value={values.username}
                      />

                      <TextField
                        className="w-100 mt-3"
                        placeholder="Password"
                        label="Password"
                        variant="outlined"
                        id="password"
                        onChange={handleChange}
                        value={values.password}
                      />

                      <TextField
                        className="w-100 mt-3"
                        placeholder="age"
                        label="Age"
                        id="age"
                        onChange={handleChange}
                        value={values.age}
                        variant="outlined"
                      />

                      <Button
                        color="success"
                        variant="contained"
                        className="w-100 mt-5"
                        type="submit"
                      >
                        Sumbit
                      </Button>
                    </form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} sm={2}></Grid>
        </Grid>
      </Paper>
    </div>


  );
};
export default Signup;
