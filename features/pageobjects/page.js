/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
import { config } from "../../wdio.conf.js";
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path = "") {
    const targetUrl = path
      ? `${config.baseUrl}/${path}.htm`
      : `${config.baseUrl}`;

    return browser.url(targetUrl);
  }
}

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
