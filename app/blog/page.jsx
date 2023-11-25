/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Page() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight light:text-white">
          My Article
        </h2>
        <p className="mt-1 text-gray-600 light:text-gray-400">
          Read this article for more information
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 light:border-gray-700 light:hover:border-transparent light:hover:shadow-black/[.4] light:focus:outline-none light:focus:ring-1 light:focus:ring-gray-600"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <Image
              className="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
              width={500}
              height={500}
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 light:text-gray-300 light:group-hover:text-white">
              Announcing a free plan for small teams
            </h3>
            <p className="mt-5 text-gray-600 light:text-gray-400">
              At Wake, our mission has always been focused on bringing openness.
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-3">
            <div>
              <h5 className="text-sm text-gray-800 light:text-gray-200">
                By NR Rizki
              </h5>
            </div>
          </div>
        </a>
      </div>

      <div className="mt-12 text-center">
        <a
          className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none light:bg-slate-900 light:border-gray-700 light:text-blue-500 light:hover:bg-gray-800 light:focus:outline-none light:focus:ring-1 light:focus:ring-gray-600"
          href="#"
        >
          Read more
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
