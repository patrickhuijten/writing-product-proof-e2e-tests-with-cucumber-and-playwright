import { setWorldConstructor } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";

export interface CustomWorld {
  browser: Browser;
  context: BrowserContext;
  page: Page;
}

setWorldConstructor(function (this: CustomWorld) {});
