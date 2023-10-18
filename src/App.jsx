import {Header} from './components/header'
import {Sidebar} from "./components/Sidebar.jsx";
import {Post} from "./components/Post.jsx";

import styles from './App.module.css'
import './global.css'

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/lucasdebeterco.png',
            name: 'Lucas Debeterco',
            role: 'Student @ Rocketseat'
        },
        content: [
            { type: 'paraghaph', content:'Fala galeraa 👋' },
            { type: 'paraghaph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content:'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2023-10-16 20:00:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Lucas Debeterco',
            role: 'CEO @ Rocketseat'
        },
        content: [
            { type: 'paraghaph', content:'Fala galeraa 👋' },
            { type: 'paraghaph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content:'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2023-10-10 20:00:00')
    },
]

function App() {
    return (
        <div>
            <Header/>

            <div className={styles.wrapper}>
                <aside>
                    <Sidebar />
                </aside>
                <main>
                    { posts.map(post => {
                        return (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        )
                    })}
                </main>
            </div>
        </div>
    )
}

export default App
