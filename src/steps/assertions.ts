import { Then } from "@wdio/cucumber-framework";
import { getPage } from "../page-objects/PageProvider";

Then(/I'm on "([^"]*)" page/, async function (pageName: string) {
  const page = getPage(pageName);
  await expect(browser).toHaveUrl(page.url);
});

Then(
  /I expect text of "([^"*])" to equal "([^"*])"/,
  async function (element, text) {}
);
