"use client"
import IdsTitle from '@/components/ids/IdsTitle';
import Button from '@/components/ui/Button';
import SearchBoxInput from '@/components/ui/SearchBoxInput';
import { useGetLeaguesQuery } from '@/redux/api/idsApi';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { useEffect, useState } from 'react';


const columns = [
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "season",
    header: "Season",
  },
  {
    accessorKey: "start",
    header: "Start",
  },
  {
    accessorKey: "end",
    header: "End",
  },
  {
    accessorKey: "current",
    header: "Current",
  },
  {
    accessorKey: "id_v2",
    header: "ID",
  },
];

export default function LeaguesIds({sports, title}) {
  const [leagueSearch, setLeagueSearch] = useState("");
  const [sorting, setSorting] = useState([]);
  const [searchInput, setSearchInput] = useState("")
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const {data, isLoading, isFetching, error} = useGetLeaguesQuery({
    page: pagination.pageIndex+1,
    limit: pagination.pageSize,
    league: leagueSearch,
    sort: sorting[0]
    ? `${sorting[0].desc ? "-" : ""}${sorting[0].id}`
    : undefined,
  });

  const table = useReactTable({
    data: data?.data ?? [],
    columns,
    state: {
      sorting,
      pagination,
    },

    onPaginationChange: setPagination,
    onSortingChange: (updater) => {
      setSorting(updater);

      setPagination((prev) => ({
        ...prev,
        pageIndex: 0,
      }));
    },

    manualPagination: true,
    manualSorting: true,

    pageCount: data?.last ?? 0,
    getCoreRowModel: getCoreRowModel(),
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setLeagueSearch(searchInput);
      setPagination((prev) => ({...prev, pageIndex: 0}))
    }, 500);
 
    return () => clearTimeout(timer);
  }, [searchInput])

  return (
    <div className='p-5 rounded-lg border border-border-gray space-y-4 bg-surface text-foreground shadow-card'>
      <IdsTitle sports={sports} title={title} />
      <div className="flex flex-col gap-4">
        <div className='flex flex-wrap gap-2 justify-between items-center'>
          <div className='flex gap-2 items-center text-muted font-medium'>
            <span className=''>Show</span>
            <select
              className='border-2 border-border-gray outline-none rounded-md px-3 py-2'
              value={pagination.pageSize}
              onChange={e => {
                setPagination({
                  pageIndex: 0,
                  pageSize: Number(e.target.value),
                })
              }}
            >
              {[10, 20, 30, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            <span>entries</span>
          </div>

          <SearchBoxInput value={searchInput} onChange={(e) => setSearchInput(e.target.value)}  />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="size-6 animate-spin rounded-full border-2 border-border-gray border-t-primary" />
          </div>
        ) : (
          <div
            className={`overflow-y-auto rounded-lg border border-border-table transition-opacity duration-200 ${
              isFetching ? "opacity-60" : "opacity-100"
            }`}
          >
            <table className="w-full">
              <thead className="bg-gray-400/10">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr
                    key={headerGroup.id}
                    className="text-left"
                  >
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-5 py-4 cursor-pointer"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}

                        {{
                          asc: " ↑",
                          desc: " ↓",
                        }[header.column.getIsSorted()] ?? ""}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="not-last:border-b not-last:border-border-table"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        className="px-5 py-4"
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
       
        <div className='flex flex-wrap gap-2 justify-between items-center'>
          <div className='text-sm text-muted font-medium'>
              <span>
                Showing {pagination.pageIndex * pagination.pageSize + 1} to {' '}
                {Math.min((pagination.pageIndex + 1) * pagination.pageSize,
                  data?.items ?? 0
                )}{' '}
                of {data?.items ?? 0} entries
              </span>
          </div>

          <div className='flex items-center gap-2'>
            <Button
              onClick={() => table.firstPage()}
              disabled={!table.getCanPreviousPage()}
              className={`${!table.getCanPreviousPage() ? 'cursor-not-allowed bg-border-gray' : 'cursor-pointer'}`}
            >
              {'<<'}
            </Button>
            <Button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className={`${!table.getCanPreviousPage() ? 'cursor-not-allowed bg-border-gray' : 'cursor-pointer'}`}
            >
              {'<'}
            </Button>

            {[...Array(data?.pages ?? 0)].map((_, pageIndex) => (
              <Button
                key={pageIndex}
                onClick={() => table.setPageIndex(pageIndex)}
                className={`cursor-pointer ${
                  pagination.pageIndex === pageIndex
                    ? "bg-primary text-white"
                    : ""
                }`}
              >
                {pageIndex + 1}
              </Button>
            ))}

            <Button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className={`${!table.getCanNextPage() ? 'cursor-not-allowed bg-border-gray' : 'cursor-pointer'}`}
            >
              {'>'}
            </Button>
            <Button
              onClick={() => table.lastPage()}
              disabled={!table.getCanNextPage()}
              className={`${!table.getCanNextPage() ? 'cursor-not-allowed bg-border-gray' : 'cursor-pointer'}`}
            >
              {'>>'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}



