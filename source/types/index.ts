import {Color} from 'react-native-svg';

export interface IconProps {
  size: number;
  color: Color;
}

export interface UserType {
  userId: number;
  userImage: string;
  userName: string;
}
export interface PostProps {
  id: string;
  soru: string;
  cevap: string;
  user: UserType;
  like: number;
  date: string;
  soran: string;
}

export interface UserNotify {
  id: string | string;
  type: 'soru' | 'like' | 'follow';
  soru?: string;
  user: UserType;
  time: string;
  cevap?: string;
}
