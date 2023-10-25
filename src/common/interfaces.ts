export interface ContentSectionProps {
  sequence: string;
  label: string;
  content: string;
  type?: string;
}

export interface CarouselCustomProps {
  data: Array<ContentSectionProps>;
  type: string;
}

export interface RenderContentProps {
  title: string;
  img: React.JSX.Element;
  carousel: React.JSX.Element;
}