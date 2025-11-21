interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-[32px] py-[96px]">
        <h1 className="font-['Albert_Sans:Bold',sans-serif] font-bold text-[#6c2517] text-[56px] tracking-[-1.12px] mb-6">
          Blog: {slug}
        </h1>
        <p className="font-['Albert_Sans:Medium',sans-serif] font-medium text-[#9c5243] text-[18px] tracking-[-0.36px] leading-[1.5]">
          Blog post content coming soon...
        </p>
      </div>
    </div>
  );
}
