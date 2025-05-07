const reasons = [
    { title: 'Fast Payments', desc: 'Get paid within hours, not days.' },
    { title: 'Secure Process', desc: 'All transactions are encrypted and safe.' },
    { title: 'Best Valuations', desc: 'We offer industry-leading prices.' },
    { title: 'Expert Support', desc: 'We’re here to help 24/7.' },
  ];
  
  const WhyChooseUs = () => (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Why Choose SoftSell?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {reasons.map((reason, i) => (
          <div key={i} className="p-6 bg-blue-50 dark:bg-gray-700 rounded shadow">
            <h3 className="text-lg font-semibold">{reason.title}</h3>
            <p className="text-sm">{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default WhyChooseUs;
  