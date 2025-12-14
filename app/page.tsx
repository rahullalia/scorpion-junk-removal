export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-dark rounded-2xl px-6 py-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center text-xl font-bold">
                S
              </div>
              <span className="font-semibold text-lg tracking-tight hidden sm:block">Scorpion Junk Removal</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="sms:6614447965"
                className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Text for Quote
              </a>
              <a
                href="tel:6614447965"
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 text-sm animate-pulse-glow"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden sm:inline">(661) 444-7965</span>
                <span className="sm:hidden">Call</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
        {/* Animated background gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-red-500/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-800/50 rounded-full blur-[150px]" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-zinc-300">4.7 Rating</span>
            <span className="text-zinc-600">•</span>
            <span className="text-sm text-zinc-400">27 Reviews on Google</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-gradient">Junk Gone.</span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
              Space Reclaimed.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Bakersfield&apos;s premium junk removal service.
            <span className="text-white"> Fast. Clean. Eco-friendly.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="tel:6614447965"
              className="group relative bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 glow-red inline-flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Get Free Quote
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full" />
            </a>
            <a
              href="sms:6614447965"
              className="glass hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Text Photos for Quote
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Open 7 AM - 7 PM Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Same Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Transparent Pricing</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-red-500 font-medium tracking-wider uppercase text-sm">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Complete Junk Solutions
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              From a single item to entire property cleanouts—we handle it all with care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                title: "Residential",
                desc: "Furniture, appliances, yard waste, and everything in between"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Commercial",
                desc: "Office furniture, electronics, and business debris removal"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                ),
                title: "Property Cleanouts",
                desc: "Full estate and property cleanouts for realtors and managers"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                title: "Demolition",
                desc: "Residential and commercial tear-downs and debris removal"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                ),
                title: "Dumpster Rentals",
                desc: "Flexible rental options for any project size"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                title: "Power Washing",
                desc: "Driveways, sidewalks, and property exteriors"
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group relative bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-red-500/50 hover:bg-zinc-900 transition-all duration-500 hover-lift"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 bg-zinc-800 group-hover:bg-red-600/20 rounded-2xl flex items-center justify-center mb-6 text-zinc-400 group-hover:text-red-400 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
                  <p className="text-zinc-500 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Items We Take */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-500 font-medium tracking-wider uppercase text-sm">What We Haul</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              If You Can Lift It, We&apos;ll Take It
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Furniture", "Appliances", "Electronics", "Yard Waste", "Hot Tubs",
              "Mattresses", "Construction Debris", "Pool Tables", "Refrigerators",
              "Washers & Dryers", "TVs & Monitors", "Cardboard", "Office Equipment",
              "Exercise Equipment", "Pianos", "Sheds"
            ].map((item, i) => (
              <span
                key={i}
                className="px-5 py-2.5 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-sm text-zinc-300 hover:border-red-500/50 hover:text-white transition-all duration-300 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="text-center text-zinc-500 mt-8">
            Not sure if we take it? <a href="sms:6614447965" className="text-red-400 hover:text-red-300 transition-colors">Text us a photo</a> and we&apos;ll let you know instantly.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-red-500 font-medium tracking-wider uppercase text-sm">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Loved by Bakersfield
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John M.",
                text: "Fast, professional, and affordable. They cleared out my garage in no time. The team was respectful and left everything spotless.",
                role: "Homeowner"
              },
              {
                name: "Sara T.",
                text: "On-time arrival and left my property cleaner than before. Highly recommend to anyone needing junk removal in Bakersfield!",
                role: "Property Manager"
              },
              {
                name: "David P.",
                text: "Efficient office cleanup. The team was courteous, hardworking, and made our move so much easier. Will definitely use again.",
                role: "Business Owner"
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative glass rounded-3xl p-8 h-full">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-zinc-300 leading-relaxed mb-8">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center font-semibold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-zinc-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-500 font-medium tracking-wider uppercase text-sm">Why Scorpion</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
                The Difference Is <br />
                <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">In The Details</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-8">
                We&apos;re not just hauling junk—we&apos;re restoring your space and peace of mind. Every job gets our full attention.
              </p>
              <a
                href="tel:6614447965"
                className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium transition-colors animated-underline"
              >
                Get started today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Transparent Pricing",
                  desc: "Know exactly what you'll pay before we lift a finger. No surprises."
                },
                {
                  title: "Same-Day Service",
                  desc: "Need it gone today? We've got you covered with rapid response times."
                },
                {
                  title: "Eco-Conscious",
                  desc: "We recycle and donate whenever possible. Your junk gets a second life."
                },
                {
                  title: "Text-to-Quote",
                  desc: "Snap a photo, text it over, get a quote in minutes. That simple."
                },
              ].map((item, i) => (
                <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-red-600/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-red-500 font-medium tracking-wider uppercase text-sm">Coverage</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
            Serving Kern County
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["Bakersfield", "Oildale", "Shafter", "Wasco", "Taft", "Arvin", "Lamont", "Delano"].map((area, i) => (
              <span
                key={i}
                className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-300 hover:border-red-500/50 hover:text-white transition-all duration-300"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="glass rounded-3xl p-8 inline-block">
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 bg-red-600/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-lg">800 Grant Dr, Bakersfield, CA 93308</p>
                <a
                  href="https://maps.google.com/?q=800+Grant+Dr,+Bakersfield,+CA+93308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 text-sm transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 via-zinc-950 to-zinc-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[150px]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Reclaim <br />
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">Your Space?</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Free quotes. Transparent pricing. Same-day service available. Let&apos;s make your junk disappear.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:6614447965"
              className="group relative bg-gradient-to-r from-red-600 to-red-500 px-10 py-5 rounded-2xl font-semibold text-xl transition-all duration-300 hover:scale-105 glow-red-strong inline-flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (661) 444-7965
            </a>
            <a
              href="mailto:Dominique@scorpionjunkremoval.com"
              className="glass hover:bg-white/10 px-10 py-5 rounded-2xl font-semibold text-xl transition-all duration-300 inline-flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>

          <p className="text-zinc-500">
            Open 7 AM - 7 PM, every day of the week
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center text-xl font-bold">
                  S
                </div>
                <span className="font-semibold text-lg">Scorpion Junk Removal</span>
              </div>
              <p className="text-zinc-500 max-w-sm">
                Bakersfield&apos;s trusted junk removal service. Fast, professional, and eco-friendly hauling for homes and businesses.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-zinc-400 text-sm">
                <p>(661) 444-7965</p>
                <p>Dominique@scorpionjunkremoval.com</p>
                <p>800 Grant Dr, Bakersfield, CA 93308</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <div className="space-y-3 text-zinc-400 text-sm">
                <p>Monday - Sunday</p>
                <p>7:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-sm">
              © {new Date().getFullYear()} Scorpion Junk Removal. All rights reserved.
            </p>
            <div className="flex gap-6 text-zinc-500 text-sm">
              <span>Bakersfield, CA</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
