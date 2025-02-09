import { InfoItem } from "../../utils/types";
import "./styles.css";

type Props = {
  item: InfoItem;
};

export const DetailedInfoItem = ({ item }: Props) => {
  return (
    <div>
      <div className="label">{item.label}</div>
      <div className="info">{item.info ? item.info : '-'}</div>
    </div>
  );
};
