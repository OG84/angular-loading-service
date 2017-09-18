# angular-loading-service
Angular 4+ Loading Service

## Features

- emits an event when the first http request is started
- emits an event when all http requests have finished
- push your own observables to the service to have them additionally tracked too

## Usage

### Import the Module

```import { AngularLoadingModule } from 'angular-loading-service';```

### Add it to the imports array of your module

```
imports: [
    ...,
    AngularLoadingModule
  ],
  ...
```

### Example usage in a component

```
import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'angular-loading-service';

@Component({
  selector: 'example-component',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  isLoading: boolean;

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.loadingStart.subscribe(() => this.isLoading = true);
    this.loadingService.loadingEnd.subscribe(() => this.isLoading = false);
  }
}


```

### If you want the service to additionally watch your observables, use the start method

```this.loadingService.start(yourObservable);```

### You can also use the boolean property isLoading

```const isLoading = this.loadingService.isLoading;```