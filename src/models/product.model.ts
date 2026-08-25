import pool from "../config/db.js"; //importamos el pool de conexión a PostgreSQL

//función para obtener todos los productos de la bd
export const getAllProducts = async () => {
    const result = await pool.query("SELECT * FROM products"); //ejecutamos la consulta para obtener todos los productos

    return result.rows; //retornamos las filas obtenidas de la consulta
}

