import React, { useMemo, useState } from 'react';
import Pagination from './Pagination';
import { DataKey } from '../Services/GetDataKey';
import { ArrangeData } from '../Services/sortData';

let pageSize = 8;

const TableVariantAdminEstateInfo = ({ header, data, query, filter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState(data);
  const [sorting, setSorting] = useState({ field: DataKey(header[0]) });
  const [totalCount, setTotalCount] = useState(data && data.length);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selected, setSelected] = useState(false);

  const truncateText = (str) => {
    return str.length > 15 ? str.substring(0, 12) + '....' : str;
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    let sortedData = ArrangeData(data, sorting.field);

    setTableData(sortedData);
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
  }, [currentPage, sorting, query]);

  return (
    <>
      <div>
        <div className="relative overflow-x-auto justify-between rounded-t-lg max-w-full max-h-full">
          <table className="w-full text-sm text-left text-[#0f0f0f] shadow-md max-w-full max-h-full">
            <thead className="text-xs text-[#F8F7FF] uppercase bg-[#a73439]">
              <tr className="">
                <th className="px-3 py-1.5">S/N</th>
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
              {currentTableData.map((row, index) => (
                <tr
                  className="bg-white odd:bg-[#D9D9D9] border-b  justify-center"
                  key={row.id}
                  onClick={() => {
                    setSelectedRow(row);
                    setSelected(true);
                    console.log(row);
                  }}
                >
                  <td className="cursor-pointer px-3 py-2">{index + 1}</td>
                  {data &&
                    header.map((k, index) => (
                      <td key={index} className="cursor-pointer px-3 py-2">
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
    </>
  );
};

export default TableVariantAdminEstateInfo;
