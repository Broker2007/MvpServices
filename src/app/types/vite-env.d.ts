/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.ttf';
declare module '*.woff';
declare module '*.woff2';
declare module '*.eot';
declare module '*.otf';

// ОДНА декларация для SVG
declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
