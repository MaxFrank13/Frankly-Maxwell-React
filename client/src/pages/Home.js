import React, {useState, useEffect, useRef} from 'react';
import resume from '../assets/resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';

export default function Contact(props) {

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext('2d');
    context.scale(2,2);
    context.lineCap = 'round';
    context.fillStyle = '#CFCFCF';
    context.strokeStyle = '#127FBF';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.lineWidth = 35;

    contextRef.current = context;
  }, []);

  const startDrawing = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({nativeEvent}) => {
    if (!isDrawing) {
      return;
    };
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  return (
    <section className='relative overflow-hidden'>
      <h1 className='text-stone-100 text-3xl font-bold text-center'>Click and drag to find a hidden treasure!</h1>
      <a 
      className='absolute top-1/2 left-1/2 black select-none text-2xl text-stone-200 hover:text-yellow-600'
      href={resume}>
        <FontAwesomeIcon
          icon={faFileLines}
        />
      </a>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </section>

  )
}