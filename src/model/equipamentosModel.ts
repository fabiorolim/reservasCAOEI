import { User } from "../providers/auth/user";

export interface Equipamento {

    $key?: string;
    id?: string;
    ativo?: boolean;
    nome: string;
    tombo: string;
    //usuario?: User;

}