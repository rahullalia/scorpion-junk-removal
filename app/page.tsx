import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Header - Mobile Optimized */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src="https://scorpionjunkremoval.com/wp-content/uploads/2024/12/logo-transparent-png.png"
              alt="Scorpion Junk Removal Logo"
              width={40}
              height={40}
              className="w-9 h-9 sm:w-11 sm:h-11 object-contain"
            />
            <span className="font-semibold text-base sm:text-lg tracking-tight hidden xs:block">Scorpion Junk</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="sms:6614447965"
              className="flex items-center gap-1.5 sm:gap-2 text-zinc-600 hover:text-zinc-900 transition-colors text-sm font-medium px-3 py-2 rounded-full border border-zinc-200 hover:border-zinc-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="hidden sm:inline">Text Quote</span>
              <span className="sm:hidden">Text</span>
            </a>
            <a
              href="tel:6614447965"
              className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 text-sm animate-subtle-pulse"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">661.444.7965</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - Mobile First */}
      <section className="relative pt-20 sm:pt-28 pb-12 sm:pb-20 px-4 bg-gradient-to-b from-zinc-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-medium text-amber-800">4.7 Stars</span>
                <span className="text-xs sm:text-sm text-amber-700">27 Reviews</span>
              </div>

              {/* Main headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-zinc-900">
                Bakersfield&apos;s Trusted
                <span className="text-red-600"> Junk Removal</span> Experts
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
                Fast, affordable, and eco-friendly junk hauling.
                <span className="font-medium text-zinc-800"> Text us a photo for an instant quote!</span>
              </p>

              {/* CTA Buttons - Stacked on mobile */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                <a
                  href="tel:6614447965"
                  className="group relative bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3 shadow-lg shadow-red-600/25"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call for Free Quote
                </a>
                <a
                  href="sms:6614447965"
                  className="bg-white hover:bg-zinc-50 text-zinc-800 px-6 sm:px-8 py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3 border-2 border-zinc-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Text Photos for Quote
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Open 7 AM to 7 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Same Day Service</span>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative order-first lg:order-last">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                <Image
                  src="https://scorpionjunkremoval.com/wp-content/uploads/2024/12/IMG_6107-1024x768.jpg"
                  alt="Scorpion Junk Removal team at work"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <div className="bg-white/95 backdrop-blur rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900 text-sm sm:text-base">Job Completed</p>
                      <p className="text-xs sm:text-sm text-zinc-500">Property cleanout in Bakersfield</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 sm:py-8 px-4 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-red-500">500+</div>
              <div className="text-xs sm:text-sm text-zinc-400">Jobs Completed</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-red-500">4.7★</div>
              <div className="text-xs sm:text-sm text-zinc-400">Google Rating</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-red-500">Same Day</div>
              <div className="text-xs sm:text-sm text-zinc-400">Service Available</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-red-500">Eco</div>
              <div className="text-xs sm:text-sm text-zinc-400">Friendly Disposal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-red-600 font-semibold tracking-wider uppercase text-xs sm:text-sm">Our Services</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4 text-zinc-900">
              Complete Junk Removal Solutions
            </h2>
            <p className="text-zinc-600 text-sm sm:text-lg max-w-2xl mx-auto">
              From a single item to entire property cleanouts, we handle it all.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 sm:w-7 h-6 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                title: "Residential",
                desc: "Furniture, appliances, yard waste, garage cleanouts"
              },
              {
                icon: (
                  <svg className="w-6 sm:w-7 h-6 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Commercial",
                desc: "Office furniture, electronics, warehouse debris"
              },
              {
                icon: (
                  <svg className="w-6 sm:w-7 h-6 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                ),
                title: "Property Cleanouts",
                desc: "Estate cleanouts, foreclosures, rental turnovers"
              },
              {
                icon: (
                  <svg className="w-6 sm:w-7 h-6 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                title: "Demolition",
                desc: "Residential and commercial tear-downs"
              },
              {
                icon: (
                  <svg className="w-6 sm:w-7 h-6 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                ),
                title: "Dumpster Rentals",
                desc: "DIY projects and construction sites"
              },
              {
                icon: (
                  <svg className="w-6 sm:w-7 h-6 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Power Washing",
                desc: "Driveways, patios, and exteriors"
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-white border border-zinc-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-red-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 bg-red-50 group-hover:bg-red-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-5 text-red-600 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2 text-zinc-900">{service.title}</h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Gallery */}
      <section className="py-12 sm:py-20 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-red-600 font-semibold tracking-wider uppercase text-xs sm:text-sm">Our Work</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3 text-zinc-900">
              Real Results for Real People
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="relative group rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://scorpionjunkremoval.com/wp-content/uploads/2024/12/IMG_6107-1024x768.jpg"
                alt="Junk removal in progress"
                width={600}
                height={450}
                className="w-full h-48 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                <span className="bg-white text-zinc-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">Residential Cleanout</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-6">
              <div className="relative group rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://scorpionjunkremoval.com/wp-content/uploads/2024/12/IMG_6111-768x1024.jpg"
                  alt="Text for quote service"
                  width={400}
                  height={250}
                  className="w-full h-32 sm:h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <span className="bg-white text-zinc-900 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">Text for Quote</span>
                </div>
              </div>

              <div className="bg-red-600 rounded-xl sm:rounded-2xl p-4 sm:p-8 text-white text-center flex flex-col justify-center">
                <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">500+</div>
                <p className="text-red-100 text-xs sm:text-base">Jobs in Kern County</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Items We Take */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-red-600 font-semibold tracking-wider uppercase text-xs sm:text-sm">What We Haul</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3 mb-2 sm:mb-4 text-zinc-900">
              We Take Almost Anything
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base">Not sure? Text us a photo!</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              "Furniture", "Appliances", "Electronics", "Yard Waste", "Hot Tubs",
              "Mattresses", "Construction Debris", "Refrigerators",
              "Washers & Dryers", "TVs", "Office Equipment", "Exercise Equipment"
            ].map((item, i) => (
              <span
                key={i}
                className="px-3 sm:px-5 py-2 sm:py-2.5 bg-zinc-100 border border-zinc-200 rounded-full text-xs sm:text-sm text-zinc-700 hover:bg-red-50 hover:border-red-200 hover:text-red-700 transition-all duration-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-20 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <span className="text-red-600 font-semibold tracking-wider uppercase text-xs sm:text-sm">Testimonials</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3 text-zinc-900">
              Trusted by Bakersfield Families
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                name: "John M.",
                text: "Fast, professional, and affordable. They cleared out my garage in no time!",
                role: "Homeowner",
                image: "https://scorpionjunkremoval.com/wp-content/uploads/2024/12/young-bearded-man-with-striped-shirt-1024x682.jpg"
              },
              {
                name: "Sara T.",
                text: "On-time arrival and left my property cleaner than before. Highly recommend!",
                role: "Property Manager",
                image: "https://scorpionjunkremoval.com/wp-content/uploads/2024/12/serious-young-man-standing-outdoors-with-his-arms-crossed_1262-19037-683x1024.jpg"
              },
              {
                name: "David P.",
                text: "Efficient office cleanup. The team was courteous and hardworking.",
                role: "Business Owner",
                image: "https://scorpionjunkremoval.com/wp-content/uploads/2024/12/artist-white_1368-3543.jpg"
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-zinc-900 text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-zinc-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div className="text-center lg:text-left">
              <span className="text-red-600 font-semibold tracking-wider uppercase text-xs sm:text-sm">Why Choose Us</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-6 text-zinc-900">
                The Scorpion Difference
              </h2>
              <p className="text-zinc-600 text-sm sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                We&apos;re helping you reclaim your space and peace of mind. Every job gets our full attention.
              </p>
              <a
                href="tel:6614447965"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors text-sm sm:text-base"
              >
                Call us today
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {[
                {
                  title: "Upfront Pricing",
                  desc: "Know what you'll pay. No hidden fees."
                },
                {
                  title: "Same Day Service",
                  desc: "Rapid response for urgent jobs."
                },
                {
                  title: "Eco Friendly",
                  desc: "We recycle and donate when possible."
                },
                {
                  title: "Text to Quote",
                  desc: "Photo quotes in minutes."
                },
              ].map((item, i) => (
                <div key={i} className="bg-zinc-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2 text-zinc-900">{item.title}</h3>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 sm:py-20 px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-red-600 font-semibold tracking-wider uppercase text-xs sm:text-sm">Service Areas</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3 mb-6 sm:mb-8 text-zinc-900">
            Proudly Serving Kern County
          </h2>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
            {["Bakersfield", "Oildale", "Shafter", "Wasco", "Taft", "Arvin", "Delano"].map((area, i) => (
              <span
                key={i}
                className="px-3 sm:px-5 py-2 sm:py-2.5 bg-white border border-zinc-200 rounded-full text-zinc-700 font-medium hover:border-red-300 hover:bg-red-50 transition-all text-xs sm:text-base"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-zinc-100">
            <div className="w-11 h-11 sm:w-14 sm:h-14 bg-red-100 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 sm:w-7 sm:h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-semibold text-zinc-900 text-sm sm:text-base">800 Grant Dr, Bakersfield, CA 93308</p>
              <a
                href="https://maps.google.com/?q=800+Grant+Dr,+Bakersfield,+CA+93308"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700 text-xs sm:text-sm font-medium"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-20 px-4 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Ready to Clear the Clutter?
          </h2>
          <p className="text-base sm:text-xl text-red-100 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Get your free quote today. Available 7 days a week!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:6614447965"
              className="bg-white text-red-600 hover:bg-red-50 px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3 shadow-lg"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              661.444.7965
            </a>
            <a
              href="sms:6614447965"
              className="bg-red-700 hover:bg-red-800 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3 border-2 border-red-500"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Text Us a Photo
            </a>
          </div>

          <p className="mt-6 sm:mt-8 text-red-200 text-sm sm:text-base">
            Open 7 AM to 7 PM, Monday through Sunday
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-10 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Image
                  src="https://scorpionjunkremoval.com/wp-content/uploads/2024/12/logo-transparent-png.png"
                  alt="Scorpion Junk Removal Logo"
                  width={44}
                  height={44}
                  className="w-9 h-9 sm:w-11 sm:h-11 object-contain"
                />
                <span className="font-semibold text-base sm:text-lg">Scorpion Junk Removal</span>
              </div>
              <p className="text-zinc-400 text-sm sm:text-base max-w-sm">
                Bakersfield&apos;s trusted junk removal. Fast, professional, eco-friendly.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
              <div className="space-y-2 sm:space-y-3 text-zinc-400 text-xs sm:text-sm">
                <p>661.444.7965</p>
                <p className="break-all">Dominique@scorpionjunkremoval.com</p>
                <p>Bakersfield, CA 93308</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Hours</h4>
              <div className="space-y-2 sm:space-y-3 text-zinc-400 text-xs sm:text-sm">
                <p>Mon to Sun</p>
                <p>7 AM to 7 PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-zinc-500 text-xs sm:text-sm">
              © {new Date().getFullYear()} Scorpion Junk Removal
            </p>
            <p className="text-zinc-600 text-xs sm:text-sm">
              Serving Bakersfield & Kern County
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
