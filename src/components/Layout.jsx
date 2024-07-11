import React, { useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from './Header';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <ScrollRestoration />
        <Outlet />
      </main>
    </>
  )
}