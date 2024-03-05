const header = 'WELCOME TO MY PAGE!';
const subheader = 'Tell me a little about yourself.';

document.querySelector('.header').innerHTML = header;
document.querySelector('.subheader').innerHTML = subheader;

let imageUrl = "https://images.squarespace-cdn.com/content/v1/5e949a92e17d55230cd1d44f/65963c6a-a64d-44ba-bef1-0d15bc5f25dc/Hello201x1.png";

document.querySelector(".helloImage").src = imageUrl;

const helloForm = `<form class="formInputFields">
          <input type="text" class="firstName" placeholder="First Name" required>
          <input type="text" class="lastName" placeholder="Last Name" required>
          <label for="birthday">Birthday:</label>
          <input type="date" class="birthday" required>
          <label for="language">Favorite Language?</label>
          <select class="language" required>
            <option value="">Choose one</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JS">Javascript</option>
          </select>
          <button type="submit">Submit</button>
        </form>`;

document.querySelector('.infoForm').innerHTML = helloForm;
                                                            
function handleSubmit() {
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
  } else if (bdayMonth === 12 && bdayDate === 25) {
    birthday = 'Your birthday is Christmas?? Hope you get a lot of gifts!'
  } else if (bdayMilli < 0) {
    birthday = 'You were born before 1/1/1970';
  } else if (birthday === todaysDate) {
    birthday = 'Happy Birthday!';
  }
  
  let language = document.querySelector(".language").value;
  
  let answerString = `Hello ${fullName}!
                      <br><br>
                      Birthday: ${birthday}
                      <br><br>
                      Favorite Language: ${language}`;
  
  document.querySelector('.formAnswers').innerHTML = answerString;
};

document.querySelector('.formInputFields').addEventListener('submit', handleSubmit)

