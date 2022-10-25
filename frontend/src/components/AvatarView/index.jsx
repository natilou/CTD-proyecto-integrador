import React from 'react';
import "./AvatarView.css";

function AvatarView({userName}){
  const letterToShowInDefaultPicture = userName?.charAt(0);
  return(
    <div className="main_container">
      <div className="avatar_container">
        <p className="avatar">
          {letterToShowInDefaultPicture}
        </p>
      </div>
      <div className="greeting_name_container">
        <p className="greeting">
          Hola,
        </p>
        <p className="user_name">
          {userName}
        </p>
      </div>
      <button className="button">
        <p className="button_text">
          x
        </p>
      </button>
    </div>

);
}
export default AvatarView;