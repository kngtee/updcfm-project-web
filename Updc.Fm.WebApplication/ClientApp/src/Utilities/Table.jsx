import React, { useMemo, useState } from 'react';
import Pagination from './Pagination';
import { DataKey } from '../Services/GetDataKey';
import { ArrangeData } from '../Services/sortData';
import { useNavigate } from 'react-router-dom';

let pageSize = 8;

const Table = ({ header, data, query, filter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState(data);
  const [sorting, setSorting] = useState({ field: DataKey(header[0]) });
  const [totalCount, setTotalCount] = useState(data && data.length);

  const truncateText = (str) => {
    return str.length > 15 ? str.substring(0, 12) + '....' : str;
  };

  const navigate = useNavigate();
  // console.log(data);

  const getRowNumber = (index) => {
    return (currentPage - 1) * pageSize + index + 1;
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
      <div className="relative overflow-x-auto justify-between rounded-t-lg max-w-full max-h-full">
        <table className="w-full text-sm text-left text-[#0f0f0f] shadow-md max-w-full max-h-full">
          <thead className="text-xs text-[#F8F7FF] uppercase bg-[#a73439]">
            <tr className="">
              <th scope="col" className="px-3 py-1.5"></th>
              {header.map((th, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-3 py-1.5"
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
            {currentTableData.map((row, index) => (
              <tr
                className="bg-white odd:bg-[#D9D9D9] ... border-b  justify-center"
                key={row.id}
                onClick={() => {
                  console.log(row.id);
                  console.log(row.path);
                  navigate(row.path);
                  console.log(row);
                }}
              >
                <td className="px-3 py-2">{getRowNumber(index)}</td>
                {/* {console.log('Keys: ' + props.objectKey[0])} */}
                {data &&
                  header.map((k, index) => (
                    <td
                      key={index}
                      onClick={console.log('hello g')}
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
  );
};

export default Table;
