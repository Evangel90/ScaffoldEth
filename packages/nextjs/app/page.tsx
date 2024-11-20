"use client";

import type { NextPage } from "next";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Scaffold-ETH 2</span>
          </h1>
          <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/pages/index.tsx
            </code>
          </p>
          <PageBody />
          <ExampleContractRead />
        </div>
      </div>
    </>
  );
};

function PageBody() {
  return (
    <>
      <p className="text-center text-lg">Here we are!</p>
    </>
  );
}

function ExampleContractRead() {
  const {
    data: helloWorld,
    isPending,
    isError,
    dataUpdatedAt,
  } = useScaffoldReadContract({
    contractName: "HelloWorld",
    functionName: "helloWorld",
  });

  if (isPending) return <p className="text-center text-lg">Loading...</p>;
  if (isError) return <p className="text-center text-lg">Error getting information from your contract</p>;

  return (
    <>
      <p className="text-center text-lg">The text from the contract is {helloWorld}</p>
      <p className="text-center text-sm">This data was last updated at {new Date(dataUpdatedAt).toLocaleString()}</p>
    </>
  );
}

export default Home;
