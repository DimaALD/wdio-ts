import { When } from "@wdio/cucumber-framework";
import { getElement } from "../page-objects/PageProvider";
import { waitForElementToBeVisible } from "../helpers/element/wait";

When(
  /I wait for "([^"]*)" element to be visible/,
  async function (alias: string) {
    const element = await getElement(alias);
    await waitForElementToBeVisible(element);
  }
);
