import React from "react";
import Scores from "../Scores/Scores";

const Student = (props) => {
  return (
    <div>
      {props.students.map((student, idx) => (
        <p key={idx}>
          Student:{student.name} <br/>
          Bio: {student.bio} <br/>
          <Scores scores={student.scores}/>
        </p>
      ))}
      
    </div>
  );
};

export default Student;
