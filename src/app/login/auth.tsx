"use server"
import { cookies } from 'next/headers';

export async function auth(_currentState: unknown, data: FormData) {
    fetch("http://127.0.0.1:8000/user/login", {
        method: "POST",
        body: data,
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.data == null) {
                console.log(data.msg)
            } else {
                console.log(data.data.username)
                cookies().set("currentUser", data.data.username)
            }
        })
        .catch((err) => {
            console.log(err.message);
        });
};
