
// Objetos cursos
class Curso{
    constructor(titulo, duracion, categoria, certificado){
        this.title = titulo;
        this.duration = duracion;
        this.category = categoria;
        this.certificated = certificado;
    }
    suscribirse(){
        console.log(" Este Curso es de Categoria " + (this.category) + " y tiene " + (this.duration) ) ;
    }
}
let curso1 = new Curso( "Soporte Vital Básico", 48, "Cursos RCP", "Internacional");
curso1.suscribirse();
let curso2 = new Curso("Electrocardiografia", 24, "Cursos Complementarios", "Internacional");
curso2.suscribirse();



        



