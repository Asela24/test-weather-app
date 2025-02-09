import { InfoItem } from "../../utils/types";
import { DetailedInfoItem } from "../DetailedInfoItem/DetailedInfoItem";
import "./styles.css";

type Props = {
  details: InfoItem[];
};

export const DetailedInfo = ({ details }: Props) => {
  return (
    <div className="detailed-info-container">
      {details.map((detail) => (
        <DetailedInfoItem item={detail} key={detail.label} />
      ))}
    </div>
  );
};
