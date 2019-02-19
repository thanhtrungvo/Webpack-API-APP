import LinkHome from './component/LinkHome'
import LinkSo1 from './component/LinkSoMot'
import LinkSo2 from './component/LinkSoHai'
import LinkSo3 from './component/LinkSoBa'
import LinkProduct from './component/LinkProduct'
import LinkNotFound from './component/LinkNotFound'
import LinkLogin from './component/LinkLogin';

export const routes = [
    {path:"/", exact: true, component : LinkHome},
    {path:"/link1", exact: true, component : LinkSo1},
    {path:"/link2", exact: true, component : LinkSo2},
    {path:"/link3", exact: true, component : LinkSo3},
    {path:"/product", exact: false, component : LinkProduct},
    {path:"/login", exact: true, component : LinkLogin},
    {path:"", exact: false, component : LinkNotFound },
]