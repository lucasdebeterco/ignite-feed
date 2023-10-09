import {Header} from './components/header'
import styles from './App.module.css'
import './global.css'
import {Sidebar} from "./components/Sidebar.jsx";

function App() {

    return (
        <div>
            <Header/>

            <div className={styles.wrapper}>
                <aside>
                    <Sidebar />
                </aside>
                <main>

                </main>
            </div>
        </div>
    )
}

export default App
