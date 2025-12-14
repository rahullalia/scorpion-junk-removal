export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 text-white py-3 px-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦂</span>
            <span className="font-bold text-lg">Scorpion Junk Removal</span>
          </div>
          <a
            href="tel:6614447965"
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <span>📞</span>
            <span className="hidden sm:inline">(661) 444-7965</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-red-600 text-sm font-semibold px-4 py-1 rounded-full mb-6">
            ⭐ 4.7 Stars • 27 Google Reviews
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Bakersfield&apos;s Trusted
            <span className="text-red-500"> Junk Removal</span> Experts
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Fast, affordable, and eco-friendly junk hauling.
            <br />
            <strong className="text-green-400">Open 24 Hours</strong> — We&apos;re here when you need us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6614447965"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              📞 Call For Free Quote
            </a>
            <a
              href="#services"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">⏰</span>
            <span className="font-semibold text-gray-800">Open 24/7</span>
            <span className="text-sm text-gray-600">Always Available</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">⚡</span>
            <span className="font-semibold text-gray-800">Same Day</span>
            <span className="text-sm text-gray-600">Service Available</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">💰</span>
            <span className="font-semibold text-gray-800">Free Quotes</span>
            <span className="text-sm text-gray-600">No Obligation</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">♻️</span>
            <span className="font-semibold text-gray-800">Eco-Friendly</span>
            <span className="text-sm text-gray-600">We Recycle</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What We <span className="text-red-600">Haul Away</span>
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From single items to full property cleanouts, we handle it all. No job is too big or too small.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🛋️", title: "Furniture Removal", desc: "Sofas, mattresses, desks, chairs, and more" },
              { icon: "🔧", title: "Appliance Hauling", desc: "Refrigerators, washers, dryers, AC units" },
              { icon: "🏠", title: "Estate Cleanouts", desc: "Full property cleanouts and hoarding cleanup" },
              { icon: "🌿", title: "Yard Waste", desc: "Branches, leaves, dirt, and landscaping debris" },
              { icon: "🏗️", title: "Construction Debris", desc: "Drywall, lumber, tiles, and renovation waste" },
              { icon: "📦", title: "General Junk", desc: "Miscellaneous items, clutter, and trash" },
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-red-500">Scorpion?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Upfront Pricing</h3>
                <p className="text-gray-400">No hidden fees or surprise charges. We quote before we haul.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Local & Reliable</h3>
                <p className="text-gray-400">Proudly serving Bakersfield, Oildale, and surrounding areas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Fast Response</h3>
                <p className="text-gray-400">Same-day service available. We work on your schedule.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Clean & Professional</h3>
                <p className="text-gray-400">We leave your space spotless after every job.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Serving <span className="text-red-600">Bakersfield</span> & Beyond
          </h2>
          <p className="text-gray-600 mb-8">
            We proudly serve Oildale, Bakersfield, and the greater Kern County area.
          </p>
          <div className="bg-gray-100 p-6 rounded-xl">
            <p className="font-semibold text-lg mb-2">📍 800 Grant Dr, Bakersfield, CA 93308</p>
            <a
              href="https://maps.google.com/?q=800+Grant+Dr,+Bakersfield,+CA+93308"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Clear the Clutter?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get your free, no-obligation quote today. We&apos;re available 24/7!
          </p>
          <a
            href="tel:6614447965"
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-xl transition-colors inline-flex items-center gap-3"
          >
            📞 (661) 444-7965
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🦂</span>
                <span className="font-bold text-lg">Scorpion Junk Removal</span>
              </div>
              <p className="text-gray-400">
                Professional junk removal service in Bakersfield, CA. Fast, affordable, and eco-friendly.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">📞 (661) 444-7965</p>
              <p className="text-gray-400 mb-2">📍 800 Grant Dr, Bakersfield, CA 93308</p>
              <p className="text-gray-400">⏰ Open 24 Hours</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Service Areas</h4>
              <p className="text-gray-400">Bakersfield • Oildale • Shafter • Delano • Wasco • Arvin • Lamont</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Scorpion Junk Removal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
