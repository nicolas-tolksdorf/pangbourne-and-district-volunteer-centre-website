import React from "react";
import "./../app.css";

export function meta() {
  return [
    { title: "Pangbourne and District Volunteer Centre (Pangbourne Volunteers)" },
    { name: "description", content: "How to contact Pangbourne and District Volunteer Centre" },
  ];
}

export default function Contact() {
  return (
    <main className="flex items-center justify-center pt-8 pb-1">
      <div className="flex-1 flex flex-col items-center gap-1 min-h-0">
        <header className="flex flex-col items-center gap-1">
          <div className="w-[500px] max-w-[100vw] p-1">
          </div>
        </header>
        <div className="max-w-[650px] w-full px-1">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-0">
            <p className="bg-linear-to-r from-fuchsia-400 to-cyan-950 bg-clip-text text-left text-5xl font-extrabold text-transparent mb-1 pl-2 pt-2 pb-7">
              Contact
            </p>
            <p className="leading-6 text-gray-700 pb-4 pl-6 pr-0 text-left">
            Pangbourne and District Volunteer Centre<br/>
            Pangbourne Village Hall<br/>
            Station Road<br/>
            Pangbourne<br/>
            RG8 7AN<br/>
            </p><p className="leading-6 text-gray-700 pb-4 pl-6 pr-0 text-left">
            <b>Website:</b> <a target="_blank" href="https://pangbourne-and-district.volunteer-centre.workers.dev" className="text-blue-700 underline hover:text-blue-900">https://pangbourne-and-district.volunteer-centre.workers.dev</a><br/>
            <b>Telephone:</b> 0118 984 4586<br/>
            <b>Email:</b> <a href="mailto:pangbournevolunteers@outlook.com" className="text-blue-700 underline hover:text-blue-900">pangbournevolunteers@outlook.com</a><br/>
            </p><p className="leading-6 text-gray-700 pb-4 pl-6 pr-0 text-left">
            <b>Honorary Chair</b><br /><span className="pl-4">Reverend Alan Gates: <a href="mailto:pangbournevolunteers@outlook.com" className="text-blue-700 underline hover:text-blue-900">pangbournevolunteers@outlook.com</a></span><br/>
            <b>Honorary Secretary</b><br /><span className="pl-4">Brenda Hook: <a href="mailto:pangbournevolunteers@outlook.com" className="text-blue-700 underline hover:text-blue-900">pangbournevolunteers@outlook.com</a></span><br/>
            <br/>
            </p>
          </nav>
          <br />
        </div>
      </div>
    </main>
  );
}
