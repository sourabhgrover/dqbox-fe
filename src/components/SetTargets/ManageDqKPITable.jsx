import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import Pagination from "../common/Pagination";
import { ArrowLongDownIcon, ArrowLongUpIcon ,PencilIcon, TrashIcon } from "@heroicons/react/20/solid";
import Filter from "../common/Filter";
import { getDQKPI } from "../common/makeData";
import { useSelector } from "react-redux";
import apiClient from "../../utils/apiClient";
import { useGetDQKPIQuery } from "../../utils/apiSlice";

export default function ManageDqKPITable(prop) {
  const {handleOpen} = prop;
  let createBody = {
    "kpiLevel": "OBSERVED_AGENT",
    "kpiType": "CONSISTENCY",
    "kpiTrackingFreq": "MONTHLY",
    "kpiId": "Test1",
    "kpiName": "test1",
    "kpiOwner": "Test User",
    "kpiObject": "KPI Object",
    "kpiTargetValue": "KPI Target",
    "validFrom": "2024-08-12T18:30:00.000Z",
    "validTo": "2024-08-14T18:30:00.000Z",
    "reasonForDeactivation": "No reason"
}
let editBody = {
  "kpiLevel": "OBSERVED_AGENT",
  "kpiType": "CONSISTENCY",
  "kpiTrackingFreq": "MONTHLY",
  "kpiId": "Test1",
  "kpiName": "TestKPIName",
  "kpiOwner": "Test User",
  "kpiObject": "KPI Object",
  "kpiTargetValue": "KPI Target",
  "validFrom": "2024-08-12T18:30:00.000Z",
  "validTo": "2024-08-14T18:30:00.000Z",
  "reasonForDeactivation": "No reason"
}
  // useEffect(() => {
  //   apiClient.post('/dqKpi',{...createBody})
  //   .then((response) => {
  //     console.log(response.data);
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }, [])

  // useEffect(() => {
  //   apiClient.put('/dqKpi/01ec',{...editBody})
  //   .then((response) => {
  //     console.log(response.data);
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }, [])
  const { data  = [], error, isLoading } = useGetDQKPIQuery();
  console.log(data, error, isLoading);
  
  // const {dqKpi:data}  = useSelector((state) => state.dqKpi);
  // const [data, setData] = useState(() => getDQKPI());
  const editRow = (ruleId) => {
    console.log("Edit", ruleId);
    handleOpen();
    // Implement edit functionality here
  };
  const deleteRow = (ruleId) => {
    console.log("Delete", ruleId);
    // Implement delete functionality here
  };
  const columns = useMemo(
    () => [
      {
        accessorKey: "kpiId",
        cell: (info) => info.getValue(),
        header: () => <span>KPI Identifier</span>,
      },
      {
        accessorKey: "kpiName",
        header: "Name",
      },
      {
        accessorKey: "kpiType",
        header: "Type",
      },
      {
        accessorKey: "kpiLevel",
        header: () => "Level",
      },
      {
        accessorKey: "kpiTargetValue",
        header: () => "KPI Target Value",
      },
      {
        accessorKey: "kpiOwner",
        header: () => "Owner",
      },
       {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => editRow(row.original.id)}>
              <PencilIcon className="h-5 w-5 text-blue-500" />
            </button>
            <button onClick={() => deleteRow(row.original.id)}>
              <TrashIcon className="h-5 w-5 text-red-500" />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    filterFns: {},
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), //client side filtering
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: false,
    debugHeaders: false,
    debugColumns: false,
  });

  return (
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            key={header.id}
                            colSpan={header.colSpan}
                          >
                            {header.isPlaceholder ? null : (
                              <>
                                <div
                                  {...{
                                    className: header.column.getCanSort()
                                      ? "flex items-center cursor-pointer select-none"
                                      : "",
                                    onClick:
                                      header.column.getToggleSortingHandler(),
                                  }}
                                >
                                  {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                                  {/* {{
                                    asc: " 🔼",
                                    desc: " 🔽",
                                  }[header.column.getIsSorted()] ?? null} */}
                                  {{
                                    asc: (
                                      <ArrowLongUpIcon
                                        aria-hidden="true"
                                        className="mr-3 h-5 w-5 text-gray-400"
                                      />
                                    ),
                                    desc: (
                                      <ArrowLongDownIcon
                                        aria-hidden="true"
                                        className="mr-3 h-5 w-5 text-gray-400"
                                      />
                                    ),
                                  }[header.column.getIsSorted()] ?? null}
                                </div>
                                {header.column.getCanFilter() ? (
                                  <div>
                                    <Filter column={header.column} />
                                  </div>
                                ) : null}
                              </>
                            )}
                          </th>
                        );
                      })}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {
                    isLoading ? (
                      <tr>
                        <td colSpan={table.getHeaderGroups().length}>
                          <span>Loading</span>
                        </td>
                      </tr>
                    ) : (
                      table.getRowModel().rows.map((row) => {
                      return (
                        <tr key={row.id}>
                          {row.getVisibleCells().map((cell) => {
                            return (
                              <td
                                key={cell.id}
                                className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                              >
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    }
                  ))
                  }
                </tbody>
              </table>
              { !isLoading  && <Pagination table={table} /> }
            </div>
          </div>
        </div>
      </div>
  );
}
