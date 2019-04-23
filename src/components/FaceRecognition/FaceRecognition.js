import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL, boxes }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
      <img id='inputImage' width='500px' heigh='auto' src={imageURL} alt='' />
      {boxes.map(box => {
        return <div key={box.topRow} className='bounding_box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
        </div>
      })}
      </div>
    </div>
    
  )
}

export default FaceRecognition;