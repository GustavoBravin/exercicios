class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
mostrar(){
    try{
        return this.atributos();
    } 
    catch(erro){
     console.log(erro.message)
    }
    
}

    atributos(){
        if(this.nome != "" && this.sobrenome != ""){
            return this.nome + this.sobrenome
        }
        else{
      throw new Error("Ta errado, ta faltando nome ou sobrenome")
        }
    }
}

const pessoa = new Pessoa("", "Picolo");
console.log(pessoa.mostrar())