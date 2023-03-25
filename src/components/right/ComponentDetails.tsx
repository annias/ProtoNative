import React, { useContext, useState, useEffect, useRef } from 'react';
import AppContext from '../../context/AppContext';
import ElementBlock from './ElementBlock';
import { useDrop } from 'react-dnd';

const ComponentDetails = (): JSX.Element => {
  const { currentComponent, originals, setOriginals, copies, setCopies } =
    useContext(AppContext);
  const displayedComponent = originals[currentComponent];
  const [childrenOfCurrent, setChildrenOfCurrent] = useState(
    displayedComponent.children
  );

  const moveItem = (dragIndex: number, hoverIndex: number): void => {
    console.log('drag', dragIndex, 'hover', hoverIndex);
    const item = displayedComponent.children[dragIndex];
    const copy = [...displayedComponent.children];
    copy.splice(dragIndex, 1);
    copy.splice(hoverIndex, 0, item);
    setOriginals((prevState: any) => {
      prevState[currentComponent].children = copy;
      return prevState;
    });
    setChildrenOfCurrent(copy);
    const newElements = copy.map((childName: string, index: number) => {
      if (currentComponent !== 'app' && currentComponent !== null) {
        return (
          <ElementBlock
            key={index}
            componentName={childName}
            components={copies}
            index={index}
            moveItem={moveItem}
            location={'details'}
          />
        );
      }
    });
    setChildElements(newElements);
  };

  const [childElements, setChildElements] = useState(
    childrenOfCurrent.map((childName: string, index: number) => {
      if (currentComponent !== 'app' && currentComponent !== null) {
        return (
          <ElementBlock
            key={index}
            componentName={childName}
            components={copies}
            index={index}
            moveItem={moveItem}
            location={'details'}
          />
        );
      }
    })
  );

  useEffect(() => {
    setChildElements(
      childrenOfCurrent.map((childName: string, index: number) => {
        if (currentComponent !== 'app' && currentComponent !== null) {
          return (
            <ElementBlock
              key={index}
              componentName={childName}
              components={copies}
              index={index}
              moveItem={moveItem}
              location={'details'}
            />
          );
        }
      })
    );
    console.log(childrenOfCurrent);
  }, [childrenOfCurrent, currentComponent]);

  return (
    <div id='component-details-container'>
      <h2>Component Details</h2>

      {currentComponent !== 'app' && currentComponent && (
        <div style={{ border: '1px solid black' }} id='component-box'>
          <p>{currentComponent}</p>
          {childElements}
        </div>
      )}
    </div>
  );
};

export default ComponentDetails;
