export interface NftProps extends React.HTMLAttributes<HTMLElement> {
  nftID?: string;
  owner?: string;
  platform?: string;
  marketURL?: string;
  lastActivity?: string;
  address?: string;
  price?: number;
  collection?: string;
  name?: string;
  onchange?: (e: any) => void;
  parentHeight?: string;
  floor_price?: number;
  symbol?: string;
  image?: string;
  creator?: string;
  description?: string;
  plateform?: string;
  items?: number;
  owners?: number;
  last_activity?: string;
  traits?: any;
  activity?: any;
}
