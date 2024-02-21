const i = document.querySelector('#in');
const btn = document.querySelector('#btn');
const sec = document.querySelector('#sec');
const ass = document.querySelector('#ass');

var names = {};

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
    }
  } else {
    names[name] += money;
  }

  display();
};

btn.onclick = addPerson;
