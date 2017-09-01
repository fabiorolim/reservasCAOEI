export class Equipamento {

    public constructor(private key?: string,
        private nome?: string, private tombo?: string, private ativo?: string, private userID?: string) {

        this.key = key;
        this.ativo = ativo;
        this.nome = nome;
        this.tombo = tombo;
        this.userID = userID;
    }

    public getKey(): string {
        return this.key;
    }

    public setKey(key){
        this.key = key;
    }

    getNome(): string {
        return this.nome;
    }

    getAtivo(): string {
        return this.ativo;
    }

    getTombo(): string {
        return this.tombo;
    }

    getUserID(): string {
        return this.userID;
    }
}

