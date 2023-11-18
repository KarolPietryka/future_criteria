import React from 'react';
import SidePanel from "./SidePanel";
const HomePage = () => {
    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <SidePanel />
            <div style={{ flex: 1 }}>
                <header style={{ backgroundColor: '#f8f9fa', padding: '10px', textAlign: 'center' }}>
                    <h1>Task Management System</h1>
                </header>

                <main style={{ margin: '20px' }}>
                    <h2>Projects and Tasks</h2>
                    <p>Project and task details will be displayed here.</p>
                </main>

                <footer style={{ backgroundColor: '#f8f9fa', padding: '10px', textAlign: 'center' }}>
                    <p>&copy; 2023 Task Management System</p>
                </footer>
            </div>
        </div>
    );
};

export default HomePage;
