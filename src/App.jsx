import './App.css';
import emailjs from '@emailjs/browser';

emailjs.init({
  publicKey: "2JuCpSG56M-D4NclU",
  limitRate: {
    id: 'app',
    throttle: 60000,
  },
});

export function App() {
  return (
    <button id="coffee-button" type="button" onClick={requestCoffee.bind(this)}>Coffee Please</button>
  );
}

var templateParams = {
  name: 'Test IDK',
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
