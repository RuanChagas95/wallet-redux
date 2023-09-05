import { CurrenciesType } from '../types';

export default async function api(): Promise<CurrenciesType> {
  return ((await (fetch('https://economia.awesomeapi.com.br/json/all'))).json());
}
