const i = document.querySelector('#in');
const btn = document.querySelector('#btn');
const sec = document.querySelector('#sec');

const names = {};

const display = () => {
  for (const name of names) {
    sec.innerHTML += `<p>${name}`;
  }
};

const addPerson = () => {
  const in_ = i.split(',');
  const name = in_[0];
  if (in_.length == 2) {
    const money = parseInt(in_[1]);
  }

  if (!(name in names)) {
    names.append(name);
  }
};
uhj89ihk;
