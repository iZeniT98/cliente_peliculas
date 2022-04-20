export class Pelicula {
    identificador:number;
    titulo:string;
    sinopsis:string;
    estreno:number;
    imagen:String;
    video:string;
    constructor(identificador:number, titulo:string, sinopsis:string, estreno:number, imagen:String, video:string) {
        this.identificador=identificador;
        this.titulo=titulo;
        this.sinopsis=sinopsis;
        this.estreno=estreno;
        this.imagen=imagen;
        this.video=video;
    }
}


