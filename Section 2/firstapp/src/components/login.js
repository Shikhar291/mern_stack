import {
  CardContent,
  Paper,
  Grid,
  Card,
  TextField,
  Button,
} from "@mui/material";

import {UserContext} from "../userContext";
import { useContext } from "react";

import { useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

import { Formik } from "formik";
import api_config from "../config";


const Login = () => {

  const navigate=useNavigate();
  const {loggedin,setLoggedin , setCurrentUser}=useContext(UserContext);
  const url = api_config.api_url;

  const loginForm = {
    username:"",
    password:"",
  };

  const loginSubmit = (values) => {


    console.log(values);
    
    fetch(url + "/user/checklogin", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
        console.log(res.status);
        if(res.status===200)
        {
          setLoggedin(true);
          Swal.fire({
            icon:'success',
            title:'Success',
            text:'Loggedin Successfully',
          });
          navigate("/home");
          
          
        }
        else
        if(res.status===300)
        {
          Swal.fire({
            icon:'error',
            title:'Failed',
            text:'Loggedin failed',
          });
        }
      })
      .then((data) => {
        setCurrentUser(data);
        sessionStorage.setItem('user',JSON.stringify(data));
        console.log(data);
      });
  };

  return (
    <div>
      <Paper className="login-container">
        <Grid container justifyContent="center" marginTop={5}>
          <Grid item md={3} sm={2}>
            <Card>
              <CardContent>
                <p className="h3 text-center mb-5 mt-5">Login Here</p>

                <Formik initialValues={loginForm} onSubmit={loginSubmit}>
                  {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
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
                        type="password"
                        variant="outlined"
                        id="password"
                        onChange={handleChange}
                        value={values.password}
                      />

                      <Button
                        color="success"
                        variant="contained"
                        className="w-100 mt-5"
                        type="submit"
                      >
                        Signin to Continue
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
export default Login;
