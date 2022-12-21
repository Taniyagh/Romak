import {lazy} from 'react';
import {URL_Route} from '../setup';

const Login=lazy(()=>import('../Pages/Login/Login.js'));
const ProductsTable=lazy(()=>import('../Pages/ProductsTable/ProductsTable.js'));
const ProductswithAG=lazy(()=>import('../Pages/ProductswithAG/ProductswithAG.js'));
const ProductswithPagination=lazy(()=>import('../Pages/ProductswithPagination/ProductswithPagination.js'));

export const routes=[
    {
        path: URL_Route.default,
        protected:false,
        component:Login,
    },
    {
        path: URL_Route.productsTable,
        protected:true,
        component:ProductsTable,
    },
    {
        path:URL_Route.ProductswithPagination,
        protected:true,
        component:ProductswithPagination
    },
    {
        path:URL_Route.ProductswithAGs,
        protected:true,
        component:ProductswithAG
    }
]