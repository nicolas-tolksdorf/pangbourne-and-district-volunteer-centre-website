import React from "react";

export default function Assistance() {
  return (
    <main className="flex items-center justify-center pt-8 pb-1">
      <div className="flex-1 flex flex-col items-center gap-1 min-h-0">
        <header className="flex flex-col items-center gap-1">
          <div className="w-[500px] max-w-[100vw] p-1">
          </div>
        </header>
        <div className="max-w-[650px] w-full px-1">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-0">
            <p className="bg-linear-to-r from-emerald-500 to-cyan-700 bg-clip-text text-left text-5xl font-extrabold text-transparent mb-1 pl-2 pt-2 pb-7">
              Accessing our services as a client
            </p>
            <p className="leading-6 text-gray-700 text-center pb-6 pl-6 pr-10 text-left">
We operate within the parishes of Ashampstead, Upper and Lower Basildon, Purley on Thames, Sulham, Tidmarsh, Pangbourne, Whitchurch on Thames and Whitchurch Hill plus parts of Tilehurst namely postcodes <b>RG31 6**</b>.
            </p><p className="leading-6 text-gray-700 text-center pb-1 pl-6 pr-10 text-left">
Accessing our services couldn’t be easier. Simply
            </p><p className="leading-6 text-gray-700 text-center pb-0 pl-10 pr-10 text-left">
<b>telephone:</b> 0119 984 4586
            </p><p className="leading-6 text-gray-700 text-center pb-6 pl-10 pr-10 text-left italic">
between 9.30am and 11.30am Monday to Friday
            </p><p className="leading-6 text-gray-700 text-center pb-4 pl-6 pr-10 text-left">
And we will do all that we can to get you to and from your appointments in a timely fashion. Please let our office volunteer know if you need any special assistance, require a walker or wheelchair and if you are bringing a companion.
            </p>
          </nav>
          <br />
        </div>
      </div>
    </main>
  );
}
