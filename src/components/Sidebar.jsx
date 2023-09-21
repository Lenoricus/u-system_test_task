import React from 'react';
import {TreeItem, TreeView} from "@mui/x-tree-view";

import {sidebarData} from '../data/mock';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const renderTree = (nodes) => (
        <div className="text-gray-500 mt-4" key={nodes.id}>
                <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.title} icon={nodes.icon} onClick={() => navigate(`/${nodes.route}`)}>
                    {Array.isArray(nodes.links)
                        ? nodes.links.map((node) => renderTree(node))
                        : null}
                </TreeItem>
        </div>
    );

    return (
        <div className="ml-3 mt-3 h-screen overflow-auto pb-10 pr-3">
            <div>
                    <img src={"./logo.png"} alt="company logo" className="w-32 ml-3"></img>
            </div>
            <p className="text-gray-400 ml-3 mt-1 font-medium">Powered by U-System</p>
            <div className="mt-5">
                <TreeView
                    aria-label="rich object"
                    defaultExpanded={['root']}
                >
                    {sidebarData.map((node) => (renderTree(node)))}
                </TreeView>
            </div>
        </div>
    );
};

export default Sidebar;