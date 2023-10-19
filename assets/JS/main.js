document.addEventListener('DOMContentLoaded', function () {
    const abas = document.querySelectorAll('.aba');
    const conteudos = document.querySelectorAll('.aba-conteudo');
  
    abas.forEach(function (aba, index) {
      aba.addEventListener('click', function () {
        if (conteudos[index].style.display === 'block') {
          conteudos[index].style.display = 'none';
         
         
        } else {
          conteudos[index].style.display = 'block';
        }
      });
    });
  
    // Adiciona um evento de clique aos botões "fechar"
    const botoesFechar = document.querySelectorAll('.fechar');
    botoesFechar.forEach(function (botao, index) {
      botao.addEventListener('click', function () {
        conteudos[index].style.display = 'none';
       
      });
    });
  });