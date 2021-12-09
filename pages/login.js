import React from "react";
import { getProviders, signIn } from "next-auth/react";

function login({ providers }) {
  return <div>LL</div>;
}

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
