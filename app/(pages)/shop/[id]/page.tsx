import ItemMainView from "../../../components/sections/ItemMainView";

interface ShopProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ShopProductPage({
  params,
}: ShopProductPageProps) {
  const { id } = await params;

  return (
    <div className="min-h-screen">
      <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[32px] py-[64px] sm:py-[96px]">
        <ItemMainView />
      </div>
    </div>
  );
}
