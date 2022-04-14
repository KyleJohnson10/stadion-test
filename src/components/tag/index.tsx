import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { variables } from '../../store/variables';
import { Category } from '../../store/interfaces';

interface ITag {
  category?: Category;
  categoryUrl?: string;
}

const TagContainer = styled.div<{ category: Category }>`
  border: 1px solid ${({ category }): string => (variables.categories[category])};
  padding: 10px 30px;
  width: fit-content;
  cursor: pointer;

  p {
    color: ${({ category }): string => (variables.categories[category])};
    font-weight: 800;
    text-transform: uppercase;
  }
`;

export const Tag: FunctionComponent<ITag> = (props: ITag) => {
  const { category, categoryUrl } = props;

  return (
    <TagContainer onClick={(): void => {
      if (categoryUrl) {
        window.open(categoryUrl, '_blank');
      }
    }} category={category || "mens"}>
      <p>{category}</p>
    </TagContainer>
  );
};
