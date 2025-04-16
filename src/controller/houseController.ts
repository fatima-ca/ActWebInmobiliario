//import HouseService from "../db/house"
import { House } from "../types/db/house";
import { IDBService } from "../db/types/dbService";

export class HouseController {

    dbService: IDBService;

    constructor(dbService:IDBService) { 
        this.dbService = dbService;
    
    }

  async getHousesByType(type: string, minPrice: number, maxPrice: number): Promise<House[]> {
    const houses = await this.dbService.getHouse(type, minPrice, maxPrice);
    return houses;
  }

  sum(num1: number, num2: number): number {
    if(num1<0 || num2<0) {
      throw new Error("numbers can be negative");
    }
    return num1 + num2;
  }



}