import {NextResponse} from "next/server"
//http:/localhost:3000/api/posts

const url = "https://jsonplaceholder.typicode.com/posts";
export const GET = async()=>{
 const response = await fetch(url);
 const data = await response.json();
 return NextResponse.json(data);
}
export const POST = async (req:Request) =>{
    const {userId,title,body} = await req.json();
    try{
        const response = await fetch(url,{
            method: "POST",
            headers:{
                "Content-type" : "applicatioln/json, charset=UTF-8",
            },
            body: JSON.stringify({
                userId,
                title,
                body
            }),
        });
        const data = await response.json();
        return NextResponse.json(data);
        } catch (error){
        return NextResponse.json({message: error.message});
    }
}