
const butao = document.querySelector('.btn');
butao.addEventListener('click', function pegardados() {
    axios.post('http://192.168.1.100:3000/create', {
        sexo: 'M',
        nome: 'Luan Vieira',
        senha: "macaco21",
        usuario: 'teste_21',
        datanascimento: '09/06/2001',
        email: 'teste.21@gmail.com',
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
)



/*butao.addEventListener('click', function pegardados() {
    axios.get('http://192.168.1.100:3000/ler')
    .then(res => console.log(res.data))
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
})*/
