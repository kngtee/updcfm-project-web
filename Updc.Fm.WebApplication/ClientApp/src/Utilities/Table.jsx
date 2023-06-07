import React, { useEffect, useMemo, useState } from 'react';
import Pagination from './Pagination';
import { DataKey } from '../Services/GetDataKey';
// import { data } from 'jquery';
import { ArrangeData } from '../Services/sortData';

let pageSize = 8;

const Table = ({ header, data, query, filter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [checked, setChecked] = useState(false);
  const [tableData, setTableData] = useState(data);
  const [sorting, setSorting] = useState({ field: DataKey(header[0]) });
  // const [search, setSearch] = useState({ query: query });
  const [totalCount, setTotalCount] = useState(data && data.length);
  // console.log(props);

  const handleChange = (event) => {
    const val = event.target.checked;
    const updateCheckedItems = {};
    tableData.forEach((item) => {
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
    let sortedData = ArrangeData(data, sorting.field);

    setTableData(sortedData);
    // console.log(sortedData);
    setTotalCount(
      tableData.filter(
        (e) =>
          e[filter[0]].toLowerCase().includes(query.toLowerCase()) ||
          e[filter[1]].toLowerCase().includes(query.toLowerCase()),
      ).length,
    );
    return tableData
      .filter(
        (e) =>
          e[filter[0]].toLowerCase().includes(query.toLowerCase()) ||
          e[filter[1]].toLowerCase().includes(query.toLowerCase()),
      )
      .slice(firstPageIndex, lastPageIndex);
    // eslint-disable-next-line
  }, [currentPage, sorting, query]);

  return (
    <div>
      <div class="relative overflow-x-auto justify-between rounded-t-lg max-w-full max-h-full">
        <table class="w-full text-sm text-left text-[#0f0f0f] shadow-md max-w-full max-h-full">
          <thead class="text-xs text-[#F8F7FF] uppercase bg-[#a73439]">
            <tr class="">
              <th scope="col" class="px-3 py-1.5">
                <input
                  type="checkbox"
                  defaultChecked={checked}
                  onChange={handleChange}
                />
              </th>
              {header.map((th, index) => (
                <th
                  scope="col"
                  class="px-3 py-1.5"
                  onClick={() => {
                    setSorting({ field: DataKey(th) });
                    console.log(sorting);
                  }}
                >
                  {th[DataKey(th)]}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentTableData.map((row) => (
              <tr
                class="bg-white odd:bg-[#D9D9D9] ... border-b  justify-center"
                key={row.id}
                onClick={() => rowClickedAction(row)}
              >
                <td className="px-3 py-2">
                  <input
                    type="checkbox"
                    defaultChecked={checked}
                    id={row.id}
                    checked={checked[row.id] || false}
                    onChange={handleCheckOne}
                  />
                </td>
                {/* {console.log('Keys: ' + props.objectKey[0])} */}
                {data &&
                  header.map((k, index) => (
                    <td
                      onClick={console.log('hello g')}
                      className="cursor-pointer px-3 py-2"
                    >
                      {row[DataKey(k)]}
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
          totalCount={totalCount}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Table;
