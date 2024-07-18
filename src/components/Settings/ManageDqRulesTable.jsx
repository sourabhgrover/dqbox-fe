import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { makeData, makeUsersData, makeDqRules } from "./makeData";
import Pagination from "../common/Pagination";
import { ArrowLongDownIcon, ArrowLongUpIcon } from '@heroicons/react/20/solid'


export default function ManageDqRulesTable() {
  // const [data, setData] = useState(() => makeUsersData(5_000));
  const [data, setData] = useState(() => makeDqRules());
  const columns = useMemo(
    () => [
      {
        accessorKey: "ruleId",
        cell: (info) => info.getValue(),
        header: () => <span>Rule ID</span>,
      },
      {
        accessorKey: "ruleType",
        header: "Rule Type",
      },
      {
        accessorKey: "cubeId",
        header: "Cube Id",
      },
      {
        accessorKey: "attrName",
        header: () => "Attribute Name",
      },
      {
        accessorKey: "active",
        header: () => "Active",
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
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Manage DQ Rules
          </h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add DQ Rule
          </button>
        </div>
      </div>
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
                                    asc: <ArrowLongUpIcon aria-hidden="true" className="mr-3 h-5 w-5 text-gray-400" />,
                                    desc: <ArrowLongDownIcon aria-hidden="true" className="mr-3 h-5 w-5 text-gray-400" />,
                                  }[header.column.getIsSorted()] ?? null}
                                </div>
                              </>
                            )}
                          </th>
                        );
                      })}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map((row) => {
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
                  })}
                </tbody>
              </table>
              <Pagination table={table} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
