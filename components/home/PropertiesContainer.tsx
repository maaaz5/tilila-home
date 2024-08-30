import { fetchProperties } from "@/utils/actions";
import PropertiesList from "./PropertiesList";
import EmptyList from "./EmptyList";
import type { PropertyCardProps } from "@/utils/types";

async function PropertiesContainer({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  const properties: PropertyCardProps[] = await fetchProperties({
    category,
    search,
  });
  console.log(search, category);

  console.log(properties);

  if (properties.length === 0) {
    return (
      <EmptyList
        heading="No results."
        message="Try changin or removing some of your filters"
        btnText="Clear Filters"
      />
    );
  }

  return <PropertiesList properties={properties} />;
}

export default PropertiesContainer;
