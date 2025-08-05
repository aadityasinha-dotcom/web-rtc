export default function queryParams(search: string) {
  let query: string = String(search).split('?')[1];
  let params = String(query)
    .split('&')
    .reduce((res: any, q: any) => {
      let item: any = String(q).split('=');
      return {
        ...res,
        [item[0]]: item[1],
      };
    }, {});
  return params;
}
