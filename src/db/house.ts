import { House } from "../types/db/house";

const FakeHouse=[{id: 1, precio:3000, ubicacion:"Calle 123", descripcion:"Una casa...", calificaicon:4, tamanioconstruccion:200, tamanioterreno:100, duracion:300, tipo:"renta"}];

class HouseService{

    //async: funcion que se ejecuta en paralelo
   

    async getHouse(id:number, maxPrice:number, minPrice:number): Promise<House> {
        return FakeHouse[id];
    }
    /*
    async getPrecio(){
        return FakeHouse;
    }

    async getUbicacion(){

    }

    async getDescripcion(){
    }

    async getCalificacion(){
    }

    async getTamConst(){
    }

    async getTamTerr(){
    }

    async getDuracion(){
    }

    async getTipo(){
    }}*/


    
}

export default HouseService;