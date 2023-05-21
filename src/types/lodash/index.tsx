declare module "lodash" {
  // lodash 모듈의 타입 선언 확장

  // 페이지 레이아웃 타입 정의
  import { ReactNode } from "react";

  export interface PageLayoutProps {
    children: ReactNode;
  }
  export interface ImageProps {
    src: string;
    alt: string;
    size: number;
  }

  export interface CategoriesProps {
    categories: string[];
  }

  export interface OnChangeProps {
    target: {
      id: string;
      value: string | number | undefined;
    };
  }
}
