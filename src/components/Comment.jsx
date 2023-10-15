import styles from './Comment.module.css'
import {ThumbsUp, Trash} from 'phosphor-react'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src='https://github.com/lucasdebeterco.png' alt='' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Debeterco</strong>
                            <time title='11 de Maio às 08:12h' dateTime='2022-05-11 08:12:00'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Muito bom, parabéns</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}