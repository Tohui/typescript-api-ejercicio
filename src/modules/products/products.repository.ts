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
  



   async findById(id:string){
    return await this.queryOne("select * from items where id = ?",[id])
   }

   async findAll(){
      return await this.queryRows('Select * from items', [])
   }

   async deleteById (id:string){
      await this.queryExecute('DELETE FROM items WHERE id = ? ',[id])
      
   }

   async create(name:string, description:string){
      await this.queryExecute('INSERT INTO items (name, description) values (?, ?)',[name, description])
   }

   async update(id:string, name:string, description:string){
     await this.queryExecute("UPDATE items SET name = ?, description = ? WHERE id = ?",[name, description, id])
   }


   
}




