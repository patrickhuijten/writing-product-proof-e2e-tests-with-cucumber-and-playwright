import { expect } from "@playwright/test";
import { Given, Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../support/custom-world.js";

Given<CustomWorld>("Go to the home page", async function () {
  await this.page.goto("http://localhost:3000");
  await this.page.screenshot({ path: `screenshots/${new Date()}.png` });
});

When<CustomWorld>(
  "Navigate to the {string} page",
  async function (pageName: string) {
    await this.page.click(`text=${pageName}`);
  }
);

Then<CustomWorld>(
  "User sees the title {string}",
  async function (title: string) {
    const text = this.page.getByText(title);
    await expect(text).toBeVisible();
  }
);

Then<CustomWorld>(
  "User sees the navigation links {string}",
  async function (links: string) {
    const splitLinks = links.split(",").map((link) => link.trim());
    for (const link of splitLinks) {
      const text = this.page.getByRole("link", { name: link });
      await expect(text).toBeVisible();
    }
  }
);
