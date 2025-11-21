interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-[32px] py-[96px]">
        <h1 className="font-bold text-dose-dark text-[56px] tracking-[-1.12px] mb-6">
          Blog: {slug}
        </h1>
        <p className="font-medium text-dose-mid text-[18px] tracking-[-0.36px] leading-[1.5]">
          Blog post content coming soon...
        </p>
      </div>
    </div>
  );
}
