import { Component, OnInit, SimpleChanges, OnChanges, Input, Inject } from '@angular/core';
import { Product } from '../stock.models';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../stock.service';

@Component({
    selector   : 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls  : ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnChanges {
    @Input() product: Product;
    
    // variables
    formSubmitted: boolean;
    formSubmitting: boolean;
    productDetails: FormGroup;
    
    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private stockService: StockService) {}
    
    ngOnInit() {
        this.productDetails = this.formBuilder.group({
            amount  : [],
            code    : ['', Validators.required],
            maxStock: [],
            minStock: [],
            name    : ['', Validators.required],
            supplier: [],
            type    : [],
            unit    : []
        });
        // check if there is id at url
        if(this.route.snapshot.params['id']) {
            this.stockService.getProduct(this.route.snapshot.params['id']).subscribe(product => this.productDetails.setValue(product))
        }
    }
    
    ngOnChanges(changes: SimpleChanges) {
        this.productDetails.setValue(changes['product'].currentValue);
    }
    
    onSubmit({value, valid}: {value: Product, valid: boolean}) {
        // set form submitted true to show error messages on html
        this.formSubmitted = true;
        // if form is valid then call product service
        if(valid) {
            this.formSubmitting = true;
            // save product to backend
            this.stockService.updateProduct(this.route.snapshot.params['id'],value).subscribe(response => this.router.navigate(['./']));
        }
    }
}
