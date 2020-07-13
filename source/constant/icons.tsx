import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

/* Use this if you are using Expo
  import * as Svg from 'react-native-svg';
  const { Circle, Rect } = Svg;
  */

import React from 'react';
import {IconProps} from '../types';

export const HomeIcon = (props: IconProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={props.color}
    strokeLinecap="round">
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Polyline points="5 12 3 12 12 3 21 12 19 12" />
    <Path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
    <Path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
  </Svg>
);

export const SorularIcon = (props: IconProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={props.color}
    fill="none"
    strokeLinecap="round">
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
  </Svg>
);

export const UserIcon = (props: IconProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={props.color}
    strokeLinecap="round">
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" />
    <Line x1="10" y1="10" x2="10.01" y2="10" />
    <Line x1="14" y1="10" x2="14.01" y2="10" />
    <Path d="M10 14a3.5 3.5 0 0 0 4 0" />
  </Svg>
);

export const LogoIcon = (props: IconProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={props.color}>
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />
    <Path d="M10 12l-2 -2.2l.6 -1" />
  </Svg>
);

export const SearchIcon = (props: IconProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={props.color}>
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Circle cx="10" cy="10" r="7" />
    <Line x1="21" y1="21" x2="15" y2="15" />
  </Svg>
);

export const StarIcon = (props: IconProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={props.color}>
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
  </Svg>
);

export const TimeIcon = (props: IconProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={props.color}>
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Circle cx="12" cy="12" r="9" />
    <Polyline points="12 7 12 12 15 15" />
  </Svg>
);

export const SettingIcon = (props: IconProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={props.color}>
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <Circle cx="12" cy="12" r="3" />
  </Svg>
);
