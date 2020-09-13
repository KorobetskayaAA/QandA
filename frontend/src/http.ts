import { webAPIUrl } from './AppSettings';

export interface HttpRequest<REQB> {
  path: string;
  method?: string;
  body?: REQB;
  accessToken?: string;
}
export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}

export const http = <REQB, RESB>(
  config: HttpRequest<REQB>,
): Promise<HttpResponse<RESB>> => {
  return new Promise((resolve, reject) => {
    const requestHeaders = new Headers({
      'Content-Type': 'application/json',
      'X-My-Custom-Header': 'value-v',
    });
    if (config.accessToken) {
      requestHeaders.set('Authorization', `bearer ${config.accessToken}`);
    }
    let response: HttpResponse<RESB>;
    fetch(`${webAPIUrl}${config.path}`, {
      method: config.method || 'get',
      headers: requestHeaders,
      body: config.body ? JSON.stringify(config.body) : undefined,
    })
      .then((res) => {
        response = res;
        if (res.headers.get('Content-Type') || ''.indexOf('json') > 0) {
          return res.json();
        } else {
          resolve(response);
        }
      })
      .then((body) => {
        if (response.ok) {
          response.parsedBody = body;
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};
