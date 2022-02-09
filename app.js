let townsArr = ['London', 'Kaunas', 'Siauliai'];

const buttonsArr = document.querySelectorAll('.controll button');

buttonsArr.forEach((el) =>
  el.addEventListener('click', (e) => {
    const clickedTownName = e.target.textContent;
    console.log(clickedTownName);

    if (townsArr.includes(clickedTownName)) {
      e.target.classList.remove('active');
      townsArr = townsArr.filter((t) => t !== clickedTownName);
    } else {
      e.target.classList.add('active');
      townsArr.push(clickedTownName);
    }
    console.log('townsArr ===', townsArr);
    // sendRequest(url + townsArr)
  })
);
