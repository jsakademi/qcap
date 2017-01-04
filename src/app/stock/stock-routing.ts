import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Stok Modulü'
        },
        children: [
            {
                path: 'product-list',
                component: ProductDetailsComponent
            },
            {
                path: 'product-edit/:id',
                component: ProductDetailsComponent
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
