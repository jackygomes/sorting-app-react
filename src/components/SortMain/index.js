import React, { useState, useEffect } from 'react';

import { faker } from '@faker-js/faker';
import { shuffle } from '../../utils.js';

import PopUpModal from '../InputPopUp';
import PeopleList from '../PeopleList';

import styles from './style.css'

const SortMain = () => {
  const [people, setPeople] = useState([]);
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);
  const [gameOn, setGameOn] = useState(false);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    people.length > 0 && checkSorting();
  }, [people]);

  useEffect(() => {
    if (!gameOn) {
      clearInterval(timer);
    }
  }, [gameOn]);

  const checkSorting = () => {
    let isSorted = people.every(
      (p, index) => index + 1 === Number(p.potatoes)
    );
    if (isSorted) {
      stopGame();
    }
  }

  const getPeople = (numberOfPeople) => {
    setPeople([]);

  const generatePotatoes = Array(parseInt(numberOfPeople))
    .fill(1)
    .map((_, index) => index + 1);

    const randomPotatoes = shuffle(generatePotatoes);

    generatePeople(numberOfPeople, randomPotatoes).then(res => setPeople(res))

    startGame();
  }

  const generatePeople = async (numberOfPeople, randomPotatoes) => {
    const tempPeoples = [];

    for (let i = 0; i < numberOfPeople; i++) {
      const p = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        potatoes: randomPotatoes.pop(),
        location: faker.address.country(),
      };
      
      await tempPeoples.push(p)
    }
    return tempPeoples;
  }
  
  const startGame = () => {
    setSorted(false);
    const timeIntervel = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
      }, 1000); 
    setTimer(timeIntervel);
    setGameOn(true);
  }

  const stopGame = () => {
    setSorted(true);
    setGameOn(false);
    clearInterval(timer);
  }

  return(
    <div className="wrapper">
      <h2 className="header">
      Sorting Training System
      { !gameOn && <PopUpModal onEnterPeople={getPeople}/> }
      </h2>
      { sorted && <h3 className="successMsg">Yay! You've successfully sorted the list! Your score is <span>{time}</span></h3> }
      { gameOn && 
        <div className="listSection">
          <h3>
            <span className="timer">Time: { time } Sec</span>
            { people.length } people in the list
          </h3>
          <PeopleList people={people} setPeople={setPeople} />
        </div>
      }
    </div> 
  );
};

export default SortMain;