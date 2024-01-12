//PREENTREGA1

/*let alumno=[]*/
/*let nombre_max
let apellido_max
let materia_max
let promedio_max
let promedio
let sumatoria = 0

let cantidad_alumnos = prompt(Number('Ingrese la cantidad de alumnos del curso'))

class Alumno{
    constructor (nombre , apellido , curso , materia , nota1 , nota2 , nota3 , suma){
        this.nombre = nombre
        this.apellido = apellido
        this.curso = curso
        this.materia = materia
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.suma = suma
    }
}       

let datos_alumno = []

for (let i = 0 ; i<cantidad_alumnos ; i++){
    datos_alumno.push(new Alumno(prompt('Ingrese nombre') , prompt('Ingrese apellido') , prompt('Ingrese curso') , prompt('Ingrese materia') , prompt('Ingrese nota1') , prompt('Ingrese nota2') , prompt('Ingrese nota3') , promedio))

    sumatoria = Number((Alumno.nota1 + Alumno.nota2 + Alumno.nota3))
    console.log(sumatoria)

    console.table([datos_alumno])
    if(i==2){
        promedio = sumatoria/3
        this.suma = promedio
    }
    
   // datos_alumno.forEach((elem)=>{
    //    elem.nombre + elem.apellido + elem.materia + elem.promedio;
//})
}
//alert([datos_alumno])
//alert(datos_alumno.forEach((elem)=>{
    //elem.nombre + elem.apellido + elem.materia + elem.promedio
//}))

for(let dato of datos_alumno){
    console.log(dato)
    alert([datos_alumno])
}
*/

/*let cantidad_alumnos
let nombre_alumno
let curso_alumno
let materia_alumno
let nota_alumno
let nota1_alumno
let nota2_alumno
let nota3_alumno
let suma = 0
let promedio_alumno
let acumulador = 0
let datos_alumnos = []
let max_alumno
let max_promedio = 0
let max_materia
let materias = ['Literatura' , 'Matematica' , 'Historia' , 'Geografia' , 'Informatica' , 'Quimica' , 'Fisica' , 'Biologia' ,'Filosofia' , 'Educacion fisica']


cantidad_alumnos = Number(prompt('Ingrese cantidad de alumnos del curso'))

class Alumno{
    constructor (nombre , curso , materia , nota1 , nota2 , nota3 , promedio){
        this.nombre = nombre
        this.curso = curso
        this.materia = materia
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.promedio = promedio
    }
}

do{
    nombre_alumno = prompt('Ingrese nombre del alumno')
    curso_alumno = prompt('Ingrese curso del alumno')
    materia_alumno = prompt('Ingrese materia del alumno')
    nota1_alumno = Number(prompt('Ingrese nota 1 del alumno'))
    nota2_alumno = Number(prompt('Ingrese nota 2 del alumno'))
    nota3_alumno = Number(prompt('Ingrese nota 3 del alumno'))
    suma = nota1_alumno + nota2_alumno + nota3_alumno
    promedio_alumno = suma/3
    datos_alumnos.push(new Alumno(nombre_alumno , curso_alumno , materia_alumno , nota1_alumno , nota2_alumno , nota3_alumno , promedio_alumno))
    suma = 0
    //console.log([datos_alumnos])
    acumulador++
    if(promedio_alumno>max_promedio){
        max_alumno = nombre_alumno
        max_materia = materia_alumno
        max_promedio = promedio_alumno
    }
}while(acumulador!=cantidad_alumnos)*/

//for(let prop in Alumno){
//    alert('Objeto:' + prop + ':' + [Alumno])
//}

/*for(let dato of datos_alumnos){
    //console.log(dato)
    console.table(dato)
    //console.log(dato + ':' + datos_alumnos[dato])
    //alert(datos_alumnos[dato])
}

console.log('El alumno: ' , max_alumno , ' tiene un promedio de: ' , max_promedio , ' en la materia: ' , max_materia)
alert('El alumno: ' + max_alumno + ' tiene un promedio de: ' + max_promedio + ' en la materia: ' + max_materia)
*/

