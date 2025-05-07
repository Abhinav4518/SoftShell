const steps = [
    { title: 'Upload License', description: 'Submit your license details securely.' },
    { title: 'Get Valuation', description: 'Receive a fair market price instantly.' },
    { title: 'Get Paid', description: 'We pay you as soon as the deal is done.' },
  ];
  
  const HowItWorks = () => (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4">
        {steps.map((step, i) => (
          <div key={i} className="max-w-xs p-6 bg-white dark:bg-gray-700 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default HowItWorks;