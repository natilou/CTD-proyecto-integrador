import React from 'react';
import { useMediaQuery } from 'react-responsive';
import "./AvatarView.css";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function AvatarView({userName}){
  const letterToShowInDefaultPicture = userName?.charAt(0).toUpperCase();
  const isMobile = useMediaQuery({ query: '(max-width: 761px)' });
  let navigate = useNavigate();
  
  function closeSession(){
    Swal.fire({
      title: '¿Deseas cerrar sesión?',
      showDenyButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        setTimeout(()=>{
          localStorage.removeItem("user")
          localStorage.removeItem("jwt")
        window.location.reload(true)
        }, 900)
        return navigate("/")
      } else if (result.isDenied) {
        Swal.fire('Sigue navegando!', '', 'success')
      }
    })
  }

  return(
    <div className="main_container" data-testid="avatar-container">
      <div className='row-avatar' data-testid="avatar-row">
        <div className="avatar_container" data-testid="avatar-container-2">
          <p className="avatar" data-testid="initials">
            {letterToShowInDefaultPicture}
          </p>
        </div>
        <div className="greeting_name_container" data-testid="avatar-greeting-container">
          <p className="greeting" data-testid="greeting">
            Hola,
          </p>
          <p className="user_name" data-testid="username">
            {userName}
          </p>
        </div>
      </div>
      {
        isMobile ? (
          <></>
          
        ): (
          <button className="button-avatar" data-testid="avatar-btn">
            <p role="closeSession" className="button_text_avatar" onClick={closeSession} data-testid="close-session">
              x
            </p>
          </button>
        )
      }
      
    </div>

);
}
export default AvatarView;