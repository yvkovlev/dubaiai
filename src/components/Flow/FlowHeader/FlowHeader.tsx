import React, { FC } from 'react';

import './FlowHeader.css';

interface FlowHeaderProps {
  text?: string;
  className?: string;
  loading?: boolean;
}

export const FlowHeader: FC<FlowHeaderProps> = ({
  text = '',
  className = '',
  loading = false,
}) => {
  return (
    <h1 className={`FlowHeader ${className}`}>
      { loading ? "Loading..." : text }
    </h1>
  );
};
