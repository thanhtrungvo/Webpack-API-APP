import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductListPage";
import NotFoundPage from "../pages/NotFoundPage";
import AddEditPage from "../pages/AddPage";

export const menus=[
    {to:'/', name: 'Trang chủ', exact: true},
    {to:'/product-list', name: 'Quản lí sản phẩm', exact: true},
]

export const routes=[
    {path:'/', exact: true , component : HomePage },
    {path:'/product-list', exact:false  , component : ProductListPage },
    {path:'/product/add', exact:false  , component : AddEditPage },
    {path:'/product/edit/:id', exact:false  , component : AddEditPage },
    {path:'', exact:false  , component : NotFoundPage }
]