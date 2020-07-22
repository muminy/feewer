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

export const CommentsIcon = (props: IconProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={props.color}
    strokeLinecap="round">
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
    <Line x1="12" y1="12" x2="12" y2="12.01" />
    <Line x1="8" y1="12" x2="8" y2="12.01" />
    <Line x1="16" y1="12" x2="16" y2="12.01" />
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

export const AtIcon = (props: IconProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={props.color}>
    <Circle cx="12" cy="12" r="4" />
    <Path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
  </Svg>
);

export const RightIcon = (props: IconProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={props.color}>
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Polyline points="9 6 15 12 9 18" />
  </Svg>
);

export const AppIcon = (props: IconProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={props.color}>
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Rect x="4" y="4" width="6" height="6" rx="1" />
    <Rect x="4" y="14" width="6" height="6" rx="1" />
    <Rect x="14" y="14" width="6" height="6" rx="1" />
    <Line x1="14" y1="7" x2="20" y2="7" />
    <Line x1="17" y1="4" x2="17" y2="10" />
  </Svg>
);

export const SecurityIcon = (props: IconProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={props.color}>
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
  </Svg>
);

export const BellIcon = (props: IconProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={props.color}>
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
    <Path d="M9 17v1a3 3 0 0 0 6 0v-1" />
  </Svg>
);

export const MailIcon = (props: IconProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={props.color}>
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Rect x="3" y="5" width="18" height="14" rx="2" />
    <Polyline points="3 7 12 13 21 7" />
  </Svg>
);

export const PasswordIcon = (props: IconProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={props.color}>
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Circle cx="8" cy="15" r="4" />
    <Line x1="10.85" y1="12.15" x2="19" y2="4" />
    <Line x1="18" y1="5" x2="20" y2="7" />
    <Line x1="15" y1="8" x2="17" y2="10" />
  </Svg>
);

export const ArrowLeftIcon = (props: IconProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={props.color}>
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Line x1="5" y1="12" x2="19" y2="12" />
    <Line x1="5" y1="12" x2="11" y2="18" />
    <Line x1="5" y1="12" x2="11" y2="6" />
  </Svg>
);

export const FacebookIcon = (props: IconProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={props.color}>
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
  </Svg>
);

export const TwitterIcon = (props: IconProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={props.color}>
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
  </Svg>
);
