import React, { useState } from 'react';
// import Pagination from './Pagination';

const Table = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    const val = event.target.checked;
    const updateCheckedItems = {};
    props.data.forEach((item) => {
      updateCheckedItems[item.id] = val;
    });
    // props.data.map((row) => row.checked = !checked)
    setChecked(updateCheckedItems);
  };
  const handleCheckOne = (event) => {
    const { id, checked } = event.target;
    setChecked((item) => ({
      ...item,
      [id]: checked,
    }));
  };
  const rowClickedAction = (event) => {
    console.log(event);
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
                {props.textCol5}
              </th>
            </tr>
          </thead>

          <tbody>
            {props.data.map((row) => (
              <tr
                class="bg-white odd:bg-gray-100 ... border-b  justify-center"
                key={row.id}
                onClick={() => rowClickedAction(row)}
              >
                <td className=" px-6 py-4">
                  <input
                    type="checkbox"
                    defaultChecked={checked}
                    id={row.id}
                    checked={checked[row.id] || false}
                    onChange={handleCheckOne}
                  />
                </td>
                <td onClick={console.log('hello g')} className=" px-6 py-4">
                  {row.FullName}
                </td>
                <td className=" px-6 py-4">{row.Email}</td>
                <td className=" px-6 py-4">{row.PhoneNumber}</td>
                <td className=" px-6 py-4">{row.Unit}</td>
                <td className=" px-6 py-4">{row.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
