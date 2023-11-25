/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
