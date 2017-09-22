import { Reserva } from "./reservasModel";
import { User } from "../providers/auth/user";

export class Devolucao {
    $key?: string;
    reserva: Reserva;
    //Data atual  em que se está devolvendo o equipamento
    dataDevolucao: Date;
    //Hora atual  em que se está devolvendo o equipamento
    horaDevolucao: Date;
    obs?: string;
    //Chave do usuário responsavel pelo recebimento dos produtos
    usuario: User;
}