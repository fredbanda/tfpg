import Head from "next/head";

export const NocodeServices = () => {
  return (
    <>
    <Head>
      <title>Nocode Services | The First Pitch Group</title>
      <meta name="description" content="Launch powerful websites fast with no-code solutions! We build on WordPress, Joomla & Drupal, integrating custom features & AI chatbots for automation." />
      <meta name="keywords" content="no-code development, WordPress websites, Joomla, Drupal, website builders, low-code, business automation, AI chatbots, drag-and-drop website, custom web solutions, fast website development, e-commerce solutions, CMS development" />
    </Head>
    <section className="py-10 w-full bg-slate-100" id="services" >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
         Our Nocode Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/assets/wordpress.jpg"
              alt="wheat flour grinding"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Wordpress Development and Management
              </h3>
              <p className="text-gray-700 text-base">
              Sole traders and freelancers need professional, easy-to-manage websites without technical complexities. WordPress provides intuitive content management, allowing them to update services, portfolios, and blogs effortlessly. With drag-and-drop builders, SEO tools, and AI chatbots, sole traders can enhance customer interactions and drive sales with minimal effort. These platforms offer cost-effective hosting, security, and mobile optimization, ensuring their business stays competitive. Whether a personal brand, consulting service, or small online shop, these CMS solutions allow sole traders to create a strong online presence without hiring a full development team.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/assets/drupal.png"
              alt="Coffee"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Drupal Development and Management
              </h3>
              <p className="text-gray-700 text-base">
              Large businesses demand scalability, security, and flexibility—exactly what WordPres Drupal provides. These platforms power enterprise-level websites with robust performance, multi-user management, and powerful customization through APIs and plugins. Businesses can integrate AI assistants, CRM systems, and advanced analytics to optimize customer interactions. Drupal excels in high-security applications, structured content management, and  user-friendly adaptability. From corporate websites to large e-commerce stores and government portals, big brands trust these CMS platforms for their reliability, SEO capabilities, and ability to handle high traffic without compromising speed or security.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/assets/joomla.jpg"
              alt="Coffee"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Joomla Development and Management
              </h3>
              <p className="text-gray-700 text-base">
              Startups need fast, cost-effective, and scalable solutions to establish their online presence. Joomla offers flexible, no-code and low-code platform that allows startups to build stunning websites without breaking the bank. With thousands of themes, plugins, and built-in SEO tools, startups can easily customize their sites, integrate e-commerce, and scale as they grow. These platforms also support AI chatbots, automation, and third-party integrations, helping startups compete with larger companies. Whether launching an MVP, blog, or e-commerce store, startups choose these CMS platforms for their affordability, security, and ease of use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
