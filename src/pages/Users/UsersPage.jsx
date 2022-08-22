import React from 'react'
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Navbar from "../../components/Navbar/Navbar";
import User from "../../components/User/User";
import Table from "../../components/Table/Table";
import styles from "./UsersPage.module.css"


export default function UsersPage() {
  return (
    <Grid container>
        <Navbar />
        <Grid item xs={11} md={10}>
          <section className={styles.content}>
            <article className={styles.header}>
              <h2 className={styles.title}>Usuarios</h2>
              <User name="Erika Tovar" />
            </article>
            <Button
              variant="contained"
              className={styles.button}
              startIcon={<AddIcon />}
            >
              Usuario
            </Button>
            <Table />
          </section>
        </Grid>
      </Grid>
  )
}
