import { cache } from "react";
import { PropertyData } from "../../../../api/data/data.json";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PropertyDetailsPageProps {
  params: {
    id: string;
  };
}

const getProperty = cache(async (id: string) => {
  const property = PropertyData.find((p) => p.id === id);
  if (!property) notFound();
  return property;
});

export default async function ProductDetailsPage({
  params: { id },
}: PropertyDetailsPageProps) {
  const property = await getProperty(id);

  return (
    <div>
      <Link href={`/property`}>Go Property</Link>
      {property.price}
    </div>
  );
}
