import './App.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init({
  publicKey: "2JuCpSG56M-D4NclU",
  limitRate: {
    id: 'app',
    throttle: 60000,
  },
});

export function App() {
  const [drink, setDrink] = useState("Coffee");

  const handleChange = (event) => {
    changeDrink(event.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="drinks">Choose An Option:</label>
        <select name="drinks" id="drinks" onChange={handleChange}>
          <option value="Coffee">Coffee</option>
          <option value="Water">Water</option>
          <option value="Milk">Milk</option>
          <option value="Hug">Hug</option>
        </select>
      </div>
      <button id="coffee-button" type="button" onClick={requestCoffee.bind(this)}>{drink} Please</button>
    </>
  );

  function changeDrink(value) {
    setDrink(value);
  }
}

var templateParams = {
  drink: 'coffee'
};



function requestCoffee() {
  emailjs.send('service_97hva5e', 'template_vjod5bc', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      alert(`Coffee Request failed to send. Error: ${error}`);
    },
  );
}
