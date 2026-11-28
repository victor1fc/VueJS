export class Tarefa {
    constructor(id, titulo, concluido = false) {
        this.id = id;
        this.titulo = titulo;
        this.concluido = concluido;
    }
}