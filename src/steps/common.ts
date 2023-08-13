import { When } from "@wdio/cucumber-framework";
import { getElement, getPage } from "../page-objects/PageProvider";
import { waitAndClick, waitAndType } from "../helpers/element/action";

When(/I click on "([^"]*)" element/, async function (alias) {
  const element = await getElement(alias);
  await waitAndClick(element);
});

When(
  /I enter "([^"]*)" in "([^"]*)" element/,
  async function (text: string, alias: string) {
    const element = await getElement(alias);
    await waitAndType(element, text);
  }
);

When("I open {word} page", async function (pageName: string) {
  const page = getPage(pageName);
  await browser.url(page.url);
});

When(
  /I select "([^"]*)" option in "([^"]*)" element/,
  async function (index: string, alias: string) {}
);
