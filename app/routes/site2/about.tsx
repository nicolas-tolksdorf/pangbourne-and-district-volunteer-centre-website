import React from "react";
import "./../../app-site2.css";

export default function Site2About() {
  return (
    <main className="flex items-center justify-center pt-8 pb-1">
      <div className="flex-1 flex flex-col items-center gap-1 min-h-0">
        <header className="flex flex-col items-center gap-1">
          <div className="w-[500px] max-w-[100vw] p-1">
          </div>
        </header>
        <div className="max-w-[850px] w-full px-1">
          <p style={{ fontSize: '30pt', color: 'rgba(255, 53, 164, 0.86)' }} className="pb-2">About</p>
          <p className="font-normal pb-4">
          
          </p><p className="font-normal pb-4">
          The centre was founded in 1984 as a joint enterprise by a number of local churches:
          </p>

          <nav className="p-6 space-y-1" style={{ color: 'rgba(117, 20, 196, 0.98)', backgroundColor: 'rgba(117, 20, 196, 0.15)' }}>
            <p className="font-normal pb-4">
            Saint James the Less Pangbourne, St Bernadette Pangbourne, Pangbourne United Reformed Church, Saint Mary's, Purley and Saint Stephens, Upper Basildon.
            </p>
          </nav>

          <p className="font-normal pb-4">
          We were soon joined by all our parish councils and were supported by Berkshire County Council Social Services Department. At first it was very informal but we soon realised that it needed to be put on a sound basis with a proper constitution and Charity Commission registration.
          </p>

          <p style={{ paddingTop: '10px'}}></p>
          <p style={{ height: 4, color: 'rgba(117, 20, 196, 0.98)', backgroundColor: 'rgba(117, 20, 196, 0.15)' }}></p>
          <p className="p-1"></p>

          {/* Two-column panel, equal width */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="w-full p-4 border" style={{ color: '#ffbbf6ff', backgroundColor: 'rgba(117, 20, 196, 0.99)' }}>
              {/* <h3 className="text-lg font-semibold mb-2">Panel Left</h3> */}
              <p className="font-normal pb-4">
                Initially we tackled a wide variety of tasks, we had a group of 6 formers from Pangbourne College who would cut people's lawns and do other gardening jobs, we took people to shops and to entertainment, took children to special schools and visited people in their homes to relieve carers for a while. Sadly, we soon had to restrict her activities to driving to medical appointments and a few other tasks, partly because we could not cope with demand but also to comply with legislation concerning the care of vulnerable persons.
              </p>
              <p className="font-normal pb-4">
                Following the closure of United Reformed Church, we moved to an office in Pangbourne Village Hall, which we now share with Saint James Church.
              </p>
            </div>
            <div className="w-full p-4" style={{ backgroundColor: 'rgba(53, 107, 255, 0.92)' }}>
            </div>
          </div>

          <nav className="p-6 space-y-1" style={{ color: 'rgba(117, 20, 196, 0.98)', backgroundColor: 'rgba(117, 20, 196, 0.15)' }}>
            <p className="font-normal pb-4">
            We are a registered charity governed by a management committee.
            </p><p className="font-normal pb-1">
              Our charity number is 276587.
            </p>
            <p className="font-normal pb-4">
              Telephone: 0118 984 4586
            </p>
          </nav>

          <p style={{ paddingTop: '10px'}}></p>
          <p style={{ height: 4, color: 'rgba(117, 20, 196, 0.98)', backgroundColor: 'rgba(117, 20, 196, 0.15)' }}></p>
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
          style={{ borderColor: "rgba(117, 20, 196, 0.15)" }}
        />
      </div>

    </main>
  );
}
