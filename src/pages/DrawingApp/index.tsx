import {Button} from "@material-ui/core";
import {useEffect, useRef, useState} from "react";
import styles from "./style.module.css";
import {useSelector} from "react-redux";
import firebase from "firebase";


export const DrawingApp = () => {


    
    const canvasRef = useRef<any>(null);
    const contextRef = useRef<any>(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = "5";
        contextRef.current = context;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }, []);


    const startDrawing = ({nativeEvent}:any) => {
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };


    const finishDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
        let image=canvasRef.current.toDataURL('image/png')
    };

    const draw = ({nativeEvent}:any) => {
        if (!isDrawing) {
            return;
        }
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    };

    const saveImage=()=>{
        let image=canvasRef.current.toDataURL('image/png');
        firebase
            .database()
            .ref()
            .child('pictures/')
            .child(`${new Date().getTime()}`)
            .set(image);
    }

    return (
        <div className={styles.drawingAppContainer}>
            <canvas
                id="canvas"
                className={styles.drawingApp}
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                ref={canvasRef}
            />
            <Button onClick={saveImage}>Save image</Button>
        </div>
    );
};
