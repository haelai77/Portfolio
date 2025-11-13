export default function getCssVariableValue(varName: string): string {


  if (typeof window === "undefined") {
    console.warn(`getCssVariableValue called on server for "${varName}"`);
    return "";
  }

  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();

  if (!value) {
    console.warn(`CSS variable "${varName}" not found or empty`);
  }

  return value;
}