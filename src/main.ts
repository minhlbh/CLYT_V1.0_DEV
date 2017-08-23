import { enableProdMode, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { getAppModule } from './app/app.module';
import { environment } from './environments/environment';
import { SettingService } from './app/Share/Services/setting.service';
import { ReflectiveInjector, Injectable, OpaqueToken, Injector } from '@angular/core';

import {
    Http, CookieXSRFStrategy, XSRFStrategy, RequestOptions, BaseRequestOptions,
    ResponseOptions, BaseResponseOptions, XHRBackend, BrowserXhr, Response
} from '@angular/http';



if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(appST());

class NoopCookieXSRFStrategy extends CookieXSRFStrategy {
    configureRequest(request) {
        // noop
    }
}

function getHttp(): Http {
    const providers = [
        {
            provide: Http, useFactory: (backend: XHRBackend, options: RequestOptions) => {
                return new Http(backend, options);
            },
            deps: [XHRBackend, RequestOptions]
        },
        BrowserXhr,
        { provide: RequestOptions, useClass: BaseRequestOptions },
        { provide: ResponseOptions, useClass: BaseResponseOptions },
        XHRBackend,
        { provide: XSRFStrategy, useValue: new NoopCookieXSRFStrategy() },
    ];
    return ReflectiveInjector.resolveAndCreate(providers).get(Http);
}


getHttp().get(`${environment.apiUrl}Center/Home_Detail?i=0&tenmien=${document.location.hostname}`).toPromise()
.then((res: Response) => {
    console.log(res.json());
    const conf = res.json();
    localStorage.setItem('app_menu', JSON.stringify(conf.home));
    localStorage.setItem('app_config', JSON.stringify(conf.setting));
    platformBrowserDynamic().bootstrapModule(getAppModule(conf));
})
.catch(error => { console.error(error); });
