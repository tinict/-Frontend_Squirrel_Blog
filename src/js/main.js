import { blog, renderBlog } from './components/bolg.js'
import { logoList } from './components/logoList.js'
import { pagination } from './components/pagination.js'
import { dataBlog } from './data/dataBlog.js'

const App = () => {
    return `
        <header></header>

        <main class="main-content">
            <div class="container">
                ${blog()}
                ${pagination()}
            </div>

            ${logoList()}
        </main>

        <footer></footer>
    `
}
const data = dataBlog

document.getElementById('root').innerHTML = App()

document.querySelector('.container__blog--list').innerHTML = renderBlog(data)
handleBlog()