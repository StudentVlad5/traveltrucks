export type Item = {
  key: string;
  path: string;
};

export interface NavItemProps {
  item: Item;
  pathname: string;
  onClick?: () => void;
}
