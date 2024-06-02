import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/53702713?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong></strong>
                <time title='11 de Maio ás 08:13:30' dateTime="2022-05-11">Publicado há 1h</time>
              </div>
              <button title="Deletar comentário"></button>
                <Trash size={24} />

            </header>

            <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>

    </div>
  )
}