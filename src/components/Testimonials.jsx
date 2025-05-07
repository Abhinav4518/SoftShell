const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Architect at Infosys',
      review: 'SoftSell helped us unlock value from our unused licenses within hours!',
    },
    {
      name: 'Ravi Kumar',
      role: 'IT Lead at TCS',
      review: 'Extremely simple process and timely payouts. Highly recommended.',
    },
  ];
  
  const Testimonials = () => (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
        {testimonials.map((t, i) => (
          <div key={i} className="max-w-sm p-6 bg-white dark:bg-gray-700 rounded shadow">
            <p className="italic mb-4">"{t.review}"</p>
            <p className="font-bold">{t.name}</p>
            <p className="text-sm">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Testimonials;
  