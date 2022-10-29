import React from 'react';
import { useMediaQuery } from 'react-responsive';
import "./AvatarView.css";
import Swal from 'sweetalert2';

function AvatarView({userName}){
  const letterToShowInDefaultPicture = userName?.charAt(0);
  const isMobile = useMediaQuery({ query: '(max-width: 761px)' });
  

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
        window.location.reload(true)
        }, 900)
        
      } else if (result.isDenied) {
        Swal.fire('Sigue navegando!', '', 'success')
      }
    })
  }

  return(
    <div className="main_container">
      <div className='row-avatar'>
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
      </div>
      {
        isMobile ? (
          <></>
          
        ): (
          <button className="button-avatar">
            <p className="button_text_avatar" onClick={closeSession}>
              x
            </p>
          </button>
        )
      }
      
    </div>

);
}
export default AvatarView;