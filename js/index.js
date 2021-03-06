//  1.Crie uma Função que recebe um número e verifica se ele é par ou ímpar.

console.log('Questão 1');
if(true){
  let impar=3;
  let par=2;
  function parOuImpar(numero){
    if (numero%2==0){
      console.log("É par");
    }else{
      console.log("É impar");
    }
  }

  parOuImpar(impar);
  parOuImpar(par);
}
// 2.Crie uma arrow function que receba um número e verifique se é primo.

console.log('Questão 2');
if(true){

  primo = (num)=>{
    for(let i=2; i<num; i++){
      if(num % i ==0){
        return "Não é primo";
      }
    }
    return "É primo";
  };
  
  console.log(primo(93))
}
//  3.Crie uma Função que imprime de 10 até 1 e depois imprime na tela “feliz ano novo” através de uma callback

 console.log('Questão 3');
 if(true){
  function felizAnoNovo(){
  
    console.log("feliz ano novo");
    
  }
  
  function zeroADez(callback){
    setTimeout(function(){
      for (i  = 10; i>0; i--){
        console.log(i)
      }
    callback();
    },2000)
  }
  
  zeroADez(felizAnoNovo);
 }
setTimeout(function(){
  //4.Faça o mesmo utilizando Promise com concatenação de then

  console.log('Questão 4')

  if(true){
    
    let felizAnoNovo = new Promise ((resolve, reject) => {
        let i = 0;
        for (i  = 10; i>0; i--){
          console.log(i)
        }
        resolve('Feliz Ano Novo');
    })
    
    felizAnoNovo.then((message) => {
        console.log(message)
    })
  }

  //5.Agora repita a função utilizando o método async/await
  console.log("Questão 5")
  if(true){
    function newYear(){
      return new Promise((resolve, reject) => {
          let i = 10;
          for (i  = 10; i>0; i--){
              console.log(i)
          }
          if (i==0){
              resolve(
                  console.log('Feliz Ano Novo')
                  );
          }
      })
  }
  
  async function ehAnoNovo(){
      const felizAnoNovoResponse = await newYear();
  }
  
  ehAnoNovo();
  }
  //6.Crie um array com as seguintes notas [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0], construa uma função para imprimir apenas as notas acima de 7
  console.log('Questão 6');
  if (true){
    let array = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0]

  let filtro = array.filter(function(num){
    return (num>=7.0);
  });

  console.log(filtro);
  }

  // 7.Crie um array de objetos onde cada objeto será um produto de supermercado e terá o nome do produto e o seu respectivo preço, agora construa uma função que some todos os valores e te devolva o total

  console.log('Questão 7');
  if (true){

    let mercado = {
      produtos:['refri','carne','bolacha','pão','suco'],
      preco: [6.98,11.00,3.69,5.49,3.99]
    }

    function somaMercado (array){
      let soma = array.reduce(function(total, numero){
        return total+numero;
      });
      return soma;
    }

    console.log(somaMercado(mercado.preco));
  }

  //8.Em uma escola ficou definido que os alunos do 8º ano terão aulas de história e os alunos do 9º terão aulas de física às quartas-feiras. Você deve criar uma função que receba um arrayde objetos contendo nome e série de cada aluno e atribua a suarespectiva disciplina da quarta-feira. (O array de alunos deve sercriado como você desejar contanto que contenha pelo menos 5alunos).
  console.log('Questão 8');
  if(true){
    let alunos = {
      nome: ['joão', 'carlota', 'cleito', 'shaolin', 'jeremias'],
      turma: [8,8,9,8,9]
    }

    function aulaQuarta(i){
      if (alunos.turma[i]==8){
        console.log(alunos.nome[i]+", sua aula é de historia!");
      }else{
        console.log(alunos.nome[i]+", sua aula é de física!");
      }
    }

    for (let i=0; i<5; i++){
      aulaQuarta(i)
    }
  }
},3000)
