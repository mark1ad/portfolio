import React from 'react';
import './../css/MenuLink.css';

const MenuLink = (props) => {
  return (
    <div className="menulink">
      <a href={props.href} target="_blank">
        {props.children}
      </a>
    </div>
  )
}

export default MenuLink;
