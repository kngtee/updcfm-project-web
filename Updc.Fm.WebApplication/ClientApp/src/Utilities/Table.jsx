import React, { useState } from 'react';
import Pagination from './Pagination';

const Table = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <div class="relative overflow-x-auto  shadow-md md:rounded-lg">
        <table class="w-full rounded-t-lg text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr class=" bg-[#A73439] text-white ">
              <th scope="col" class="px-6 py-3">
                <input
                  type="checkbox"
                  defaultChecked={checked}
                  onChange={handleChange}
                />
              </th>
              <th scope="col" class="px-6 py-3">
                {props.textCol1}
              </th>
              <th scope="col" class="px-6 py-3">
                {props.textCol2}
              </th>
              <th scope="col" class="px-6 py-3">
                {props.textCol3}
              </th>
              <th scope="col" class="px-6 py-3">
                {props.textCol4}
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {props.data.map((row) => (
              <tr
                class="bg-white odd:bg-gray-100 ... border-b  justify-center"
                key={row.id}
              >
                <td className=" px-6 py-4">
                  <input
                    type="checkbox"
                    defaultChecked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                </td>
                <td className=" px-6 py-4">{row.FullName}</td>
                <td className=" px-6 py-4">{row.Email}</td>
                <td className=" px-6 py-4">{row.PhoneNumber}</td>
                <td className=" px-6 py-4">{row.Unit}</td>
                <td className=" px-6 py-4">{row.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row gap-[18rem] mt-7">
        <div className="w-[40%]">
          <span className=" text-gray-400">
            Searching 1 to 10 of 10,000 entries
          </span>
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Table;
