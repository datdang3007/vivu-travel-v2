import { CountryInfoProps, GroupCardCountryInfoProps } from "src/types";
import { CardCountryInfo } from "./CardCountryInfo";


export const GroupCardCountryInfo = (props: GroupCardCountryInfoProps) => {
  const { ListCountryInfo } = props;
  return (
    <>
      {ListCountryInfo.map((val: CountryInfoProps, idx: number) => (
        <CardCountryInfo
          key={idx}
          title={val.title}
          content={val.content}
          icon={val.icon}
        />
      ))}
    </>
  );
};