//function pedir_datos(nombA , cursoA , matA , n1 , n2 , n3){
  //  nombA = prompt('Ingrese nombre del alumno')
    //cursoA = prompt('Ingrese curso del alumno')
    //matA = prompt('Ingrese materia del alumno')
    //n1 = Number(prompt('Ingrese nota 1 del alumno'))
    //n2 = Number(prompt('Ingrese nota 2 del alumno'))
    //n3 = Number(prompt('Ingrese nota 3 del alumno'))
    //return nombA , cursoA , matA , n1 , n2 , n3
//}

//ULTIMA VERSION PREENTREGA2

/*let cantidad_alumnos

let nombre_alumno

let curso_alumno

let materia_alumno

let nota_alumno

let nota1_alumno

let nota2_alumno

let nota3_alumno

let suma = 0

let promedio_alumno

let acumulador = 0

let datos_alumnos = []

let max_alumno

let max_promedio = 0

let max_materia

let alumnos_ap = []

let alumnos_desap = []

let materias = ['Literatura' , 'Matematica' , 'Historia' , 'Fisica' , 'Geografia' , 'Biologia' , 'Quimica' , ' Filosofia' , 'Idiomas' , 'Educacion Fisica']

let acumulador_ap = 0

let acumulador_desap = 0

cantidad_alumnos = Number(prompt('Ingrese cantidad de alumnos del curso'))

class Alumno{

constructor (nombre , curso , materia , nota1 , nota2 , nota3 , promedio){

this.nombre = nombre

this.curso = curso

this.materia = materia

this.nota1 = nota1

this.nota2 = nota2

this.nota3 = nota3

this.promedio = promedio

}

}

do{

nombre_alumno = prompt('Ingrese nombre del alumno')

curso_alumno = prompt('Ingrese curso del alumno')

//materia_alumno = prompt('Ingrese materia del alumno')

//materia_alumno = Number(prompt('Ingrese una materia del listado para cargar las notas:')

for (let materia of materias){

nota1_alumno = Number(prompt('Ingrese nota 1 de: ' + nombre_alumno + ' en la materia: ' + materia))

nota2_alumno = Number(prompt('Ingrese nota 2 de: ' + nombre_alumno + ' en la materia: ' + materia))

nota3_alumno = Number(prompt('Ingrese nota 3 de: ' + nombre_alumno + ' en la materia: ' + materia))

//pedir_datos(nombre_alumno , curso_alumno , materia_alumno , nota1_alumno , nota2_alumno , nota3_alumno)

suma = nota1_alumno + nota2_alumno + nota3_alumno

promedio_alumno = suma/3

materia_alumno = materia

datos_alumnos.push(new Alumno(nombre_alumno , curso_alumno , materia_alumno , nota1_alumno , nota2_alumno , nota3_alumno , promedio_alumno))

suma = 0

if (promedio_alumno>=7){

console.log(nombre_alumno + ':' + materia_alumno + ' aprobado')

acumulador_ap++

}

else {

console.log(nombre_alumno + ':' + materia_alumno + ' desaprobado')

acumulador_desap++

}

if (acumulador_ap == 10 && materia_alumno === 'Educacion Fisica' ){

alumnos_ap.push(nombre_alumno)

acumulador_ap = 0

acumulador_desap = 0

}

if (acumulador_desap>=1 && materia_alumno === 'Educacion Fisica'){

alumnos_desap.push(nombre_alumno)

acumulador_ap = 0

acumulador_desap = 0

}

}

//console.log(datos_alumnos)

acumulador++

//acumulador_ap = 0

//acumulador_desap = 0

if(promedio_alumno>max_promedio){

max_alumno = nombre_alumno

max_materia = materia_alumno

max_promedio = promedio_alumno

}

}while(acumulador!=cantidad_alumnos)

for(let dato of datos_alumnos){

console.log(dato)

}

console.log('Aprobados en todas las materias: \n')

console.log(alumnos_ap.join(","))

console.log('Desaprobados en al menos una materia: \n')

console.log(alumnos_desap.join(","))

console.log('El alumno: ' , max_alumno , ' tiene un promedio de: ' , max_promedio , ' en la materia: ' , max_materia)

alert('El alumno: ' + max_alumno + ' tiene un promedio de: ' + max_promedio + ' en la materia: ' + max_materia)*/



