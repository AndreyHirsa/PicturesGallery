import { Button } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import styles from './style.module.css';
import { firebaseService } from 'services/firebaseService';

export const DrawingApp: React.FC = (): JSX.Element => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect((): void => {
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

    const startDrawing = ({
        nativeEvent,
    }: React.MouseEvent<HTMLCanvasElement, MouseEvent>): void => {
        const { offsetX, offsetY } = nativeEvent;
    contextRef.current!.beginPath();
    contextRef.current!.moveTo(offsetX, offsetY);
    setIsDrawing(true);
    };

    const finishDrawing = (): void => {
    contextRef.current!.closePath();
    setIsDrawing(false);
    };

    const draw = ({
        nativeEvent,
    }: React.MouseEvent<HTMLCanvasElement, MouseEvent>): void => {
        if (!isDrawing) {
            return;
        }
        const { offsetX, offsetY } = nativeEvent;
    contextRef.current!.lineTo(offsetX, offsetY);
    contextRef.current!.stroke();
    };

    const saveImage = (): void => {
        const image = canvasRef.current!.toDataURL('image/png');
        firebaseService.saveImage(image);
    };

    const undoFn = (): void => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
      context!.clearRect(0, 0, canvas.width, canvas.height);
        }
    };

    return (
        <div className={styles.drawingAppContainer}>
            <canvas
                className={styles.drawingApp}
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                ref={canvasRef}
            />
            <div className={styles.options}>
                <Button className={styles.saveImage} onClick={saveImage}>
                    <SaveIcon className={styles.saveIcon} />
                </Button>
                <Button onClick={undoFn} color="secondary">
          Undo
                </Button>
            </div>
        </div>
    );
};
