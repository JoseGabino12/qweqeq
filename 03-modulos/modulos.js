export default class Fecha{
    /**
     * 
     * @param {number} dia 
     * @param {number} mes 
     * @param {number} año 
     */
    constructor(dia,mes,año){
        this.fecha = new Date(año, mes - 1, dia)
        this.diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
        this.años = ["Enero","Febrero","Marzo", "Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
        console.log('El objeto se a inicializado.')
    }
    getEdad(){
        let milsg = Date.now() - this.fecha
        let segAño = 1000 * 60  * 60 * 24 * 365
        let edad = Math.trunc(milsg / segAño);
        return edad
    }
    getFormatoCorto(){
        return `${this.fecha.getDate()} / ${this.fecha.getMonth()+ 1} / ${this.fecha.getFullYear()} `
    }
    getFormatoLargo2(){
        let dias = this.diasSemana[this.fecha.getDay()]
        let meses = this.años[this.fecha.getMonth()+ 1]
        return `${dias} ${this.fecha.getDate()} del ${meses} ${this.fecha.getFullYear()} `
    }
}
