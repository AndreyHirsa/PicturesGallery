import styles from './style.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getImages} from "../../redux/actions/imagesActions";

export const Gallery = () => {
    let images = useSelector((state: any) => state.imagesReducer)

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getImages());
        console.log(images)
    },[])

    return (
        <div className={styles.galleryContainer}>
            {images.map((image: any) => {
                return (<img className={styles.image} src={image} alt="ddedde"/>)
            })}
        </div>)
}