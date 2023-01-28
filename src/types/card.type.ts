import type { Shape } from './shape.type';
import type { Color } from './color.type';
import type { Background } from './background.type';
export interface CardObj {
  selected: boolean;
  shape: Shape;
  color: Color;
  bg: Background;
};
