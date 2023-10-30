export interface ContentSectionProps {
  sequence: string;
  label: string;
  description: string;
  type: string;
}

export interface CarouselCustomProps {
  type: string;
  children: React.JSX.Element[];
}

export interface GridArrangeProps {
  title: string;
  img: string;
  type: string;
  contentData: ContentSectionProps[];
}