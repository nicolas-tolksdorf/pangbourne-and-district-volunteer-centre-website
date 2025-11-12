import React from "react";
import "./../../app-site1.css";

export default function Site1Volunteering() {
  return (
    <main className="flex items-center justify-center pt-8 pb-1">
      <div className="flex-1 flex flex-col items-center gap-1 min-h-0">
        <header className="flex flex-col items-center gap-1">
          <div className="w-[500px] max-w-[100vw] p-1">
          </div>
        </header>
        <div className="max-w-[650px] w-full px-1">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-0">
            <p className="bg-linear-to-r from-amber-400 to-rose-600 bg-clip-text text-left text-5xl font-extrabold text-transparent mb-1 pl-2 pt-2 pb-7">
              Volunteering
            </p>
            <p className="leading-6 text-gray-700 pb-2 pl-6 pr-10 text-left">
            Pangborne Volunteers provide two opportunities to serve the communities in which we operate. 
            </p><p className="bg-linear-to-r from-amber-400 to-rose-600 bg-clip-text text-left text-4xl font-extrabold text-transparent mb-1 pl-6 pt-7 pb-4">
            Volunteer drivers
            </p><p className="leading-6 text-gray-700 pb-2 pl-6 pr-10 text-left">
            Our volunteer drivers are the “coal face” of the organisation collecting people from their homes and taking them to medical appointments either at their GP’s surgery, local hospitals, dentists, opticians and podiatrists. Occasionally we will be able to facilitate transport to support groups and the like knowing that these groups are important to peoples mental wellbeing.
            </p><p className="leading-6 text-gray-700 pb-2 pl-6 pr-10 text-left">
            We are always actively recruiting new drivers to meet the ever growing need for enabling people to get their appointments especially in areas that are not well served by public transport.
            </p><p className="leading-6 text-gray-700 pb-2 pl-6 pr-10 text-left">
            Volunteer drivers are expected to have an appropriate roadworthy vehicle where the insurance policy extends to volunteering. Drivers will be asked to provide two referees and evidence of a valid licence, insurance and MOT. The mileage covered is reimbursed at 45p per mile. Drivers are free to do as many runs as they wish and it is OK to say no.
            </p>
            <p className="bg-linear-to-r from-amber-400 to-rose-600 bg-clip-text text-left text-4xl font-extrabold text-transparent mb-1 pl-6 pt-7 pb-4">
            Office
            </p><p className="leading-6 text-gray-700 pb-2 pl-6 pr-10 text-left">
            Our office is manned by volunteers <br /><b>Monday to Friday</b> from 9.30am – 11.30am
            </p><p className="leading-6 text-gray-700 pb-2 pl-6 pr-10 pt-2 text-left">
            Answering calls from clients, ringing round to find available drivers and putting the two together. As well as the time and place of the appointment they will ask if the client has any special needs, if they are bringing a companion and if they are bringing the likes of walkers and wheelchairs.
            </p><p className="leading-6 text-gray-700 pb-4 pl-6 pr-10 pt-2 text-left">
            Training is given both for drivers and office volunteers.
            </p><p className="leading-6 text-gray-700 pb-4 pl-6 pr-10 text-left">
            For further information about volunteering either<br />
            <b>telephone:</b> 0118 984 4586 or<br />
            <b>email:</b> <a href="mailto:pangbournevolunteers@outlook.com" className="text-blue-700 underline hover:text-blue-900">pangbournevolunteers@outlook.com</a><br /><br />
            {/* </p><p className="leading-6 text-gray-700 pb-0 pl-0 pr-0 text-center">
              <img
                src="/images/greeting-hands.png"
                alt="Greeting hands"
                className="mb-0 mt-10 ml-0 mr-4"
              /> */}
            </p><p className="leading-6 text-gray-700 pb-4 pl-6 pr-5 text-left">
            Volunteering with Pangbourne Volunteers is one of the most rewarding things we do. A friendly helpful voice at the end of the telephone or the companionship of a driver for the extent of the appointment is very often the only interaction our clients have with another person in days.
            </p>
          </nav>
          <br />
        </div>
      </div>
    </main>
  );
}
