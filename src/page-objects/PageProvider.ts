import { HomePage, LoginPage } from "./index";

const PATH_TO_ELEMENT_REG_EXP = /\s?>\s?/i;
const PO_NAME_REG_EXP = /.+(?=\s[pP]age$)/i;
const INDEX_REG_EXP = /([1-9]\s+)(\w+)/i;

export function getPage(pageName: string): any {
  switch (pageName) {
    case "Login":
      return LoginPage;
    case "Home":
      return HomePage;
    default:
      throw new Error(`[getPage] No such ${pageName} page in Page Objects`);
  }
}

export async function getElement(alias: string) {
  const pathToElement = alias.split(PATH_TO_ELEMENT_REG_EXP);
  const pageName = PO_NAME_REG_EXP.exec(pathToElement[0])[0];
  if (!pathToElement.length) {
    throw new Error(`[getElement] Should have at least 1 element`);
  }

  if (!pageName) {
    throw new Error(
      `[getElement] Page Name should be first and in next format: Login page`
    );
  }

  const page = getPage(pageName);
  return await getElementByPath(page, pathToElement)
}

function getElementName(element: string) {
  if (INDEX_REG_EXP.exec(element)) {
    const [_, index, name] = INDEX_REG_EXP.exec(element);
    return [name, index];
  }
  return [element];
}

async function getElementByPath(page, pathToElement) {
  let tempElem = page.children;
  let element: any = $(page.selector);
  for (let i = 1; i < pathToElement.length; i++) {
    const [name, index] = getElementName(pathToElement[i]);
    if (tempElem[name].isCollection && index) {
      element = element.$$(tempElem[name].selector)[parseInt(index) - 1];
    } else if (tempElem[name].isCollection) {
      element = await element.$$(tempElem[name].selector);
    } else {
      element = await element.$(tempElem[name].selector);
    }
    if (name in tempElem && tempElem[name].children) {
      tempElem = tempElem[name].children;
    }
  }
  return element;
}
