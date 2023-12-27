import SideDrawer from "./SideDrawer";
import React, {useState} from "react";
import NewProjectPanel from "./project/new/NewProjectPanel";
import './HomePage.css';

const HomePage = () => {
    const [newProjectPanelOpen, setNewProjectPanelOpen] = useState(false);
    const closeNewProjectPanel = () => setNewProjectPanelOpen(false);
    const openNewProjectPanel = () => setNewProjectPanelOpen(true);

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div>
                {newProjectPanelOpen && <NewProjectPanel closeNewProjectPanel={closeNewProjectPanel}/> }
            </div>
            <div className={`view ${newProjectPanelOpen ? 'blur-background' : ''}`}>
                <SideDrawer
                    openNewProjectPanel={openNewProjectPanel}
                />
                <div className={'main'}>
                    <header style={{ backgroundColor: '#f8f9fa', padding: '10px', textAlign: 'center' }}>
                        <h1>Task Management System</h1>
                    </header>

                    <main style={{ margin: '20px', flexGrow: 1 }}>
                        <h2>Projects and Tasks</h2>
                        <p>Project and task details will be displayed here.</p>
                    </main>

                    <footer style={{ backgroundColor: '#f8f9fa', padding: '10px', textAlign: 'center' }}>
                        <p>&copy; 2023 Task Management System</p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
