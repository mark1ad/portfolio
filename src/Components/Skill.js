import React from 'react';

const Skill = (props) => {
  let iconClasses = "skill-icon " + props.icon;
  return (
    <div className="skill col">
      <i className={iconClasses}></i>
      <p>{props.name}</p>
    </div>
  )
}

export default Skill;
