import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
    {
        path: 'products',
        children: [
            {
                path: '',
                component: ProductListComponent,
                data: {
                    title: 'Ürünler'
                }
            },{
                path: 'create',
                component: ProductDetailsComponent,
                data: {
                    title: 'Ürün Ekle'
                }
            },{
                path: ':id',
                component: ProductDetailsComponent,
                data: {
                    title: 'Ürün Detay'
                }
            }

        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StockRouting {
}
