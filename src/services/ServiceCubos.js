import axios from "axios";
import Global from "@/Global";

export default class ServiceCubos {

    getComentarios(id){
        return new Promise(function(resolve){

            var request = '/api/ComentariosCubo/GetComentariosCubo/'+id;
            var url = Global.urlCubos + request;
            axios.get(url).then(response=>{
                resolve(response.data);
            })
        })
    }

    getCubosMarcas(marca){

        return new Promise(function(resolve){

            var request = '/api/Cubos/CubosMarca/'+marca;
            var url = Global.urlCubos + request;
            axios.get(url).then(response=>{
                resolve(response.data);
            })
        })
    }

    getCubos(){

        return new Promise(function(resolve){

            var request = 'api/Cubos';
            var url = Global.urlCubos + request;
            axios.get(url).then(response=>{
                resolve(response.data);
            })
        })
    }

    getMarcas(){

        return new Promise(function(resolve){

            var request = '/api/Cubos/Marcas';
            var url = Global.urlCubos + request;
            axios.get(url).then(response=>{
                resolve(response.data);
            })
        })
    }
}