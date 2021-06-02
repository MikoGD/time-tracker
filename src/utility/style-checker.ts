export interface Styles {
  [property: string]: string | number;
}

export const checkStyles = (
  styles: Styles | undefined,
  componentName: string,
  allowedStyles: string[]
): Styles | undefined => {
  if (styles) {
    Object.keys(styles).forEach((style) => {
      if (allowedStyles.find((allowedStyle) => allowedStyle === style) === undefined) {
        throw new Error(`The style '${style}' is not allowed in ${componentName}`);
      }

      return styles;
    });
  }

  return styles;
};
