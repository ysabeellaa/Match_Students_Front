import { TextField } from '@mui/material'
import styles from './Register.module.scss'

export default function Register() {
  return (
    <div className={styles.inputs}>
        <TextField label = "Nome" variant='outlined'/>
        <TextField label = "Email" variant='outlined'/>
        <TextField label = "Senha" variant='outlined'/>
        <TextField label = "Nome" variant='outlined'/>
        <TextField label = "Matrícula" variant='outlined'/>
        <TextField label = "Nascimento" variant='outlined'/>
        <TextField label = "Curso" variant='outlined'/>
        <TextField label = "Período" variant='outlined'/>
        <TextField label = "Stacks de Interesse" variant='outlined'/>
    </div>
  )
}
