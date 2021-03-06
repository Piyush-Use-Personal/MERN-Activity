import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { makeRequest } from "../../Service/requestCall";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { useHistory } from "react-router-dom";

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        Demo Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    height: "100px",
    width: "100px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Authentication() {
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
          url: "/v1/checkPassword",
          data: user,
        });
        console.log(response.data)
        if (response.data.code === 200) {
          history.push("/product");
          ToastsStore.success("User login successfully!");
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
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="emailId"
            autoComplete="email"
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={handleChange}
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
              history.push(`/register`);
            }}
          >
            Don't Have An Account?
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
