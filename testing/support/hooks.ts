import { After, Before } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { CustomWorld } from "./custom-world";

Before<CustomWorld>(async function () {
  this.browser = await chromium.launch();
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After<CustomWorld>(async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});
