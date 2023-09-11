# Front-end developer challenge

This repository contains a sample component library. 

## Key technologies

* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [styled-components](https://styled-components.com/)

## Goal

An [Untitled UI](https://www.untitledui.com/) is used as a design reference.

Your goal is to implement a [Checkbox component](https://www.figma.com/file/OdF2bqIg4sqa2lbz0omeoN/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-%E2%80%93-PRO-(v3.2)?type=design&node-id=1097-63638&mode=design):
* A bare minimum is to implement the box-only version
* Implementing label + supporting text version is optional
* All sizes must be supported
* There is no need to implement radio button appearance, just check box.

Please branch out off the main branch, or fork this repository.

## Running the code

This project is managed via [pnpm](https://pnpm.io/).

Make sure you install dependencies first by running ``pnpm i``.

Once all dependencies are installed, you can develop further using pre-configured storybook by running ``pnpm storybook``.

## Assessment

Parameters being assessed:
* **Completion** - was the task completed fully?
* **Accuracy** - was the common coding style followed?
* **Awareness** - have the present components been reused?

## Notes

### Font assets

This project contains pre-configured font (Satoshi). Please use it as a primary font. This font is used to ensure proper typography is applied.

### SVG assets

This repository also has Vite's SVGR plugin configured - feel free to use it should you require to import SVG files.

Please place all your SVG files into src/assets/svg folder.

Read more & usage: https://www.npmjs.com/package/vite-plugin-svgr.

### Untitled UI

Untitled UI offers a free version. [Checkboxes](https://www.untitledui.com/components/checkboxes) are included into free version.
If you have a Figma account, you can install this version for your convenience - this will give you access to Dev Mode and hence better quality outcome. 
