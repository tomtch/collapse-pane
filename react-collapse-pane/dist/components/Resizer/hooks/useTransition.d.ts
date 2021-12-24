import { CollapseOptions } from '../../SplitPane';
import { Fade, Grow, Zoom } from '@material-ui/core';
declare type TransitionComponent = typeof Fade | typeof Grow | typeof Zoom;
export declare const useTransition: (collapseOptions?: CollapseOptions | undefined) => TransitionComponent;
export {};
