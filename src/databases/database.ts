import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "localhost", // Cambia según tu configuración
  user: "root",      // Usuario de la base de datos
  password: "",      // Contraseña de la base de datos
  database: "typescript_crud", // Nombre de tu base de datos
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("Conexión exitosa a la base de datos");
    connection.release();
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
}
