import Home from "../components/homeClient";

type Props = {
  params: { locale: string };
};

export default function Page({ params }: Props) {
  // Tu peux passer la locale à ton composant si nécessaire
  return <Home locale={params.locale} />;
}