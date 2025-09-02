import { Button } from "ui";
import OneClassLogo from "@/assets/one-class-logo.svg";

export default function Home() {
  return (
    <>
      <OneClassLogo />
      <h1 className="text-3xl font-bold text-gray-800 mb-6">OneClass Teacher</h1>
      <Button appName="OneClass Teacher">OneClass Teacher</Button>
    </>
  );
}
