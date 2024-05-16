export default function RestaurantLayout({
  restaurant,
  food,
}: {
  restaurant: React.ReactNode;
  food: React.ReactNode;
}) {
  return (
    <>
      {restaurant}
      {food}
    </>
  );
}
