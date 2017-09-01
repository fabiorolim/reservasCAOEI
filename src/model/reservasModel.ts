import { Equipamento } from "./equipamentosModel";

export class Reserva {

    public constructor(private keyReserva?: string, private equipamento?: Equipamento, private dataInicio?: Date,
         private dataFim?: Date, private horaInicio?: Date, private horaFim?: Date, private concluida?: string) {
            this.equipamento = equipamento;
            this.dataFim = dataFim;
            this.dataInicio = dataInicio;
            this.keyReserva = keyReserva;
            this.horaInicio= horaInicio;
            this.horaFim = horaFim;
            this.concluida = concluida;
    }

    getKey(){
        return this.keyReserva;
    }

    getConcluida(){
        return this.concluida;
    }

}