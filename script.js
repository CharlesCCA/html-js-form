const header = 'WELCOME TO MY PAGE!';
const subheader = 'Tell me a little about yourself.';

document.querySelector('.header').innerHTML = header;
document.querySelector('.subheader').innerHTML = subheader;

document.querySelector('.formInputFields').addEventListener("submit", (event) => {
  event.preventDefault();
  let firstName = document.querySelector(".firstName").value;
  let lastName = document.querySelector(".lastName").value;
  let fullName = firstName.concat(" ", lastName);
  
  let birthday = document.querySelector(".birthday").value;
  let bday = new Date(birthday);
  let bdayMilli = bday.getTime();

  let bdayMonth = bday.getMonth() + 1;
  let bdayDate = bday.getDate() + 1;
  console.log(bdayMonth, bdayDate);
  
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  
  if (month < 10) {
    month = '0' + month;
  }
  
  if (date < 10) {
    date = '0' + date;
  }
  
  let todaysDate = year + '-' + month + '-' + date;
  
  let todayMilli = today.getTime();
  
  console.log(month, date);
  
  if (bdayMilli > todayMilli) {
    birthday = 'You haven\'t been born yet!';
  } else if (bdayMilli < 0) {
    birthday = 'You were born before 1/1/1970';
  } else if (birthday === todaysDate) {
    birthday = 'Happy Birthday!';
  } else if (bdayMonth === 12 && bdayDate === 25) {
    birthday = 'Your birthday is Christmas?? Hope you get a lot of gifts!'
  }
  
  let language = document.querySelector(".language").value;
  
  let answerString = `Hello ${fullName}!
                      <br><br>
                      Birthday: ${birthday}
                      <br><br>
                      Favorite Language: ${language}`;
  
  document.querySelector('.formAnswers').innerHTML = answerString;
});

