import React from "react";
import { useGeneral } from "../utils/use-general";
import { IdSelect } from "./id-select";

export const UserSelect = (props: React.ComponentProps<typeof IdSelect>) => {
  const { data: users } = useGeneral<UserProps>("users");
  return <IdSelect options={users || []} {...props} />;
};
