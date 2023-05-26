import React, { useMemo, useState } from 'react';
import Pagination from './Pagination';
import { DataKey } from '../Services/GetDataKey';

let pageSize = 6;

const Table = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    const val = event.target.checked;
    const updateCheckedItems = {};
    props.data.forEach((item) => {
      updateCheckedItems[item.id] = val;
    });

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

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return props.data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

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
              {props.header.map((th) => (
                <th scope="col" class="px-6 py-3">
                  {th}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentTableData.map((row) => (
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
                {/* {console.log('Keys: ' + props.objectKey[0])} */}
                {props.data &&
                  DataKey(props.data[0]).map((k) => (
                    <td onClick={console.log('hello g')} className=" cursor-pointer px-6 py-4">
                      {row[k]}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="">
        <Pagination
          currentPage={currentPage}
          totalCount={props.data.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Table;
