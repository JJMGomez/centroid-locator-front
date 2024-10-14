import { parseUrl } from "@/app/lib/api";

export async function parse(_currentState: unknown, formData: FormData) {
  try {
    const response = await fetch(parseUrl, {
      method: "POST",
      body: formData,
      mode: "cors",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
