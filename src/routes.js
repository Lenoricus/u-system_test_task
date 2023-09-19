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

export const routes = [
    {
        path: CMDB_ROUTE,
        Component: CMDB
    },
    {
        path: DASHBOARD_ROUTE,
        Component: Dashboard
    },
    {
        path: NETWORK_ROUTE,
        Component: Network
    },
    {
        path: PRINTERS_ROUTE,
        Component: Printers
    },
    {
        path: HYPERVISORS_ROUTE,
        Component: Hypervisors
    },
    {
        path: NETWORK_DEVICES_ROUTE,
        Component: NetworkDevices
    },
]