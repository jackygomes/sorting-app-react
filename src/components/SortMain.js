import { useState } from 'react';
import { faker } from '@faker-js/faker';
import PopUpModal from './PopUp'

const SortMain = () => {
  const getPeople = (peopleNumber) => {
    console.log('from parent ' + peopleNumber);
  }
  return(
    <div className="wrapper">
      <h2 className="header">
      Sorting Training System
      <PopUpModal onEnterPeople={getPeople}/>
      </h2>
      
    </div>
  );
};

export default SortMain;