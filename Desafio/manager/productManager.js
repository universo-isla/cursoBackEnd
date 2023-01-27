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
        const products = await this.consultarProductos();
        if (products.length === 0) {
            product.id = 1;
        }else{
            product.id = products[products.length -1].id +1;        
        }
        products.push(product);

        let mismoCodigo = await this.products.filter(e => e.code === product.code);
        
        if(mismoCodigo.length > 0 ){
            console.log(`Código ya asignado: ${code}`);
            return;
        }else{
            this.products.push(product);
        } 

        await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'));
        return product;
    }
}