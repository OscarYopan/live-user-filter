const result = document.querySelector('#result ')
const filter = document.querySelector('#filter ')
const listItems= []

getData()

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50')

  const { results } = await res.json()

  //clear results
  results.innerHTML = ''

  results.forEach(user => {
    console.log(user);
  });
}
