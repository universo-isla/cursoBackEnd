import productManager from "./manager/productManager.js";

const manager = new productManager();

const ManagerProductos = async(name, description, price, thumbnail, code, stock, id) => {
    let products = await manager.consultarProductos();

    const product = {
        name,
        description,
        price,
        thumbnail,
        code,
        stock,
    }

    await manager.addProducts(product);

    manager.getProductById(id);

}

ManagerProductos("Suéter Tigre1", "Suéter de verano, punto, motivo de tigre", 350, "http://tiendaPrendas.com/imgs/sueteres/sueterTigre.png", "1234D", 25);
ManagerProductos("Suéter Tigre3", "Suéter de verano, punto, motivo de tigre", 350, "http://tiendaPrendas.com/imgs/sueteres/sueterTigre.png", "1239", 25);
ManagerProductos("Suéter Perro", "Suéter de verano, punto, motivo de tigre", 350, "http://tiendaPrendas.com/imgs/sueteres/sueterTigre.png", "12B", 25);
manager.getProductById(1);

