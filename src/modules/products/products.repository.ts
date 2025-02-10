import { promises } from "dns"
import {pool} from "../../databases/database"
import {RowDataPacket} from "mysql2/promise"

export  class productsRepository {

   private async queryOne<T extends RowDataPacket>(sql:string, params:any[]): Promise<T | null>{
    const [rows] =  await pool.query<T[]>(sql,params);
    return rows.length > 0 ? rows[0] : null;
   }

   async findById(id:string){
    return await this.queryOne("select * from items where id = ?",[id])
   }


   
}




