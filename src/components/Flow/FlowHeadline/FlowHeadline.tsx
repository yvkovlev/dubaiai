import React, { FC } from 'react';

import './FlowHeadline.css';

interface FlowHeadlineProps {
  text?: string;
  className?: string;
  loading?: boolean;
}

export const FlowHeadline: FC<FlowHeadlineProps> = ({
  text = '',
  className = '',
  loading = false,
}) => {
  return (
    <h4 className={`FlowHeadline ${className}`}>
      { loading ? "Loading..." : text }
    </h4>
  );
};
