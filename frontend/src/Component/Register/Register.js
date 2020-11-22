import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { makeRequest } from "../../Service/requestCall";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { Copyright, useStyles } from "../Authentication/Authentication";
/**
 * Created by Piyush on Sun Nov 22 2020 20:12:37 GMT+0530 (India Standard Time)
 * Register Component
 * Updated by Piyush on Sun Nov 22 2020 20:12:37 GMT+0530 (India Standard Time)
 * Register Component
 */
function Register() {
  const history = useHistory();
  const classes = useStyles();
  const [user, updateItemInUser] = useState({});

  const handleChange = (event) => {
    let localUserItem = {
      ...user,
      ...{ [event.target.name]: event.target.value },
    };
    updateItemInUser(localUserItem);
    console.log(user)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      async function saveProduct() {
        let response = await makeRequest({
          method: "POST",
          url: "/v1/addOrUpdateUser",
          data: user,
        });
        if (response.data.code === 200) {
          history.push("/product");
          ToastsStore.success("User register successfully!");
        } else {
          ToastsStore.error(response.data.message);
        }
      }
      saveProduct();
    } catch (error) {
      ToastsStore.error(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.gradient}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>Classy</Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            name="fullName"
            autoComplete="fullName"
            onChange={handleChange}
            autoFocus
          />{" "}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            onChange={handleChange}
            name="emailId"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            onChange={handleChange}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Typography
          color="primary"
          onClick={() => {
            history.push(`/`);
          }}
        >
           Have An Account?
        </Typography>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <ToastsContainer store={ToastsStore} />
    </Container>
  );
}
export default Register;
