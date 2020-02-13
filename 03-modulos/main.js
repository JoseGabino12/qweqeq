import Fecha from "./modulos.js"
import Alumno from "../alumno/alumno.js"
import Grupo from "./grupo.js"

class Main {
    constructor(){
        this.alumno = new Alumno("JUAN", 20467899, new Fecha(5,12,2000))
        this.grupo = new Grupo(2, "G")
    }
    probarFechas(){
        let fechaNueva = new Fecha(26,2,2001)

        console.log(fechaNueva.getFormatoCorto())
        console.log(fechaNueva.getFormatoLargo2())
        console.log(fechaNueva.getEdad())
        
    }
    probarAlumno(){
        console.log(this.alumno.getEdad())
        console.log(this.alumno.mostrarPerfil())


    }
    probarCiclo(){
        let dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves']
        dias.forEach( (dia, i) =>{
        console.log( `${dia}, ${i}`)})
    }
    probarGrupo(){
        this.grupo.agregarAlumno(this.alumno)
        this.grupo.listarAlumnos()
    }
}
let app = new Main()

app.probarGrupo()

