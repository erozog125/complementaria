import { useState, useEffect } from 'react';
import { Button } from './Components/Button/Button';
import { Card } from './Components/Card/Card';
import img1 from './Images/gato.jpeg';
import img2 from './Images/tigre.jpeg';

function App() {

  const [state, setState] = useState(false);

  const handleStatus = () => {
    setState(!state)
  }

  useEffect(() => {

    const imgCard1 = document.getElementById('card1');
    const imgCard2 = document.getElementById('card2');
    const btnEnabled = document.querySelector('.btn-button');


    if (state === false) {
      imgCard1.classList.remove('Inactive');
      imgCard1.classList.add('Active');
      btnEnabled.classList.remove('btn-enabled');
      btnEnabled.classList.add('btn-disabled');
      imgCard2.classList.remove('Inactive');
      imgCard2.classList.add('Active');
      btnEnabled.textContent = "Enabled";
    } else {
      imgCard1.classList.remove('Active');
      imgCard1.classList.add('Inactive');
      imgCard2.classList.remove('Active');
      imgCard2.classList.add('Inactive');
      btnEnabled.classList.remove('btn-disabled');
      btnEnabled.classList.add('btn-enabled');
      btnEnabled.textContent = "Disabled";
    }
  }, [state])
  

  return (
    <div className="App">
      <Card idCard = "card1" name="Card 1" src={img1} />
      <Card idCard = "card2" name="Card 2" src={img2} />
      <Button event={handleStatus} nameButton="Disabled" />
    </div>
  )
}

export default App;
