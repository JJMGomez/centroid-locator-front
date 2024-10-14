"use server";
import { cookies } from "next/headers";
import { loginUrl } from "@/app/lib/api";

export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    const response = await fetch(loginUrl, { method: "POST", body: formData });
    const data = await response.json();
    if (data.data == null) {
      return [0, data.msg];
    } else {
      cookies().set("username", data.data.username);
      return [1, "Welcome " + data.data.name];
    }
  } catch (error) {
    throw error;
  }
}

export async function getUsername() {
  const username = cookies().get("username")?.value;
  return username ? username : null;
}
