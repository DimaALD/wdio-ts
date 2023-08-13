import { Then } from "@wdio/cucumber-framework";
import { getElement } from '../../page-objects/PageProvider';

Then(
  /The "([^"]*)" element should have text "([^"]*)"/,
  async function (alias: string, text: string) {
    const element = getElement(alias);
  }
);
