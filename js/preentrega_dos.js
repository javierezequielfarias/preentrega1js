/*let alumno
let continuar
let nota
let sumatoria = 0
let promedio = 0
let mejorAlumno
let mejorPromedio = 0
let mejorMateria
const NOTAS = 3*/


/*do {
    alumno = prompt('Ingrese nombre del alumno')
    materia = prompt('Ingrese materia y luego las notas de los 3 trimestres')
    for (let i = 1; i <= NOTAS; i++) {
        nota = Number(prompt('Ingrese la nota del '+ i + 'º' + ' trimestre de ' + materia))
        sumatoria += nota
    }
    //promedio = sumatoria / 3
    promedio = calcular(sumatoria)
    if (promedio > mejorPromedio) {
        mejorPromedio = promedio
        mejorAlumno = alumno
        mejorMateria = materia
    }
    sumatoria = 0
    console.log(promedio)
    continuar = prompt('Desea continuar? \nPesione la tecla "s" para continuar o cualquier otra para salir')
} while (continuar == 's')
console.log(mejorPromedio)
alert('El alumno ' + mejorAlumno + ' tiene el mejor promedio , el cual es de: ' + mejorPromedio + '\nDicho promedio , pertenece a la materia: ' + mejorMateria )

function calcular(suma) {
    let resultado = suma / 3
    return resultado
}*/



let alumno=[]
let continuar
let sumatoria
let promedio
let mejorAlumno
let mejorPromedio
let mejorMateria
const NOTAS=3

class Alumno{
    constructor(nombre,curso,materia,nota,promedio){
        this.nombre=nombre
        this.curso=curso
        this.materia=materia
        this.nota=nota
        this.promedio=promedio
    }
}
do {
    Alumno.nombre=prompt('ingrese nombre')
    Alumno.curso=prompt('ingrese curso')
    Alumno.materia=prompt('ingrese materia')
    
    for (let i = 1; i <= NOTAS; i++) {
        Alumno.nota = Number(prompt('Ingrese la nota del '+ i + 'º' + ' trimestre de ' + Alumno.materia))
        sumatoria += Alumno.nota
    }
    //promedio = sumatoria / 3
    Alumno.promedio = sumatoria/3

    if (promedio > Alumno.promedio) {
        mejorPromedio = Alumno.promedio
        mejorAlumno = Alumno.nombre
        mejorMateria = Alumno.materia
    }
    for(let j=0;j<5;j++){
        alumno[j]=[Alumno.nombre,Alumno.materia,Alumno.promedio]
    }
    sumatoria = 0
    console.log(Alumno.promedio)
    console.log[alumno]
    continuar = prompt('Desea continuar? \nPesione la tecla "s" para continuar o cualquier otra para salir')
} while (continuar == 's')
alert(alumno)

































































































