import React from "react";
import { getProviders, signIn } from "next-auth/react";

function login({ providers }) {
  return (
    <div className="login">
      <img
        className="login_spot_logo"
        src="https://links.papareact.com/9xl"
        alt=""
      />
      {Object.values(providers).map((provider) => (
        <>
          <button
            className="login_loginButton"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </>
      ))}
    </div>
  );
}

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
