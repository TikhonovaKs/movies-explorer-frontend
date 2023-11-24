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

import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ handleShortMovies }) {
  const [isActive, setIsActive] = React.useState(false);

  function handleToggle() {
    setIsActive((prevIsActive) => !prevIsActive);
    handleShortMovies(!isActive);
  }
  
  return (
    <div className="toggle">
    <label className="toggle__tumbler">
      <input
        type="checkbox"
        className="toggle__checkbox"
        onClick={handleToggle}
      />
      <span className="toggle__slider" />
    </label>
    <p className="toggle__name">Короткометражки</p>
  </div>
  )
}

export default FilterCheckbox;
