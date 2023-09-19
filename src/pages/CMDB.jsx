import React from 'react';

import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import {CMDBData} from '../data/mock';

const columns = [
    {
        field: 'isActive',
        headerName: '',
        flex: 1,
        renderCell: (params) => (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {params.value ? (
                    <div
                        style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: 'green',
                        }}
                    ></div>
                ) : (
                    <div
                        style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: 'gray',
                        }}
                    ></div>
                )}
            </div>
        ),
    },
    {
        field: 'name',
        headerName: 'Название',
        flex: 5,
    },
    {
        field: 'type',
        headerName: 'Тип',
        flex: 3,
    },
    {
        field: 'location',
        headerName: 'Расположение',
        flex: 5,
    },
    {
        field: 'orgUnit',
        headerName: 'Орг.единица',
        flex: 3,
    },
    {
        field: 'invNumber',
        headerName: 'Инв.номер',
        flex: 3,
    },
    {
        field: 'tags',
        headerName: 'Теги',
        flex: 4,
    },
    {
        field: 'dateOfCreating',
        headerName: 'Дата создания',
        flex: 5,
    },
    {
        field: 'dateOfUpdating',
        headerName: 'Дата обновления',
        flex: 5,
    },
    {
        field: 'auditDate',
        headerName: 'Дата аудита',
        flex: 5,
    },
];

const CMDB = () => {
    return (
        <div className="ml-96 mr-16">
            <p className="text-3xl font-bold text-gray-900 mb-3">
                Серверы и ПК
            </p>
            <DataGrid
                rows={CMDBData}
                columns={columns}
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