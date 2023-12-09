let alumno
let continuar = 's'
let nota
let sumatoria = 0
let promedio = 0
let mejorAlumno
let mejorPromedio = 0


while (continuar == 's') {
    alumno = prompt('ingrese nombre')
    for (let i = 0; i < 3; i++) {
        nota = Number(prompt('ingrese nota'))
        sumatoria += nota
    }
    //promedio = sumatoria / 3
    promedio = calcular (sumatoria)
    if (promedio > mejorPromedio) {
        mejorPromedio = promedio
        mejorAlumno = alumno
    }
    sumatoria = 0
    console.log(promedio)
    continuar = prompt('desea continuar s/n')
}
console.log(mejorPromedio)
alert('el alumno ' + mejorAlumno + ' tiene el mejor promedio , el cual es de: ' + mejorPromedio)

function calcular (suma){
    let resultado = suma/3
    return resultado
}































































































