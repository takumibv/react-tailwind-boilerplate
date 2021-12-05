import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";

type Props = {
  children: React.ReactNode;
};

export const HeaderLayout: VFC<Props> = memo(({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="bg-gray-100 flex-1">
      <div className="container mx-auto px-4">{children}</div>
    </main>
  </div>
));
