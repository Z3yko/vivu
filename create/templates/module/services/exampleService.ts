import type { AxiosResponse } from 'axios'
import type Http from '@/services/Http'

export default class ExampleService {
  protected http: Http

  /**
   * @param  {Http} http
   */
  public constructor(http: Http) {
    this.http = http
  }

  /**
   * @param  {string} url
   * @param  {{}} params?
   * @param  {{}} config?
   * @returns Promise
   */
  public async get(url: string, params?: {}, config?: {}): Promise<AxiosResponse<any>> {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.http.get(url, params, config)
    }
    catch (error) {
      throw error
    }
  }
}
