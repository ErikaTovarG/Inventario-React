import React from 'react'
import Button from "@mui/material/Button";
import styles from "./NavbarButton.module.css"

export default function NavbarButton(props) {
  return (
    <Button
      variant="contained"
      className= {styles.button}
      startIcon= {props.icon}
      Contained
    >
      {props.text}
    </Button>
  )
}

