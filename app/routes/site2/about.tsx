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
        <div className="max-w-[650px] w-full px-1">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-0">
            <p className="bg-linear-to-r from-cyan-300 to-violet-950 bg-clip-text text-left text-5xl font-extrabold text-transparent mb-1 pl-2 pt-2 pb-7">
              About
            </p>
            <p className="leading-6 text-gray-700 text-center pb-2 pl-6 pr-10 text-left">
            The centre was founded in 1984 as a joint enterprise by a number of local churches: Saint James the Less Pangbourne, St Bernadette Pangbourne, Pangbourne United Reformed Church, Saint Mary's, Purley and Saint Stephens, Upper Basildon. We were soon joined by all our parish councils and were supported by Berkshire County Council Social Services Department. At first it was very informal but we soon realised that it needed to be put on a sound basis with a proper constitution and Charity Commission registration.
            </p><p className="leading-6 text-gray-700 text-center pb-2 pl-6 pr-10 text-left">
            Initially we tackled a wide variety of tasks, we had a group of 6 formers from Pangbourne College who would cut people's lawns and do other gardening jobs, we took people to shops and to entertainment, took children to special schools and visited people in their homes to relieve carers for a while. Sadly, we soon had to restrict her activities to driving to medical appointments and a few other tasks, partly because we could not cope with demand but also to comply with legislation concerning the care of vulnerable persons. 
            </p><p className="leading-6 text-gray-700 text-center pb-2 pl-6 pr-10 text-left">
            Following the closure of United Reformed Church, we moved to an office in Pangbourne Village Hall, which we now share with Saint James Church. 
            </p><p className="leading-6 text-gray-700 text-center pb-2 pl-6 pr-10 pt-2 text-left">
            We are a registered charity governed by a management committee.
            </p><p className="leading-6 text-gray-700 text-center pb-4 pl-6 pr-10 text-left">
            Our charity number is 276587.<br />
            Telephone: 0118 984 4586<br />
            </p>
          </nav>
          <br />
        </div>
      </div>
    </main>
  );
}
