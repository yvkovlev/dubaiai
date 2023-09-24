export function clip(value: number, min: number, max: number) {
  return Math.max(Math.min(value, max), min);
}

export function convertAbsoluteToPercent(
  absoluteValue: number,
  totalValue: number,
) {
  if (totalValue === 0) {
    return 0;
  }

  return Math.round((absoluteValue / totalValue) * 100);
}

export function convertPercentToAbsolute(
  percentValue: number,
  totalValue: number,
) {
  return Math.round((percentValue * totalValue) / 100);
}

export const formatNumberToClippedString = (value: any) => {
  const num = typeof value === 'number' ? value : parseFloat(value);
  const absoluteValue = Math.abs(num);

  if (absoluteValue > 1_000_000_000_000) {
    return `${(num / 1_000_000_000_000).toFixed(1)} трлн.`;
  }

  if (absoluteValue > 1_000_000_000) {
    return `${(num / 1_000_000_000).toFixed(1)} млрд.`;
  }

  if (absoluteValue > 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)} млн.`;
  }

  if (absoluteValue > 1_000) {
    return `${(num / 1_000).toFixed(1)} тыс.`;
  }

  return value;
};
