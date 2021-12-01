import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";

type Props = {
  children: React.ReactNode;
}

export const HeaderLayout: VFC<Props> = memo(({ children }) => {
  return <>
    <Header />
    {children}
  </>;
})