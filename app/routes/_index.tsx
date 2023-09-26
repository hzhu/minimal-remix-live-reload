import { useBlockNumber } from "wagmi";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { data, isLoading } = useBlockNumber({
    watch: true
  });
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>The block number is {data?.toString()}</div>
      )}
    </div>
  );
}
