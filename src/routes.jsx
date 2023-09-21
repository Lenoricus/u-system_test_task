import React from "react";
import {createHashRouter} from "react-router-dom";

import {
    CMDB_ROUTE,
    DASHBOARD_ROUTE,
    NETWORK_ROUTE,
    PRINTERS_ROUTE,
    HYPERVISORS_ROUTE,
    NETWORK_DEVICES_ROUTE
} from "./utils/consts";

import CMDB from './pages/CMDB';
import Dashboard from './pages/Dashboard';
import Network from './pages/Network';
import Printers from './pages/Printers';
import Hypervisors from './pages/Hypervisors';
import NetworkDevices from './pages/NetworkDevices';
import App from "./App";

export const routes = createHashRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: CMDB_ROUTE,
                element: <CMDB/>
            },
            {
                path: DASHBOARD_ROUTE,
                element: <Dashboard/>
            },
            {
                path: NETWORK_ROUTE,
                element: <Network/>
            },
            {
                path: PRINTERS_ROUTE,
                element: <Printers/>
            },
            {
                path: HYPERVISORS_ROUTE,
                element: <Hypervisors/>
            },
            {
                path: NETWORK_DEVICES_ROUTE,
                element: <NetworkDevices/>
            },
        ]
    }
]);