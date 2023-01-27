import fs from 'fs';

const path = './files/productos.json'

export default class productManager {
    consultarProductos = async() => {
        try {
            if (fs.existsSync(path)) {
                const data = await fs.promises.readFile(path, 'utf-8');
                const products = JSON.parse(data);
                return products;
            }else{
                return [];
            }

        }catch (error){
            console.log(error);
        }
    }

    addProducts = async(product) => {
        // designa a products con el parse de consultar productos
        const products = await this.consultarProductos();
        //ese if se ejecuta con todo lo que ingrese a products
        if (products.length === 0) {
            product.id = 1;
        }else{
            product.id = products[products.length -1].id +1;        
        }
        //
        
        
        //cada que ingresa un producto se ejecuta la función: asignar a la var mismoCodigo el resultado del filter 
        //que verifica que compara el codigo de cada elemento con el que va a ingresar
        let mismoCodigo = await products.filter(e => e.code === product.code);

        if(mismoCodigo.length > 0 ){
            console.log(`Código ya asignado: ${product.code}`);
            return;
        }

        products.push(product);

        await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'));
        return product;
    }

    getProductById = async(id) => {
        const products = await this.consultarProductos();

        let productFound = await products.find(e => e.id === id)
        
        if(productFound === undefined){
            return "not found";
        }else{
            return productFound;
        }
        
    }

    productDeleted = [];

    deleteProduct(id){
        let n = products.indexOf(products.find(e => e.id === id))
        //return `the index is ${n}`;
       
        const productDeleted = this.products.splice(n, 1);
        return `este es el producto borrado: ${productDeleted}`;
    }
}