import React, { useEffect } from 'react';
import {createSelectorHook, useDispatch} from 'react-redux';
import { getImages } from 'redux/actions/imagesActions';
import styles from './style.module.css';
import {RootState} from "interfaces/RootStateType";

export const Gallery:React.FC = ():JSX.Element => {

    const useSelector = createSelectorHook<RootState>()
    const images = useSelector(state => state.imagesReducer);

    const dispatch = useDispatch();

    useEffect(():void => {
        dispatch(getImages());
    });

    return (
        <div className={styles.galleryContainer}>
            {images.map((image: string) => (
                <img key={Math.random()} className={styles.image} src={image} alt="error" />
            ))}
        </div>
    );
};