//PREENTREGA3

let cantidad_alumnos

let nombre_alumno

let curso_alumno

let materia_alumno

let nota_alumno

let nota1_alumno

let nota2_alumno

let nota3_alumno

let suma = 0

let promedio_alumno

let acumulador = 0

let datos_alumnos = []

let max_alumno

let max_promedio = 0

let max_materia

let alumnos_ap = []

let alumnos_desap = []

let materias = ['Literatura' , 'Matematica' , 'Historia' , 'Fisica' , 'Geografia' , 'Biologia' , 'Quimica' , ' Filosofia' , 'Idiomas' , 'Educacion Fisica']

let acumulador_ap = 0

let acumulador_desap = 0

cantidad_alumnos = Number(prompt('Ingrese cantidad de alumnos del curso'))

class Alumno{

constructor (nombre , curso , materia , nota1 , nota2 , nota3 , promedio){

this.nombre = nombre

this.curso = curso

this.materia = materia

this.nota1 = nota1

this.nota2 = nota2

this.nota3 = nota3

this.promedio = promedio

}

}

do{

nombre_alumno = prompt('Ingrese nombre del alumno')

curso_alumno = prompt('Ingrese curso del alumno')

//materia_alumno = prompt('Ingrese materia del alumno')

//materia_alumno = Number(prompt('Ingrese una materia del listado para cargar las notas:')

for (let materia of materias){

nota1_alumno = Number(prompt('Ingrese nota 1 de: ' + nombre_alumno + ' en la materia: ' + materia))

nota2_alumno = Number(prompt('Ingrese nota 2 de: ' + nombre_alumno + ' en la materia: ' + materia))

nota3_alumno = Number(prompt('Ingrese nota 3 de: ' + nombre_alumno + ' en la materia: ' + materia))

//pedir_datos(nombre_alumno , curso_alumno , materia_alumno , nota1_alumno , nota2_alumno , nota3_alumno)

suma = nota1_alumno + nota2_alumno + nota3_alumno

promedio_alumno = suma/3

materia_alumno = materia

datos_alumnos.push(new Alumno(nombre_alumno , curso_alumno , materia_alumno , nota1_alumno , nota2_alumno , nota3_alumno , promedio_alumno))

suma = 0

if (promedio_alumno>=7){

console.log(nombre_alumno + ':' + materia_alumno + ' aprobado')

acumulador_ap++

}

else {

console.log(nombre_alumno + ':' + materia_alumno + ' desaprobado')

acumulador_desap++

}

if (acumulador_ap == 10 && materia_alumno === 'Educacion Fisica' ){

alumnos_ap.push(nombre_alumno)

acumulador_ap = 0

acumulador_desap = 0

}

if (acumulador_desap>=1 && materia_alumno === 'Educacion Fisica'){

alumnos_desap.push(nombre_alumno)

acumulador_ap = 0

acumulador_desap = 0

}

}

//console.log(datos_alumnos)

acumulador++

//acumulador_ap = 0

//acumulador_desap = 0

if(promedio_alumno>max_promedio){

max_alumno = nombre_alumno

max_materia = materia_alumno

max_promedio = promedio_alumno

}

}while(acumulador!=cantidad_alumnos)

for(let dato of datos_alumnos){

console.log(dato)

}

console.log('Aprobados en todas las materias: \n')

console.log(alumnos_ap.join(","))

console.log('Desaprobados en al menos una materia: \n')

console.log(alumnos_desap.join(","))

console.log('El alumno: ' , max_alumno , ' tiene un promedio de: ' , max_promedio , ' en la materia: ' , max_materia)

alert('El alumno: ' + max_alumno + ' tiene un promedio de: ' + max_promedio + ' en la materia: ' + max_materia)