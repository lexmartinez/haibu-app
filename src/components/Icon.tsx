import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components';

export const Icon = ({
  name,
  color,
  size,
}: {
  name: string;
  color?: string;
  size?: number;
}) => {
  const theme = useTheme();
  return (
    <MIcon name={name} size={size || 24} color={color || theme.colors.gray} />
  );
};
