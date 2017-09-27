import { Equipamento } from "./equipamentosModel";
import { Devolucao } from "./devolucaoModel";
import { User } from "../providers/auth/user";

export class Reserva {

    $key?: string;
    id?: string;
    equipamento: Equipamento;
    //Data atual em que está sendo feita a reserva
    data: Date;
    //Hora atual em que está sendo feita a reserva
    hota: Date;
    dataFim: Date;
    dataInicio: Date;
    horaInicio: Date;
    horaFim: Date;
    motivo: string;
    utilizarFora: boolean;
    status?: string;
    //aberta
    //efetivada
    //cancelada
    //finalizada
    dataEfetivada?: Date;
    horaEfetivada?: Date;
    devolucao?: Devolucao;
    //Chave do usuário que faz a reserva
    //reservante?: User;
    //Chave do usuário que entrega o produto
    efetivante?: User;

}