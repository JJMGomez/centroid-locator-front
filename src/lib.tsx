'use server'
import { cookies } from 'next/headers'

export async function setCookie(data: string){
    cookies().set('username',data);
}

export async function getCookie(){
    const username = cookies().get('username')?.value;
    if (!username){
        return null;
    }
    return username;
}