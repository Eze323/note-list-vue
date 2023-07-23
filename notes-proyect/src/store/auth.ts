import { defineStore } from "pinia";
//import axios from 'axios';

//axios.baseURL='http:localhost:3001/api';
const useAuth=defineStore('auth',{
    state:()=>{
        return {
                    token:null,
                    baseURL:'http://localhost:3001/api'
                }
    },
    actions:{
        async register(name:string,email:string,password:string){
            //TODO
            const uri=`${this.baseURL}/auth/register`
            const rawResponse=await fetch(uri,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                body:JSON.stringify({
                                    name,
                                    email,
                                    password
                                })
            })
            const response=await rawResponse.json();
            if(response.status==false){
                    //Error
                    return false;
            }else{
                //Success
                this.token=response.token
                return true;
            }
        },
        async login(email:string,password:string){
            //TODO
            const uri=`${this.baseURL}/auth/login`
            const rawResponse=await fetch(uri,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                body:JSON.stringify({
                                    email,
                                    password
                                })
            })
            const response=await rawResponse.json();
            if(response.status==false){
                //Error
                this.token=null;
                return false;
        }else{
            //Success
            this.token=response.token
            return true;
        }
        },
        async logout(){
            this.token=null;
        },
        async getNotes(){
            //TODO
            const uri=`${this.baseURL}/notes`
            const rawResponse=await fetch(uri,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json',
                    'Authorization':`Bearer ${this.token}`
                }
            })
            const response=await rawResponse.json();
            return response;
        },
        async createNote(content:string){
            //TODO
            const uri=`${this.baseURL}/notes`
            const rawResponse=await fetch(uri,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json',
                    'Authorization':`Bearer ${this.token}`
                },
                body:JSON.stringify({
                          content
                })
            })
            const response=await rawResponse.json();
            return response.status;
        }
        

    }
})

export default useAuth;