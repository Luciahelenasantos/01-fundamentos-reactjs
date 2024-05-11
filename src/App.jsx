import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Nicole Bidigaray" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempora laborum recusandae sunt quasi dicta mollitia nam illo, aliquam suscipit." 
          />
          <Post
            author="Marcelo Tedesco"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}
