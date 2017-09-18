import { NgModule } from '@angular/core';
import { Http, XHRBackend, RequestOptions, HttpModule } from '@angular/http';
import { LoadingService } from './angular-loading.service';
import { AngularLoadingHttpService } from './angular-loading-http.service';

@NgModule({
  declarations: [],
  imports: [HttpModule],
  providers: [
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, LoadingService]
    },
    LoadingService
  ]
})
export class AngularLoadingModule { }

export function httpFactory(backend: XHRBackend, options: RequestOptions, httpLoadingService: LoadingService) {
  return new AngularLoadingHttpService(backend, options, httpLoadingService);
}

