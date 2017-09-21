import { Equipamento } from "./equipamentosModel";

export interface Reserva {

    $key?: string;
    equipamento: Equipamento;
    dataFim: Date;
    dataInicio: Date;
    horaInicio: Date;
    horaFim: Date;
    concluida: boolean;

}