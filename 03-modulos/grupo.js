import Alumno from "../alumno/alumno.js"
export default class Grupo{
    constructor(semestre, literal){
        this.semestre = semestre
        this.literal = literal
        this.alumnos = Array()
    }
    agregarAlumno(alumno){
        this.alumnos.push(alumno)
    }
    listarAlumnos(){
        this.alumnos.forEach((alumno,i) => {
            console.log(`${alumno.mostrarPerfil()}, ${i}`)
        })
    }
}