import React from 'react';

function getSearchParamsObj(): URLSearchParams {
  return new URLSearchParams(window.location.search);
}

export function getLaunchParamsString() {
  return getSearchParamsObj().toString();
}

export function getLaunchParam(key: string) {
  const searchParamsObj = getSearchParamsObj();

  return searchParamsObj.get(key);
}

export function getHashParam(key: string) {
  const hashObject = new URLSearchParams(window.location.hash.substr(1));

  return hashObject.get(key);
}

export const getFormattedNumber = (number: number) => number.toLocaleString('ru', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const parseJWT = (token: string) => {
  if (token === '') {
    return null;
  }
  return JSON.parse(atob(token.split('.')[1]));
};

export function scrollToEndOnFocus(event: React.FocusEvent<HTMLInputElement>) {
  const element = event.target;

  element.scrollLeft = element.scrollWidth;
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};


