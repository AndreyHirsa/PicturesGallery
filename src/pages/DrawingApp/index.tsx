import {Button} from "@material-ui/core";
import {useEffect, useRef, useState} from "react";
import styles from "./style.module.css";
import firebase from "firebase";
import React from "react";
import SaveIcon from '@material-ui/icons/Save';

export const DrawingApp = () => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            context!.lineCap = 'round';
            context!.strokeStyle = 'black';
            context!.lineWidth = 5;
            contextRef.current = context;
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
    }, []);

    const startDrawing = ({nativeEvent}: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current!.beginPath();
        contextRef.current!.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const finishDrawing = () => {
        contextRef.current!.closePath();
        setIsDrawing(false);
    };

    const draw = ({nativeEvent}: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if (!isDrawing) {
            return;
        }
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current!.lineTo(offsetX, offsetY);
        contextRef.current!.stroke();
    };

    const saveImage = () => {
        let image = canvasRef.current!.toDataURL('image/png');
        firebase
            .database()
            .ref()
            .child('pictures/')
            .child(`${new Date().getTime()}`)
            .set(image);
    }

    const undo = () => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            context!.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    return (
        <div className={styles.drawingAppContainer}>
            <canvas
                id='canvas'
                className={styles.drawingApp}
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                ref={canvasRef}
            />
            <div className={styles.options}>
                <Button className={styles.saveImage} onClick={saveImage}><SaveIcon
                    className={styles.saveIcon}/></Button>
                <Button onClick={undo} color={"secondary"}>Undo</Button>
            </div>
        </div>
    );
};
