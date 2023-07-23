import { defineStore } from "pinia";
const useAuth=defineStore('auth',{
    state:()=>{
        return {
                    token:null,
                    baseURL:'http:127.0.0.1:800/api'
                }
    },
    actions:{
        async register(name:string,email:string,password:string){
            //TODO
            const uri=`${this.baseURL}/auth/register`
            const rawResponse=fetch(uri,{
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
            const response=(await rawResponse).json();
        },
        async login(email:string,password:string){
            //TODO
            const uri=`${this.baseURL}/auth/login`
            const rawResponse=fetch(uri,{
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
            const response=(await rawResponse).json();
        },
        async logout(){
                    //TODO
        },
        async getNotes(){
            //TODO
            const uri=`${this.baseURL}/notes`
            const rawResponse=fetch(uri,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json',
                    'Authorization':`Bearer ${this.token}`
                }
            })
            const response=(await rawResponse).json();
        },
        async createNote(content:string){
            //TODO
            const uri=`${this.baseURL}/notes`
            const rawResponse=fetch(uri,{
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
            const response=(await rawResponse).json();
        }
    }
})

export default useAuth;