import React from 'react';

type Props = {
  title: string;
}

export const SearchLink: React.FC<Props> = ({ title }: Props) => {
  return (
    <a className="dropdown-item bg-white border w-75 m-auto">
      {title}
    </a>
  )
}