import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getImages } from 'redux/actions/imagesActions';
import { useImagesState } from 'redux/selectors/stateSelectors';
import styles from './style.module.css';

export const Gallery: React.FC = (): JSX.Element => {

    const dispatch = useDispatch();
    useEffect((): void => {
        dispatch(getImages());
    });
    const images = useImagesState();

    return (
        <div className={styles.galleryContainer}>
            {images.map(
                (image: string, index: number): JSX.Element => (
                    <img key={index} className={styles.image} src={image} alt="error" />
                )
            )}
        </div>
    );
};
