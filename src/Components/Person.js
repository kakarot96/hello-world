import React from "react";

function Person({person}) {
    // console.log(props)
    return (
        <div>
            <h2>
                
                I am {person.name}. I am {person.age} years old and I know {person.skills}
            </h2>
        </div>
    );
}

export default Person;
