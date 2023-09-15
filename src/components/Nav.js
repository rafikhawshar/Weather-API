import React, { useState } from "react";


function Nav(props) {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    props.onInputChange(value);
  };

  return (
    <div className="search">
      <header>
        <input type="text" name="city" id="city" placeholder="Type in a city name" value={inputValue} onChange={handleInputChange} />
        <input class="btn" type="submit" value="FIND WEATHER" onClick={props.onClick}></input>
      </header>

    </div>
  )
}

export default Nav;