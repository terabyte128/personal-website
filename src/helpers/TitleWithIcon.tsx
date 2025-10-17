import { Icon } from "@tabler/icons-react";

type TitleWithIconProps = {
  title: string;
  icon: Icon;
};

export const TitleWithIcon = (props: TitleWithIconProps) => {
  return (
    <div className="flex items-center">
      <props.icon size={32} className="mr-2" />
      <h1>{props.title}</h1>
    </div>
  );
};
