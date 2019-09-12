import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    { id: 1, name: "Bruce", age: 50, skills: "React" },
    { id: 2, name: "Diana", age: 150, skills: "Angular" },
    { id: 3, name: "Clarke", age: 45, skills: "Vue" }
  ];
  const personsList = persons.map(person => <Person person={person}></Person> );
  return <div>{personsList}</div>;
}

export default NameList;
