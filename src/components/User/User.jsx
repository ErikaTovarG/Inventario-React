import React from 'react'
import PersonIcon from "@mui/icons-material/Person";
import { Avatar} from "@mui/material";
import styles from "./User.module.css"

export default function User(props) {
  return (
    <div className= {styles.container}>
        <p className={styles.name}>{props.name}</p>
        <Avatar className={styles.avatar}>
          <PersonIcon className={styles.icon}/>
        </Avatar>
    </div>
  )
}
