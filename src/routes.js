import {
    CMDB_ROUTE,
    DASHBOARD_ROUTE,
    NETWORK_ROUTE
} from "./utils/consts";

import CMDB from './pages/CMDB';
import Dashboard from './pages/Dashboard';
import Network from './pages/Network';

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
]