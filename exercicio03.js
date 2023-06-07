class MeuError extends Error {
  constructor(message){
    super(message);
    this.name = "Meu Erro";
  }
}
class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  } 

  retornarAtributos() {
    try {
      return this.atributos();
    } catch (erro) {
      console.log(erro.stack)
    }
  }
  

  atributos() {
    if(this.estudante != "" && this.cosplay != "" && this.nota_cosplay != ""){
      return this.estudante + this.cosplay + this.nota_cosplay
  }
  else{
throw new MeuError("Ta errado, ta faltando")
  }
}
}

const aluno = new NerdIF("", "Homem-Aranha",9 );
const atributos = aluno.retornarAtributos();

/*
console.log(atributos.estudante); 
console.log(atributos.cosplay);   
console.log(atributos.nota_cosplay);
*/
