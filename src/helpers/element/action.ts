import { waitForElementToBeVisible } from "./wait";

export async function waitAndClick(
  element: ChainablePromiseElement,
  timeout = 5000
) {
  await waitForElementToBeVisible(element, timeout);
  await element.click();
}

export async function waitAndType(
  element: ChainablePromiseElement,
  text: string | number,
  timeout = 5000
) {
  await waitForElementToBeVisible(element, timeout);
  await element.addValue(text);
}
