import { CSSProp, css } from "styled-components";

// type MediaQueryProps = {
//   mobile: number;
//   tablet: number;
//   desktop: number;
// };

// const sizes: MediaQueryProps = {
//   mobile: 580,
//   tablet: 768,
//   desktop: 1024,
// };

// const MediaQuery = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
//   (acc, label) => {
//     acc[label] = (style: string) =>
//       `@media (max-width: ${sizes[label] / 16}em) { ${style} }`;
//     return acc;
//   },
//   {} as { [key in keyof typeof sizes]: (style: string) => CSSProp }
// );

// export default MediaQuery;

export interface DeviceProps {
  [key: string]: number;
}

export const DeviceSize: DeviceProps = {
  mobile: 420,
  tablet: 800,
  laptop: 1600,
  desktop: 2560,
};

export const MediaQuery = Object.keys(DeviceSize).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
    css`
      @media only screen and (max-width: ${DeviceSize[label]}px) {
        ${css(literals, ...placeholders)};
      }
    `;
  return acc;
}, {} as Record<keyof typeof DeviceSize, (l: TemplateStringsArray, ...p: any[]) => CSSProp>);
