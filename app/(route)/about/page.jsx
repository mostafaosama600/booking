import React from "react";

export default function About() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Welcome to LogoIpsum, your trusted partner in seamless healthcare
            access.
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p>
                Our platform revolutionizes the way you connect with medical
                professionals, offering a user-friendly experience to book
                appointments with doctors across various specialties. At
                LogoIpsum, we understand the importance of timely and convenient
                healthcare.
              </p>

              <p>
                Our mission is to bridge the gap between patients and healthcare
                providers, ensuring that you receive the care you need when you
                need it. With a commitment to excellence, we continuously strive
                to enhance our services and provide a platform that prioritizes
                your health and well-being. Join us in our journey to make
                healthcare accessible, efficient, and stress-free. Discover the
                LogoIpsum difference today and take the first step towards
                better health.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
