import { After, AfterStep, Before } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { CustomWorld } from "./custom-world";

Before<CustomWorld>(async function () {
  this.browser = await chromium.launch({
    headless: process.env.RECORD !== "true",
  });

  const context = process.env.RECORD
    ? { recordVideo: { dir: "videos/" } }
    : undefined;
  this.context = await this.browser.newContext(context);
  this.page = await this.context.newPage();
});

After<CustomWorld>(async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});

AfterStep<CustomWorld>(async function () {
  if (process.env.RECORD) await this.page.waitForTimeout(1000);
});
