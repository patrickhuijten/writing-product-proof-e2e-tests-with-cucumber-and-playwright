import { expect } from "@playwright/test";
import { Given, Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../support/custom-world";

Given<CustomWorld>("Go to the home page", async function () {
  await this.page.goto("http://localhost:3000");
});

When<CustomWorld>(
  "User navigate to the {string} page",
  async function (pageName: string) {
    await this.page.getByRole("link", { name: pageName }).click();
  }
);

When<CustomWorld>(
  "User fills in their first name {string}",
  async function (firstName: string) {
    const input = this.page.getByRole("textbox", { name: "First name*" });
    await input.pressSequentially(firstName);
  }
);

When<CustomWorld>(
  "User fills in their last name {string}",
  async function (lastName: string) {
    const input = this.page.getByRole("textbox", { name: "Last name*" });
    await input.pressSequentially(lastName);
  }
);

When<CustomWorld>(
  "User fills in their email address {string}",
  async function (emailAddress: string) {
    const input = this.page.getByRole("textbox", { name: "Email*" });
    await input.pressSequentially(emailAddress);
  }
);

When<CustomWorld>(
  "User clicks the {string} button",
  async function (cardName: string) {
    await this.page.getByRole("button", { name: cardName }).click();
  }
);

When<CustomWorld>(
  "User clicks on {string} card",
  async function (cardName: string) {
    await this.page.getByRole("heading", { name: cardName }).click();
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

Then<CustomWorld>(
  "User sees the title {string}",
  async function (title: string) {
    const text = this.page.getByText(title);
    await expect(text).toBeVisible();
  }
);
