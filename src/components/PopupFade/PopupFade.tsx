import React from 'react'
import { FormsContainer } from 'components/FormsContainer/FormsContainer'
import styles from './PopupFadeStyles.module.css'
import { IPopupFade } from 'interfaces/IPopupFade'



export const PopupFade:React.FC<IPopupFade> = ({modalActive,currentForm,setModalActive}) => {
    return(
        <div className={modalActive? styles.popup + " " + styles.open : styles.popup}>
          <FormsContainer  setModalActive={setModalActive} currentForm={currentForm}/>
        </div>
    )
}