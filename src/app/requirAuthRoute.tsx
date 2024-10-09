import { Navigate , useLocation } from "react-router"

export default function RequirAuthRoute({children}) {
  //获取到locationStorage中的token
  const username = localStorage.getItem('username')

  //获取location
  const { pathname} = useLocation()
  if(username == null){
    return <Navigate to="/login" state={{returnURL:pathname}}></Navigate>
  }
  //如果存在 则渲染标签中的内容
  return children
 
}