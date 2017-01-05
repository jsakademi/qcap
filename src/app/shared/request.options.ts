import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { environment } from '../../environments/environment'

@Injectable()
export class CoreRequestOptions extends BaseRequestOptions {
  merge(options?:RequestOptionsArgs):RequestOptions {
    options.url = environment.baseUrl + options.url;
    var result = super.merge(options);
    result.merge = this.merge;
    return result;
  }
}
