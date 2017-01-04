import { Component, OnInit, SimpleChanges, OnChanges, Input, Inject } from '@angular/core';
import { Product } from '../stock.models';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { STOCK_REST } from "../stock.rest.service"

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
    
    constructor(private formBuilder: FormBuilder, @Inject(STOCK_REST) public stockService) {}
    
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
            this.stockService.post(value).subscribe(response => this.product = response);
        }
    }
}
