import React from "react"
import { SignUpForm } from "components/SignUpForm/SignUpForm"
import {LogInForm} from "components/LogInForm/LogInForm"
import styles from "./FormsContainerStyles.module.css"
import { IFormsContainer } from "interfaces/IFormsContainer"


export const FormsContainer:React.FC<IFormsContainer>=({currentForm,setModalActive})=>{
      return(
         <form className={styles.form}>
         <button type='button' onClick={()=>setModalActive(false)} className={styles.buttonClose}></button>
          {currentForm?<SignUpForm/>:<LogInForm/>}
         </form>
      )
} 