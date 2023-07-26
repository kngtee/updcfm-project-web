import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import { DataKey } from '../Services/GetDataKey';
import { ArrangeData } from '../Services/sortData';
import SalesAllocatedUnit from '../components/SalesAllocatedUnit';

let pageSize = 8;

const TableVariantA = ({ header, data, query, filter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [checked, setChecked] = useState(false);
  const [checkedAll, setCheckedAll] = useState(false);
  const [tableData, setTableData] = useState(data);
  const [sorting, setSorting] = useState({ field: DataKey(header[0]) });
  const [totalCount, setTotalCount] = useState(data && data.length);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selected, setSelected] = useState(false);

  const truncateText = (str) => {
    return str.length > 15 ? str.substring(0, 12) + '....' : str;
  };

  
  const handleChange = (event) => {
    setCheckedAll(!checkedAll);
    setChecked(!checkedAll);
  };

  const handleCheckOne = (event) => {
    setChecked(!checked);
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
          e[filter[2]].toLowerCase().includes(query.toLowerCase()) ||
          e[filter[1]].toLowerCase().includes(query.toLowerCase()),
      ).length,
    );
    return tableData
      .filter(
        (e) =>
          e[filter[0]].toLowerCase().includes(query.toLowerCase()) ||
          e[filter[2]].toLowerCase().includes(query.toLowerCase()) ||
          e[filter[1]].toLowerCase().includes(query.toLowerCase()),
      )
      .slice(firstPageIndex, lastPageIndex);
    // eslint-disable-next-line
  }, [currentPage, sorting, query]);

  return (
    <>
      {/* {selected === true ?
     (
     <SalesAllocatedUnit/>
     ):( */}

      <div>
        <div className="relative overflow-x-auto justify-between rounded-t-lg max-w-full max-h-full">
          <table className="w-full text-sm text-left text-[#0f0f0f] shadow-md max-w-full max-h-full">
            <thead className="text-xs text-[#F8F7FF] uppercase bg-[#a73439]">
              <tr className="">
                {/* <th scope="col" className="px-3 py-1.5">
                  <input
                    type="checkbox"
                    defaultChecked={checkedAll}
                    onChange={handleChange}
                  />
                </th> */}
                {header.map((th, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-3 py-1.5"
                    onClick={() => {
                      setSorting({ field: DataKey(th) });
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
                  className="bg-white odd:bg-[#D9D9D9] border-b  justify-center"
                  key={row.id}
                  onClick={() => {
                    setSelectedRow(row);
                    setSelected(true);
                    // navigate('/salesau');
                    console.log(row);
                  }}
                >
                  {/* <td className="px-3 py-2">
                    <input
                      type="checkbox"
                      // defaultChecked={checked}
                      id={row.id}
                      // checked={checked[row.id] || false}
                      checked={checked}
                      onChange={handleCheckOne}
                    />
                  </td> */}
                  {/* {console.log('Keys: ' + props.objectKey[0])} */}
                  {data &&
                    header.map((k, index) => (
                      <td
                        key={index}
                        // onClick={console.log('hello g')}
                        className="cursor-pointer px-3 py-2"
                      >
                        {truncateText(row[DataKey(k)])}
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

      <div
        className={`w-screen h-screen absolute top-0 left-0 ${
          selected ? `` : 'hidden'
        }`}
      >
        <div
          onClick={() => setSelected(false)}
          className={`w-screen h-screen flex justify-center absolute top-0 left-0 bg-black/50`}
        ></div>
        <SalesAllocatedUnit selectedRow={selectedRow} />
      </div>
    </>
  );
};

export default TableVariantA;
