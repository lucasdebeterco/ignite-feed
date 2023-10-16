import styles from "./Post.module.css"
import { Comment } from "./Comment.jsx"
import { Avatar } from "./Avatar.jsx"

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src='https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50'
                    />
                    <div className={styles.authorInfo}>
                        <strong>Lucas Debeterco</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='11 de Maio às 08:12h' dateTime='2022-05-11 08:12:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href=''>jane.design/doctorcare</a></p>
                <p>
                    <a href=''>#novoprojeto</a>{' '}
                    <a href=''>#nlw</a>{' '}
                    <a href=''>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}