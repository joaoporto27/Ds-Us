import User from './User.js';

class UsersRepository {
    constructor() {
        this.jogadores = []
    }
    getJogadorById(id) {
        const jogador = this.jogadores.find((j) => j.id == id)

        if (!j) {
            return null
        }

        return jogador
    }
}

export default UsersRepository;