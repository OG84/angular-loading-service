import {
  Http,
  RequestOptionsArgs,
  Request,
  Response,
  ConnectionBackend,
  RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LoadingService } from './angular-loading.service';

@Injectable()
export class AngularLoadingHttpService extends Http {
  constructor(
    _backend: ConnectionBackend,
    _defaultOptions: RequestOptions,
    private loadingService?: LoadingService) {

    super(_backend, _defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    const request = super.request(url, options);
    this.loadingService.start(request);

    return request;
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    const get = super.get(url, options);
    this.loadingService.start(get);

    return get;
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    const post = super.post(url, body, options);
    this.loadingService.start(post);

    return post;
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    const put = super.put(url, body, options);
    this.loadingService.start(put);

    return put;
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    const _delete = super.delete(url, options);
    this.loadingService.start(_delete);

    return _delete;
  }

  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    const patch = super.patch(url, body, options);
    this.loadingService.start(patch);

    return patch;
  }

  head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    const head = super.head(url, options);
    this.loadingService.start(head);

    return head;
  }

  options(url: string, options?: RequestOptionsArgs): Observable<Response> {
    const _options = super.options(url, options);
    this.loadingService.start(_options);

    return _options;
  }
}
