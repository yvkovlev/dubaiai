import React, { FC, ReactNode } from 'react';

import './FlowText.css';

interface FlowTextProps {
  text?: string | ReactNode;
  className?: string;
  loading?: boolean;
}

export const FlowText: FC<FlowTextProps> = ({
  text = '',
  className = '',
  loading = false,
}) => {
  return (
    <p className={`FlowText ${className}`}>
      { loading ? "Loading..." : text }
    </p>
  );
};
