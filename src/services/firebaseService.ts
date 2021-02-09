import firebase from 'firebase';

export const firebaseConfig = {
    apiKey: 'AIzaSyCAstGMtg6eF1Pz_csvP8Mn-qMR5cZ670c',
    authDomain: 'picturesgallery-88402.firebaseapp.com',
    databaseURL: 'https://picturesgallery-88402-default-rtdb.firebaseio.com',
    projectId: 'picturesgallery-88402',
    storageBucket: 'picturesgallery-88402.appspot.com',
    messagingSenderId: '24096359356',
    appId: '1:24096359356:web:6ea8a883c6e33e5f4521b9',
};

export const firebaseService = {
    saveImage: (data: string): void => {
        try {
            firebase
                .database()
                .ref()
                .child('pictures/')
                .child(`${new Date().getTime()}`)
                .set(data);
        } catch (error) {
            console.log(error);
        }
    }
};

