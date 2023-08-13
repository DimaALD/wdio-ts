export async function waitForElementToBeVisible(
  element: ChainablePromiseElement,
  timeout = 5000
) {
  await element.waitForEnabled({ timeout });
  await element.scrollIntoView({ block: "center", inline: "center" });
  await element.waitForDisplayed({ timeout });
}

export async function waitForTextPresence(
  element: ChainablePromiseElement,
  text: string,
  timeout = 5000
) {
  await element.waitUntil(async function () {
    return (await this.getText())?.trim() === text;
  });
}
