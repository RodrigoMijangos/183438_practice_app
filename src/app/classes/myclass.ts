import { Myinterface } from "../interfaces/myinterface"

export class Myclass implements Myinterface{

    matricula: string
    carrera: string
    nombre: string
    apellidos: string
    curp: string
    rfc: string
    clave_elector: string
    frase: string

    constructor(
        matricula: string,
        carrera: string,
        nombre: string,
        apellidos: string,
        curp: string,
        rfc: string,
        clave_elector: string,
        frase: string
    ){
        this.matricula = matricula
        this.carrera = carrera
        this.nombre = nombre
        this.apellidos = apellidos
        this.curp = curp
        this.rfc = rfc
        this.clave_elector = clave_elector
        this.frase = frase
    }

    inscribirse(): void {
        throw new Error("Method not implemented.")
    }

}
