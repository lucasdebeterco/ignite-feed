import {Header} from './components/header'
import {Sidebar} from "./components/Sidebar.jsx";
import {Post} from "./components/Post.jsx";

import styles from './App.module.css'
import './global.css'

function App() {

    return (
        <div>
            <Header/>

            <div className={styles.wrapper}>
                <aside>
                    <Sidebar />
                </aside>
                <main>
                    <Post />
                </main>
            </div>
        </div>
    )
}

export default App
