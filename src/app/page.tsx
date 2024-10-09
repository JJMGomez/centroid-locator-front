'use client'
import { redirect } from 'next/navigation'
import {Routes,Route} from 'react-router-dom'
import Login from './login/page';
import RequirAuthRoute from './requirAuthRoute';
import Upload from './upload/page';
import App from 'next/app';
import Config from './config/page';
export default function Home() {
  const username = localStorage.getItem('username');
  if (username == null){
    redirect('/login')
  }
  
  return (
    <div className="App">
            
    </div>
  );
}