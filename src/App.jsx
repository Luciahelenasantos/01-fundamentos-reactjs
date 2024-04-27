import { Post } from "./Post"
import { Header } from "./components/Header"

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Nicole Bidigaray" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempora laborum recusandae sunt quasi dicta mollitia nam illo, aliquam suscipit." 
      />
      <Post
         author="Marcelo Tedesco"
         content="Um novo post muito legal"
      />
    </div>
  )
}
