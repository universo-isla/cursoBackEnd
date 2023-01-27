import productManager from "./manager/productManager.js";

const manager = new productManager();

const ManagerProductos = async(name, description, price, thumbnail, code, stock) => {
    let products = await manager.consultarProductos();
    console.log(products);

    const product = {
        name,
        description,
        price,
        thumbnail,
        code,
        stock,
    }

    await manager.addProducts(product);

    products = await manager.consultarProductos();

    console.log(products);
}

//ManagerProductos();

ManagerProductos("Suéter Tigre1", "Suéter de verano, punto, motivo de tigre", 350, "http://tiendaPrendas.com/imgs/sueteres/sueterTigre.png", "1234D", 25);