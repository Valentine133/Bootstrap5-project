window.addEventListener('DOMContentLoaded', () => {

  // Cut the text in the card element 
  function cutOfText() {
      const textBloсks = document.querySelectorAll('.content_text');
      
      textBloсks.forEach((item) => {
        const parent = item.parentNode;
        let bloсk_height = item.style.height ? item.style.height : item.offsetHeight;

        if(bloсk_height > 50){
          item.style.maxHeight = '50px';
          link = parent.getElementsByClassName('btn-more')[0];
          link.style.display = 'inline-block';

          link.addEventListener('click', (e) => {
            e.preventDefault();
            
            if(item.style.maxHeight){
              item.style.maxHeight = '';
              e.target.innerHTML = 'Hide';
            } else {
              item.style.maxHeight = '50px';
              e.target.innerHTML = 'Show more....'; 
            }
            return false;
          });
        } else {
            link = parent.getElementsByClassName('btn-more')[0];
            link.style.display ='none';
        }
      });
    };

    cutOfText();

    // Toggle Darkmode 
    function toggleDarkmode() {
      const btnDarkmode = document.querySelector('#darkmode-toggle');
      const labelDarmode = document.querySelector('.darkmode-label');

      btnDarkmode.addEventListener('change', () => {
          btnDarkmode.checked ? document.body.setAttribute('data-bs-theme', 'dark') : document.body.setAttribute('data-bs-theme', '');
      })
    }

    toggleDarkmode();

});