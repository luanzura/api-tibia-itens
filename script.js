const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.6.1' }
  };
  
  fetch('http://localhost:3000/api', options)
  .then(response => response.json())
  .then(data => {
    const getVocPaladin = data.filter(item => item.Voc === "Paladins");
    console.log(getVocPaladin)

  })
  .catch(err => console.error(err));
