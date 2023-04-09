import React from "react";

import { useAuth } from "entities/auth";
import { BonusUI } from "entities/bonus";
import { Layout } from "shared/ui";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";

const Main = () => {
  const { isAuth } = useAuth();

  if (!isAuth) return <div>Процесс авторизации...</div>;
  return (
    <Layout footer={<Footer />} header={<Header />}>
      <BonusUI.Card />
    </Layout>
  );
};

export default Main;