import { Reserva } from "./reservasModel";
import { User } from "../providers/auth/user";

export class Devolucao {
    
    $key?: string;
    id?: string;
    reserva: Reserva;
    //Data atual  em que se está devolvendo o equipamento
    dataDevolucao?: Date;
    //Hora atual  em que se está devolvendo o equipamento
    horaDevolucao?: Date;
    dateEfivaDevolucao?: Date;
    hotaEfetivaDevolucao?: Date;
    obs?: string;
    //Chave do usuário responsavel pelo recebimento dos produtos
    status: string;
    //Aberta usuário abre a devolução para entregar um produto
    //Efetivada responsável recebe o produto confere e efetiva
    //usuario: User;
}