import * as Koa from 'koa';

declare module 'koa' {
  interface Request extends Koa.BaseRequest {
    body: any
  }

  interface Context extends Koa.BaseContext {

  }
}
