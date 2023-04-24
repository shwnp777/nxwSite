import React from "react";
import { Link } from "react-router-dom";

const people = [
  {
    name: "Lindsay Walton",
    updated: "2022-11-22",
    complete: "45%",
  },
  {
    name: "Lindsay Walton",
    updated: "2022-11-22",
    complete: "45%",
  },
  {
    name: "Lindsay Walton",
    updated: "2022-11-22",
    complete: "45%",
  },
  {
    name: "Lindsay Walton",
    updated: "2022-11-22",
    complete: "45%",
  },
  {
    name: "Lindsay Walton",
    updated: "2022-11-22",
    complete: "45%",
  },
  {
    name: "Lindsay Walton",
    updated: "2022-11-22",
    complete: "45%",
  },
];

const TrainingList = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Active Training
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all NXW users that are actively completing one or more
            trainings.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add User
          </button>
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
              >
                Name
              </th>

              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Updated
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Complete
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {people.map((person) => (
              <tr key={person.name}>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                  {person.name}
                </td>

                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {person.updated}
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">
                  {person.complete}
                </td>
                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <Link
                    to="/"
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit<span className="sr-only">, {person.name}</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrainingList;
