const i = document.querySelector('#in'); // input form
const btn = document.querySelector('#btn'); // button to submit input
const sec = document.querySelector('#sec'); // section for names and amounts
const ass = document.querySelector('#ass'); // add or subtract dropdown

var names = {};

const save = () => localStorage.setItem('names', JSON.stringify(names));

window.onload = () => {
  if ('names' in localStorage) {
    names = JSON.parse(localStorage.getItem('names'));
    console.log(names);
    display();
  }
};

const display = () => {
  // iterate through keys and make paragraph tag showing name and money owed
  sec.innerHTML = '';
  for (const name of Object.keys(names)) {
    sec.innerHTML += `<p>${name}: ${Math.round(names[name] * 100) / 100}</p>`;
  }
};

const addPerson = () => {
  const in_ = i.value.split(',');
  const name = in_[0];
  let money;
  if (in_.length == 2) {
    money = parseFloat(in_[1]);
  } else {
    money = 0;
  }
  money *= ass.value == 'sub' ? -1 : 1;

  if (!(name in names)) {
    if (!(money == null)) {
      names = { ...names, [name]: money };
      save();
    }
  } else {
    names[name] += money;
    save();
  }

  display();
};

btn.onclick = addPerson;
