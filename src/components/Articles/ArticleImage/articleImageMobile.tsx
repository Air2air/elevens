
import styled from "styled-components";

import { ARTICLE_IMAGE_SIZE_MOBILE } from "../articleConstants";
import ArticleCodeBlock from "./articleCodeBlock";

export const ArticleImageMobile = (
  props: JSX.IntrinsicAttributes & { code?: string; image?: string }
) => {
  return (
    <ArticleImageWrapperMobile>
      <ArticleImageBackground
        style={{
          backgroundImage: `url(/images/content/${props.image})`,
        }}
      />
      <ArticleCodeBlock {...props} />
    </ArticleImageWrapperMobile>
  );
};

export const ArticleImageWrapperMobile = styled.div`
  float: top;
  width: 100%;
  display: flex;
  align-items: center;
  height: ${ARTICLE_IMAGE_SIZE_MOBILE}px;
  /* background-color: blue; */
`;

export const ArticleImageBackground = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${ARTICLE_IMAGE_SIZE_MOBILE}px;
  width: ${ARTICLE_IMAGE_SIZE_MOBILE}px;
  /* background-color: blue; */
`;

export default ArticleImageMobile;
