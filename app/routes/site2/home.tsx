import React from "react";
import "./../../app-site2.css";

export default function Site2Home() {
  return (
    <main className="flex items-center justify-center pt-8 pb-1">
      <div className="flex-1 flex flex-col items-center gap-1 min-h-0">
        <header className="flex flex-col items-center gap-1">
          <div className="w-[500px] max-w-[100vw] p-1">
            {/* <h1 className="text-blue-700 font-cursive text-3xl text-center mb-1">
              Pangbourne and District Volunteer Centre
              (Pangbourne Volunteers)
            </h1> */}
            {/* 
            <img
              src={imgAssistanceIntoCar}
              alt="Volunteer providing assistance into vehicle"
              className="block w-full dark:hidden"
            />
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            /> 
            */}
          </div>
        </header>
        <div className="max-w-[650px] w-full px-1">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-0">
            <p className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-left text-5xl font-extrabold text-transparent mb-1 pl-2 pt-2 pb-7">
              Welcome
            </p>
            <p className="leading-6 text-gray-700 text-center pb-2 pl-6 pr-10 italic text-left">
One way or another you have navigated your way to the website for Pangbourne and District Volunteer Centre (Pangbourne Volunteers).
The following pages give a potted history of our foundation, ways to become a volunteer and ways to access our services.
</p><p className="leading-6 text-gray-700 text-center pb-2 pl-6 pr-10 italic text-left">
It is my privilege both to be a volunteer driver and to be the voluntary chair of Pangbourne Volunteers. I have been a volunteer driver for about 6 years and chair for around two years taking over from John Chapman who has held the role for several decades. Soon to become an octogenarian I realise that I will not be able to complete as many years’ service as some of my fellow trustees and drivers… I say this because age is no barrier to volunteering with Pangbourne Volunteers.
We have been serving our local communities since the eighties and expect to continue doing so for many years to come.
One of the following pages includes an invitation to come on board either as a driver or in the office. 
</p><p className="leading-6 text-gray-700 text-center pt-2 pb-0 pl-6 pr-10 italic text-left">
I can be contacted via: <a href="mailto:pangbournevolunteers@outlook.com" className="text-blue-700 underline hover:text-blue-900">pangbournevolunteers@outlook.com</a>
</p><p className="leading-6 text-gray-700 text-center pb-2 pl-6 pr-10 italic text-left">
and will be happy to tell you more about Pangbourne Volunteers and how you can become part of this enterprise.
</p>
<p className="leading-6 text-gray-900 text-left pb-3 pt-5 pl-4 text-3xl">
  <span style={{ fontFamily: "'Dancing Script', cursive" }}>
    Alan
  </span>
  <link
  href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
  rel="stylesheet"
/></p>
<p className="leading-6 text-gray-700 text-left pb-0 pl-2">
Reverend Alan Gates
</p><p className="leading-6 text-gray-700 text-left pb-1 pl-2 text-sm">
Honorary chair Pangbourne and District Volunteer Centre
</p><p className="leading-6 text-gray-700 text-left pb-4 pl-2 pt-5">
PS. We meet socially twice a year chiefly to get to know each other, share food and drink and to enjoy a little live / light entertainment.
            </p>
            {/* <ul>
              {resources.map(({ href, text, icon }) => (
                <li key={href}>
                  <a
                    className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                    {text}
                  </a>
                </li>
              ))}
              <li className="self-stretch p-3 leading-normal">{message}</li>
            </ul> */}
          </nav>
          <br />
        </div>
      </div>
    </main>
  );
}
