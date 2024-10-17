import {addCADUrl} from '@/app/lib/api'
import {getUsername} from '@/app/lib/authentication'

 export async function uploadCAD(_currentState: unknown, formData: FormData) {
  try {
    let url = addCADUrl
    let username = await getUsername()
    formData.set("username",username?username:"Anonymous")
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      mode: "cors",
    });
    const data = await response.json();
    return [data.code, data.msg]
  } catch (error) {
    throw error;
  } 
 }