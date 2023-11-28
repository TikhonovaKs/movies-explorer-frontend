// import React from 'react';
// import './FilterCheckbox.css';

// function FilterCheckbox({ handleShortMovies }) {
//   const [isActive, setIsActive] = React.useState(false);

//   function handleToggle() {
//     setIsActive((prevIsActive) => !prevIsActive);
//     handleShortMovies(!isActive);
//   }

//   return (
//     <div class="toggle">
//       <button class="toggle__slider" onClick={handleToggle}></button>
//       <h5 class="toggle__name">Короткометражки</h5>
//     </div>
//   );
// }

// export default FilterCheckbox;

import React, { useContext, useEffect } from 'react';
import './FilterCheckbox.css';
import ShortMoviesContext from '../../contexts/ShortMoviesContext'

function FilterCheckbox({ handleShortMovies }) {
  const initIsSharedMovies=useContext(ShortMoviesContext);
  const [isActive, setIsActive] = React.useState(initIsSharedMovies);
//   useEffect(() => {
//     setIsActive(inithandleShortMovies);
// }, [inithandleShortMovies]);

  function handleToggle() {
    localStorage.setItem('isShortMoviesActive', !isActive);
    setIsActive((prevIsActive) => !prevIsActive);
    handleShortMovies(!isActive);
  }

  return (
    <ShortMoviesContext.Provider value={isActive}>

    <div className="toggle">
      <label className="toggle__tumbler">
        <input type="checkbox" checked={isActive} className="toggle__checkbox" onClick={handleToggle} />
        <span className="toggle__slider" />
      </label>
      <p className="toggle__name">Короткометражки</p>
    </div>
    </ShortMoviesContext.Provider >

  );
}

export default FilterCheckbox;
