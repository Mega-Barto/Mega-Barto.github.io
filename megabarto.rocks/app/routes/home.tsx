import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MegaBarto's Portfolio" },
    { name: "description", content: "Welcome to MegaBarto's Portfolio!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
