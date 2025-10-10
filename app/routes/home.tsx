import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import resumes from "../constants/index"


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for our homepage" },
  ];
}

export default function Home() {
  return <>
  <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <section className="main-section">
      <Navbar/>
      <div className="page-heading">
        <h1>Track Your Applications And Resume Ratings</h1>
        <h2>
          Review your submissions and check AI-powered apps
        </h2>

      </div>
    </section>
    {resumes.length >0 && 
  (
    <div className="resumes-section">
      {resumes.map(callbackfn:(resume)=>)}

    </div>
  )}
  </main>
  
  
  
  </>;
}
