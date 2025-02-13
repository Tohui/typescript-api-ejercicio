import { promises } from "dns"
import {pool} from "../../databases/database"
import {RowDataPacket} from "mysql2/promise"

export  class productsRepository {

   private async queryOne<T extends RowDataPacket>(sql:string, params:any[]): Promise<T | null>{
    const [rows] =  await pool.query<T[]>(sql,params);
    return rows.length > 0 ? rows[0] : null;
   }

   private async queryRows<T extends RowDataPacket>(sql:string,params:any[]):Promise<T[]>{
      const [rows] = await pool.query<T[]>(sql,params)
      return rows
   }

   private async queryExecute(sql: string, params: any[]): Promise<void> {
      await pool.query(sql, params);
  }
  //==============================================================================

  findById = async (id: string) => 
   this.queryOne("SELECT * FROM items WHERE id = ?", [id]);

  findAll = async () => 
   this.queryRows('SELECT * FROM items', []);

  deleteById = async (id: string) => 
   this.queryExecute('DELETE FROM items WHERE id = ?', [id]);

  create = async (name: string, description: string) => 
   this.queryExecute('INSERT INTO items (name, description) VALUES (?, ?)', [name, description]);

  update = async (id: string, name: string, description: string) => 
   this.queryExecute("UPDATE items SET name = ?, description = ? WHERE id = ?", [name, description, id]);
}




