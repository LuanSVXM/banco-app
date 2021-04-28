var tipo, nome, frase, palavra, op1, op2, op3, op4, op5, url1, url2, url3, url4, url5;
/*const botao = document.querySelector('.btn');
botao.addEventListener('click',*/
function pegardados() {
  nome = document.getElementById('categ').value;
  cor();
  axios.post('http://localhost:3000/questao', {
      tipo: 1,
      categoria: 4,
      frase:'a',
      op1: 'a',
      op2: 'a',
      op3: 'a',
      op4: 'a',
      op5: 'a',
      url1: 1,
      url2: 2,
      url3: 3,
      url4: 4,
      url5: 5,
    })
    axios.post('http://localhost:3000/categoria', {
      url: 'a',
      nome: 'a',
    })
    axios.post('http://localhost:3000/midia', {
      descricao: 'a',
      url1: 'a',
      nome: 'asada',
    })
    axios.post('http://localhost:3000/createcategoria', {
      nome: 'sdads',
      url: 'sada',
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
} //)

function pfp() {
  document.getElementById("dassociartexto").style.display = "none";
  document.getElementById("fassociacao").style.display = "flex";
  document.getElementById("dassociacao").style.left = "32%";
  document.getElementById("dpfp").style.display = "unset";
  document.getElementById("dvip").style.display = "none";
  document.getElementById("dsubmit").style.display = "unset";
  document.getElementById("dsubmit").style.left = "55%";
  document.getElementById("dsubmit").style.bottom = "3%";
  tipo = 11;
}

function vip() {
  document.getElementById("dassociartexto").style.display = "none";
  document.getElementById("fassociacao").style.display = "flex";
  document.getElementById("dassociacao").style.left = "32%";
  document.getElementById("dpfp").style.display = "none";
  document.getElementById("dvip").style.display = "unset";
  document.getElementById("dsubmit").style.display = "unset";
  document.getElementById("dsubmit").style.left = "55%";
  document.getElementById("dsubmit").style.bottom = "4%";
  tipo = 10;
}

function associar() {
  var associacao = document.getElementsByName("associacao");
  document.getElementById("dassociartexto").style.display = "unset";
  document.getElementById("fassociacao").style.display = "flex";
  for (var i = 0; i < associacao.length; i++) {
    if (associacao[i].value == "10" && associacao[i].checked) {
      document.getElementById("dsubmit").style.display = "unset";
      tipo = 10;
      vip();
    }
    if (associacao[i].value == "11" && associacao[i].checked) {
      document.getElementById("dsubmit").style.display = "unset";
      tipo = 11;
      pfp();
    }
  }
}

function opf() {
  document.getElementById("dopffrase").style.display = "unset";
  document.getElementById("dopfmidia").style.display = "unset";
  document.getElementById("opftexto1").style.display = "unset";
  document.getElementById("opftexto2").style.display = "unset";
  document.getElementById("dsubmit").style.display = "unset";
  document.getElementById("dsubmit").style.left = "50%";
  frase = document.getElementById("dopffrase").value;
  url1 = document.getElementById("dopfmidia").value;
}

function dpi() {
  document.getElementById("ddpifrase").style.display = "unset";
  document.getElementById("ddpimidia").style.display = "unset";
  document.getElementById("dsubmit").style.display = "unset";
  document.getElementById("dsubmit").style.left = "55%";
  document.getElementById("dsubmit").style.bottom = "12%";
  frase = document.getElementById("ddpifrase").value;
  url1 = document.getElementById("ddpimidia").value;
}

function plfd() {
  document.getElementById("dplfdfrase").style.display = "unset";
  document.getElementById("dplfdpalavra").style.display = "unset";
  document.getElementById("dsubmit").style.display = "unset";
  document.getElementById("dsubmit").style.left = "55%";
  document.getElementById("dsubmit").style.bottom = "12%";
  frase = document.getElementById("dplfdfrase").value;
  palavra = document.getElementById("dplfdpalavra").value;
}

function alt() {
  document.getElementById("dalternativas").style.display = "unset";
  document.getElementById("dsubmit").style.display = "unset";
  document.getElementById("dsubmit").style.left = "57%";
  document.getElementById("dsubmit").style.bottom = "5%";
  op1 = document.getElementById("altcerta").value;
  op2 = document.getElementById("alterrada1").value;
  op3 = document.getElementById("alterrada2").value;
  op4 = document.getElementById("alterrada3").value;
  op5 = document.getElementById("alterrada4").value;
}

function plfa() {
  alt();
  document.getElementById("dplfdfrase").style.display = "unset";
  document.getElementById("dplfdpalavra").style.display = "unset";
  document.getElementById("dplfamidia").style.display = "unset";
  frase = document.getElementById("dplfdfrase").value;
  palavra = document.getElementById("dplfdpalavra").value;
  url1 = document.getElementById("dplfamidia").value;
}

function mapv() {
  alt();
  document.getElementById("dmapvmidia").style.display = "unset";
  url1 = document.getElementById("dmapvmidia").value;
}

function cor() {
  var radios = document.getElementsByName("pickquestion");
  document.getElementById("ddireita").style.display = "none";
  document.getElementById("desquerda").style.display = "none";
  document.getElementById("ddiembaixo").style.display = "inline-flex";
  document.getElementById("desembaixo").style.display = "inline-flex";
  document.getElementById("dembaixo").style.display = "unset";
  document.getElementById("dcategoria").style.display = "unset";
  document.getElementById("dcriarcategoria").style.display = "unset";
  document.getElementById("dassociartexto").style.display = "none";
  document.getElementById("fassociacao").style.display = "none";
  document.getElementById("dopffrase").style.display = "none";
  document.getElementById("dopfmidia").style.display = "none";
  document.getElementById("opftexto1").style.display = "none";
  document.getElementById("opftexto2").style.display = "none";
  document.getElementById("ddpifrase").style.display = "none";
  document.getElementById("ddpimidia").style.display = "none";
  document.getElementById("dplfdfrase").style.display = "none";
  document.getElementById("dplfdpalavra").style.display = "none";
  document.getElementById("dplfamidia").style.display = "none";
  document.getElementById("dmapvmidia").style.display = "none";
  document.getElementById("dalternativas").style.display = "none";
  document.getElementById("dpfp").style.display = "none";
  document.getElementById("dvip").style.display = "none";
  document.getElementById("dsubmit").style.display = "unset";
  document.getElementById("dsubmit").style.bottom = "5%";
  document.getElementById("dsubmit").style.left = "50%";
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].value == "0" && radios[i].checked) {
      document.getElementById("dsubmit").style.display = "none";
      associar();
    }
    if (radios[i].value == "1" && radios[i].checked) {
      opf();
      tipo = 1;
    }
    if (radios[i].value == "2" && radios[i].checked) {
      dpi();
      tipo = 2;
    }
    if (radios[i].value == "3" && radios[i].checked) {
      dpi();
      tipo = 3;
    }
    if (radios[i].value == "4" && radios[i].checked) {
      dpi();
      tipo = 4;
    }
    if (radios[i].value == "5" && radios[i].checked) {
      plfd();
      tipo = 5;
    }
    if (radios[i].value == "6" && radios[i].checked) {
      plfa();
      tipo = 6;
    }
    if (radios[i].value == "7" && radios[i].checked) {
      mapv();
      tipo = 7;
    }
    if (radios[i].value == "8" && radios[i].checked) {
      mapv();
      tipo = 8;
    }
    if (radios[i].value == "9" && radios[i].checked) {
      mapv();
      tipo = 9;
    }
  }
}