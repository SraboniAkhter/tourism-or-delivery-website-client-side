import React from 'react';
import AddServices from '../AddServices/AddServices';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div style={{ height: '460px' }}>
            <Sidebar></Sidebar>
            <AddServices></AddServices>
            
        </div>
    );
};

export default Dashboard;