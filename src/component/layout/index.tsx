import React from "react";
import { ReactNode } from "react";
import Nav from "./nav";
interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
