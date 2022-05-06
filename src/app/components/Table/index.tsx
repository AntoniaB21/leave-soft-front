/**
 *
 * Table
 *
 */
 import React from 'react';
 import {
   useTable,
   usePagination,
   useSortBy,
   useFilters,
   useGlobalFilter,
   useAsyncDebounce,
 } from 'react-table';
 import {
   createStyles,
   Pagination,
   TextInput,
   Button,
   Table as MantineTable,
 } from '@mantine/core';
 import {
   CaretDownIcon,
   CaretSortIcon,
   CaretUpIcon,
   MagnifyingGlassIcon,
   RowSpacingIcon,
 } from '@radix-ui/react-icons';
 
 import './style.css';
 
 import { useDispatch } from 'react-redux';
import { useMyOffsListSlice } from 'app/pages/MyOffsList/slice';
 
 const useStyles = createStyles((theme, _params, getRef) => {
   return {
     pagination: {
       marginTop: 10,
       float: 'right',
     },
   };
 });
 
 export function Table({ columns, data, initialState }) {
   const { actions } = useMyOffsListSlice();
 
   const dispatch = useDispatch();
 
   // Table component logic and UI come here
   const { classes } = useStyles();
 
   // Define a default UI for filtering
   function GlobalFilter({
     preGlobalFilteredRows,
     globalFilter,
     setGlobalFilter,
   }) {
     const count = preGlobalFilteredRows.length;
     const [value, setValue] = React.useState(globalFilter);
     const onChange = useAsyncDebounce(value => {
       setGlobalFilter(value || undefined);
     }, 400);
 
     return (
       <span>
         <TextInput
           value={value || ''}
           onChange={e => {
             setValue(e.target.value);
             onChange(e.target.value);
           }}
           icon={<MagnifyingGlassIcon />}
           placeholder={`${count} records...`}
         />
       </span>
     );
   }
 
   const {
     getTableProps, // table props from react-table
     getTableBodyProps, // table body props from react-table
     headerGroups, // headerGroups, if your table has groupings
     prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
     pageOptions,
     pageCount,
     page,
     state,
     state: { pageIndex, pageSize, globalFilter },
     gotoPage,
     setPageIndex,
     canPreviousPage,
     canNextPage,
     preGlobalFilteredRows,
     setGlobalFilter,
     setFilter,
     setAllFilters,
     visibleColumns,
   } = useTable(
     {
       columns,
       data,
       initialState,
     },
     useGlobalFilter,
     useFilters,
     useSortBy,
     usePagination,
   );
 
   React.useEffect(() => {
     gotoPage(0);
   }, [gotoPage, data]);
 
   return (
     <>
       <MantineTable highlightOnHover {...getTableProps()}>
         <thead>
           <tr>
             <th
               colSpan={visibleColumns.length}
               style={{
                 textAlign: 'left',
                 paddingTop: '20px',
                 paddingBottom: '20px',
               }}
             >
               <GlobalFilter
                 preGlobalFilteredRows={preGlobalFilteredRows}
                 globalFilter={globalFilter}
                 setGlobalFilter={setGlobalFilter}
               />
               {/*   <Button
                 onClick={() => {
                   setAllFilters([]);
                   dispatch(
                     actions.loadFiltersRequest(['startAt', [null, null]]),
                   );
                 }}
               >
                 Clear all filters
               </Button> */}
             </th>
           </tr>
           {headerGroups.map(headerGroup => (
             <tr {...headerGroup.getHeaderGroupProps()}>
               {headerGroup.headers.map(column => (
                 <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                   <p>
                     {column.render('Header')}{' '}
                     {!column.disableSortBy && (
                       <span>
                         {column.isSorted ? (
                           column.isSortedDesc ? (
                             <CaretDownIcon />
                           ) : (
                             <CaretUpIcon />
                           )
                         ) : (
                           <CaretSortIcon />
                         )}
                       </span>
                     )}
                   </p>
 
                   <div>{column.canFilter ? column.render('Filter') : null}</div>
                 </th>
               ))}
             </tr>
           ))}
         </thead>
         <tbody {...getTableBodyProps()}>
           {page.map((row, i) => {
             prepareRow(row);
             return (
               <tr {...row.getRowProps()}>
                 {row.cells.map(cell => {
                   return (
                     <td
                       {...cell.getCellProps({
                         style: { width: cell.column.width },
                       })}
                     >
                       {cell.render('Cell')}
                     </td>
                   );
                 })}
               </tr>
             );
           })}
         </tbody>
       </MantineTable>
       <div className={classes.pagination}>
         <Pagination
           page={pageIndex + 1}
           total={pageCount}
           onChange={page => {
             gotoPage(page - 1);
           }}
         />
       </div>
     </>
   );
 }
 