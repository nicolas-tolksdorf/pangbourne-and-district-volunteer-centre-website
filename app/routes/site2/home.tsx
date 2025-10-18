import React from "react";
import "./../../app-site2.css";

export default function Site2Home() {
  return (
    <main className="flex items-center justify-center pt-8 pb-1">
      <div className="flex-1 flex flex-col items-center gap-1 min-h-0">
        <header className="flex flex-col items-center gap-1">
          <div className="w-[500px] max-w-[100vw] p-1">
          </div>
        </header>
        <div className="max-w-[850px] w-full px-1">
          <p style={{ fontSize: '30pt', color: 'rgba(255, 53, 164, 0.86)' }} className="pb-2">Welcome</p>
          <p className="font-normal pb-4">          
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="w-full p-4 border" style={{ color: '#ffffffff', backgroundColor: 'rgba(117, 20, 196, 0.99)' }}>
              {/* <h3 className="text-lg font-semibold mb-2">Panel Left</h3> */}
              <p className="font-normal pb-4">
                One way or another you have navigated your way to the website for Pangbourne and District Volunteer Centre (Pangbourne Volunteers). The following pages give a potted history of our foundation, ways to become a volunteer and ways to access our services.
              </p>
            </div>
            <div className="w-full p-4" style={{ backgroundColor: 'rgba(53, 107, 255, 0.92)' }}>
            </div>
          </div>

          {/* <p style={{ paddingTop: '10px'}}></p>
          <p style={{ height: 4, color: 'rgba(117, 20, 196, 0.98)', backgroundColor: 'rgba(117, 20, 196, 0.15)' }}></p>
          <p className="p-1"></p> */}

          {/* Two-column panel, equal width */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="w-full p-4 border" style={{ color: '#ffffffff', backgroundColor: 'rgba(117, 20, 196, 0.99)' }}>
              {/* <h3 className="text-lg font-semibold mb-2">Panel Left</h3> */}
              {/* <p className="font-normal pb-4">
                One way or another you have navigated your way to the website for Pangbourne and District Volunteer Centre (Pangbourne Volunteers). The following pages give a potted history of our foundation, ways to become a volunteer and ways to access our services.
              </p> */}
              <p className="font-normal pb-4">
                It is my privilege both to be a volunteer driver and to be the voluntary chair of Pangbourne Volunteers. I have been a volunteer driver for about 6 years and chair for around two years taking over from John Chapman who has held the role for several decades. Soon to become an octogenarian I realise that I will not be able to complete as many years’ service as some of my fellow trustees and drivers… I say this because age is no barrier to volunteering with Pangbourne Volunteers. We have been serving our local communities since the eighties and expect to continue doing so for many years to come. One of the following pages includes an invitation to come on board either as a driver or in the office.
              </p>
              <p className="font-normal pb-4">
                I can be contacted via: pangbournevolunteers@outlook.com and will be happy to tell you more about Pangbourne Volunteers and how you can become part of this enterprise.
              </p>
              <p className="font-normal pb-4">
              
              </p><p className="font-normal pb-4">
                Alan
              </p><p className="font-normal pb-1">
                Reverend Alan Gates
              </p>
              <p className="font-normal pb-4">
                Honorary chair Pangbourne and District Volunteer Centre
              </p>
            </div>
            <div className="w-full p-4" style={{ backgroundColor: 'rgba(53, 107, 255, 0.92)' }}>
            </div>
          </div>

          {/* <nav className="p-6 space-y-1" style={{ color: 'rgba(117, 20, 196, 0.98)', backgroundColor: 'rgba(117, 20, 196, 0.15)' }}>
            <p className="font-normal pb-4">
            
            </p><p className="font-normal pb-4">
              Alan
            </p><p className="font-normal pb-1">
              Reverend Alan Gates
            </p>
            <p className="font-normal pb-4">
              Honorary chair Pangbourne and District Volunteer Centre
            </p>
          </nav> */}

          <p style={{ paddingTop: '10px'}}></p>
          <p style={{ height: 40, color: 'rgba(117, 20, 196, 0.98)', backgroundColor: 'rgba(117, 20, 196, 0.15)' }}></p>
          <p className="p-1"></p>

          {/* <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-0">
            <p className="bg-linear-to-r from-cyan-300 to-violet-950 bg-clip-text text-left text-5xl font-extrabold text-transparent mb-1 pl-2 pt-2 pb-7">
              Site 3
            </p>
            <p className="leading-6 text-gray-700 text-center pb-2 pl-6 pr-10 text-left">
              This is a copy of the site content intended to be served at /site3/.
            </p>
          </nav> */}
          <br />
        </div>
        <hr
          className="my-6 w-300 border-3"
          style={{ borderColor: "rgba(117, 20, 196, 0.99)" }}
        />


      </div>

    </main>
  );
}
