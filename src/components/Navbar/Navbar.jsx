import React from 'react'
import logo from "../../assets/img/sacme-logo-orig.png";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import BusinessIcon from "@mui/icons-material/Business";
import NavbarButton from "../NavbarButton/NavbarButton";
import styles from "./Navbar.module.css"
import { Grid } from "@mui/material";

export default function Navbar() {
  return (
    <Grid item xs={1} md={2}>
      <section className={styles.navbar}>
        <img src={logo} className={styles.logo} />
        <NavbarButton icon={<Inventory2Icon />} text="Inventario"/>
        <NavbarButton icon={<PeopleAltIcon />} text="Usuarios"/>
        <NavbarButton icon={<BusinessIcon />} text="Proveedores"/>
      </section>
    </Grid>
  )
}
