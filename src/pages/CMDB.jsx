import React, {useEffect, useMemo, useState} from 'react';

import {DataGrid, GridToolbar, ruRU} from '@mui/x-data-grid';
import {CMDBDataColumns, CMDBDataRows} from '../data/mock';
import {useSearchParams} from "react-router-dom";

const CMDB = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const filterModelFromUrl = searchParams.get('filterModel');
    const pageFromUrl = searchParams.get('page');
    const [currentPage, setCurrentPage] = useState(pageFromUrl ? parseInt(pageFromUrl, 10) : 1);

    const [gridState, setGridState] = useState(() => {
        try {
            return {
                filterModel: filterModelFromUrl ? JSON.parse(filterModelFromUrl) : {},
            };
        } catch (error) {
            console.error('Error parsing filterModelFromUrl:', error);
            return {filterModel: {}};
        }
    });

    const gridFilterModel = useMemo(() => {
        const filterModel = {
            items: [],
        };
        try {
            const model = JSON.parse(filterModelFromUrl)
            if (!model) {
                return filterModel
            }
            return model
        } catch (error) {
            return filterModel
        }
    }, [filterModelFromUrl])

    const handleGridStateChange = (newState) => {
        setGridState(newState);

        const filterModelString = JSON.stringify(newState.filterModel);

        if (filterModelString !== undefined) {
            setSearchParams({filterModel: filterModelString, page: currentPage.toString()});
        }
    };

    const handleFilterModelChange = (newFilterModel) => {
        setGridState({...gridState, filterModel: newFilterModel});

        const filterModelString = JSON.stringify(newFilterModel);

        if (filterModelString !== undefined) {
            setSearchParams({filterModel: filterModelString, page: currentPage.toString()});
        }
    };

    useEffect(() => {
        if (pageFromUrl) {
            setCurrentPage(parseInt(pageFromUrl, 10));
        }
    }, [pageFromUrl]);

    useEffect(() => {
        if (filterModelFromUrl) {
            try {
                const parsedFilterModel = JSON.parse(filterModelFromUrl);
                setGridState({...gridState, filterModel: parsedFilterModel});
            } catch (error) {
                console.error('Error parsing filterModelFromUrl:', error);
            }
        }
    }, [filterModelFromUrl]);

    return (
        <div className="">
            <p className="text-sm text-gray-600 mb-3">
                CMDB / <span className="font-bold"> Серверы и ПК</span>
            </p>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
                Серверы и ПК
            </h1>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                rows={CMDBDataRows}
                columns={CMDBDataColumns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                            page: currentPage,
                        },
                    },
                }}
                pageSizeOptions={[5, 10, 25]}
                disableColumnSelector
                disableDensitySelector
                slots={{toolbar: GridToolbar}}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                    },
                }}
                checkboxSelection
                disableRowSelectionOnClick
                state={gridState}
                onStateChange={handleGridStateChange}
                onFilterModelChange={handleFilterModelChange}
                filterModel={gridFilterModel}
            />
        </div>
    );
};

export default CMDB;