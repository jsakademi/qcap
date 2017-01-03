import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import { Product } from '../stock.models';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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
    
    constructor(private formBuilder: FormBuilder) {}
    
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
        }
    }
}
