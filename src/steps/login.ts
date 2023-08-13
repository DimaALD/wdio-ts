import { When } from "@wdio/cucumber-framework";
import { getElement } from "../page-objects/PageProvider";
import { waitAndClick, waitAndType } from "../helpers/element/action";

When(/I login as "([^"]*)" user/, async function (username: string) {
  const usernameInput = await getElement("Login page > username");
  const passwordInput = await getElement("Login page > password");
  const submitBtn = await getElement("Login Page > submit");
  await waitAndType(usernameInput, username);
  await waitAndType(passwordInput, "secret_sauce");
  await waitAndClick(submitBtn);
});
