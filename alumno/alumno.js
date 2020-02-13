
export default class Alumno{
    /**
    @param {string} nombre el nombre del alumno
    @param {number} cuenta el nombre del alumno
    @param {Date} fecha el nombre del alumno
    **/
    
    constructor(nombre, cuenta, fecha = new Date(2000,1,1)){
        this.nombre = nombre
        this.fecha_de_nacimiento = fecha
        this.no_cuenta = cuenta

    }

    getEdad(){
        return this.fecha_de_nacimiento.getEdad()
    }
    mostrarPerfil(){
        return `SOY ${this.nombre} NACÍ EL ${this.fecha_de_nacimiento.getFormatoCorto()} CON NUMERO DE CUENTA ${this.no_cuenta}`
    }

}


