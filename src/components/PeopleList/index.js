import React, { useState } from 'react';

import { ReactSortable } from "react-sortablejs";

import styles from './style.css'

const PeopleList = ({people, setPeople}) => {
  return (
    <table className="peopleList">
      <thead>
        <tr>
          <th>Email</th>
          <th>Potatoes</th>
          <th>Name</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <ReactSortable list={people} setList={setPeople} >
          {people.map((item, index) => (
            <tr key={index}>
              <td>{item.email}</td>
              <td>{item.potatoes}</td>
              <td>{item.name}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </ReactSortable>
      </tbody>
    </table>
  )
}

export default PeopleList;