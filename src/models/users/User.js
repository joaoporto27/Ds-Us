class Jogadores {
  constructor(id, nome, equipe, impostor) {
    this.id = this.generateId();
    this.nome = nome;
    this.equipe = equipe;
    this.impostor = impostor;
  }


  generateId(){
    return Math.floor(Math.random() * 999) + 1;
  }
}

export default Jogadores;
