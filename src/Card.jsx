import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const Task = ({ text }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.TASK },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: () => console.log('Task dropped!'),
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div ref={drag(drop)} style={{ opacity }} className="task" draggable="true">
      {text}
    </div>
  );
};

const Card = () => {
  return (
    <div className="main-div">
      <div className="swim-lane">
        <div className="main-col-1-header">
          <div className="main-col-1-header-button"></div>
          <div className="main-col-1-header-title">Done</div>
        </div>
        <div className="main-col-1-hz-ln"></div>
        <Task text="hello2" />
      </div>

      <div className="swim-lane">
        <div className="main-col-1-header">
          <div className="main-col-1-header-button"></div>
          <div className="main-col-1-header-title">Done</div>
        </div>
        <div className="main-col-1-hz-ln"></div>
        <Task text="hello1" />
      </div>

      <div className="swim-lane">
        <div className="main-col-1-header">
          <div className="main-col-1-header-button"></div>
          <div className="main-col-1-header-title">Done</div>
        </div>
        <div className="main-col-1-hz-ln"></div>
        <Task text="hello1" />
      </div>
    </div>
  );
};

export default Card;
