import React from 'react';

import {DataGrid, GridToolbar, ruRU} from '@mui/x-data-grid';
import {CMDBDataColumns, CMDBDataRows} from '../data/mock';

const CMDB = () => {
    return (
        <div className="ml-96 mr-16">
            <p className="text-3xl font-bold text-gray-900 mb-3">
                Серверы и ПК
            </p>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                rows={CMDBDataRows}
                columns={CMDBDataColumns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
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
            />
        </div>
    );
};

export default CMDB;