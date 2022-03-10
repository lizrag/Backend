import fs from 'fs';

const productos ={};

class archivoProductos {
    constructor (title,price, thumbnail){
        this.title = title,
        this.price =price,
        this.thumbnail = thumbnail;
    }
}

async function crear () {
    try{
        await fs.writeFile("archivos.txt")
        console.log('creado')
    }
    catch (err) {
        console.log('error:'+err)
    }
}
crear()