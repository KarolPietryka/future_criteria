import React from 'react';
const HomePage = () => {
    return (
        <div>
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
    );
};

export default HomePage;
