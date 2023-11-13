const url = 'https://api.adviceslip.com/advice?t=' + Math.random();

window.onload = () => {
   const card = document.body.querySelector('article');
   const adviceId = document.body.querySelector('#adviceId');
   const adviceText = document.body.querySelector('#advice');
   const btnNewAdvice = document.body.querySelector('#getNewAdvice');

   const randomColor = () => {
      let letters = '0123456789ABCDEF'.split('');
      let color = '#';
      for (let i=0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
   }

   async function getAdvice() {
      try {
         card.classList.remove('zoom');

         const res = await axios.get(url);
         let adviceSlip = res.data.slip;
         
         adviceId.innerText = adviceSlip.id;
         adviceText.innerText = adviceSlip.advice;
         document.body.style.backgroundColor = randomColor();

         card.classList.add('zoom');
      } catch (err) {
         console.error(err);
      }
   }
   
   btnNewAdvice.addEventListener('click', getAdvice);
}
