export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      text: "Dizajn me oduševio, a boje su još lepše uživo – stvarno premium osećaj.",
      author: "Name Surname",
      rating: 5,
    },
    {
      id: 2,
      text: "Savršeno drži temperaturu i izgleda fenomenalno, koristim ga svakog dana u kancelariji.",
      author: "Name Surname",
      rating: 5,
    },
    {
      id: 3,
      text: "Lagan, praktičan i izuzetno kvalitetan, idealan za putovanja i treninge.",
      author: "Name Surname",
      rating: 5,
    },
    {
      id: 4,
      text: "Kupila sam ga kao poklon i sada svi žele isti, apsolutna preporuka.",
      author: "Name Surname",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-[164px] px-[32px] w-full bg-white">
      <div className="max-w-[1376px] mx-auto flex flex-col gap-[104px] items-center">
        <div className="flex flex-col gap-[16px] items-center justify-center max-w-[675px]">
          <div className="bg-[rgba(167,37,59,0.2)] flex gap-[12px] items-center px-[24px] py-[12px] rounded-[99px]">
            <p className="font-['Albert_Sans:Medium',sans-serif] font-medium text-[#a7253b] text-[16px] tracking-[-0.32px]">
              650+ 5 star rating reviews
            </p>
          </div>
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold text-[#6c2517] text-[56px] tracking-[-1.12px] text-center">
            What our customers have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-[20px] shadow-[0px_10px_32px_0px_rgba(135,84,55,0.1)] p-[32px] flex flex-col gap-[24px]"
            >
              <div className="flex flex-col gap-[16px] h-[200px] justify-between">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[#6c2517] text-[18px] leading-[1.5] opacity-80">
                  "{testimonial.text}"
                </p>
                <div className="flex gap-[12px] items-center">
                  <div className="w-[44px] h-[44px] rounded-[12px] bg-[rgba(255,255,255,0.1)]" />
                  <div>
                    <p className="font-['Albert_Sans:Bold',sans-serif] font-bold text-[#6c2517] text-[16px]">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[4px]">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
