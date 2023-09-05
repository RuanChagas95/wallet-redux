export default async function api() {
  return ((await (fetch('https://economia.awesomeapi.com.br/json/all'))).json());
}
