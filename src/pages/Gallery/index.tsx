import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getImages } from 'redux/actions/imagesActions';
import { Redirect } from 'react-router-dom';
import styles from './style.module.css';

export const Gallery = () => {
    const images = useSelector((state: any) => state.imagesReducer);
    const user = useSelector((state: any) => state.userStateReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getImages());
    }, []);

    if (!user) {
        return <Redirect push to="/login" />;
    }

    return (
        <div className={styles.galleryContainer}>
            {images.map((image: string, index: number) => (
                <img key={index} className={styles.image} src={image} alt="error" />
            ))}
        </div>
    );
};
