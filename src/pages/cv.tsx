import Link from "next/link";

type ExperienceProp = {
  title: string;
  company: string;
  url: string;
  description: string;
  from: string;
  to: string;
};

const ExperienceCard = ({
  title,
  company,
  url,
  description,
  from,
  to,
}: ExperienceProp): JSX.Element => {
  return (
    <div>
      <div className="text-bold text-lg">
        {title} @ <Link href={url}>{company}</Link>
      </div>
      <div className="text-sm text-gray-400 font-mono">
        {from} - {to}
      </div>
      <div className="text-gray-400">{description}</div>
    </div>
  );
};

const CVPage = (): JSX.Element => {
  return (
    <div className="container mx-auto border border-red-100">
      <div className="">
        <div>
          <div className="">
            <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-gray-50 to-emerald-300 mb-4">
              Ester Beltrami.
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2>Experience</h2>
              <div className="flex flex-col">
                <div className="basis-1/4">
                  <ExperienceCard
                    title="Software Engineer"
                    company="Made.com"
                    url="https://made.com"
                    description={`
             Made.com is a retailer that designs and sells furniture online; I take care of those microservices that manage warehouses, carriers and shipping to the end customer.
             All of our backend microservices are written in python; they use different frameworks, including Starlette, Flask, Aiohttp, FastAPI, and Django Rest Framework. Last year We introduced GraphQL, and now many services are switching to GraphQL. I became a reference point in Made.com for GraphQL as I'm one of the core-dev of Strawberry-graphql (the library used to build the GraphQL scheme). I was able to give guidance on how to implement our graphql API better.
             We also manage some internal administration UI interfaces for managing consignments and carriers. My experience with React and Next.js has allowed me to lead the team developing these applications.
             Almost all our services use Terraform for infrastructure (in the past, we used Ansible and just finished the migration) together with Nomad, Vault and Consul.
             At Made.com, every other Friday is "Friday Time": we can work on what we like as long as it benefits the company. I chose to take over our Blog, migrate to React and Next.js and, together with the Design Team, give it a new look. `}
                    from="February 2021"
                    to="Present"
                  />
                </div>
                <div className="basis-1/4">
                  <ExperienceCard
                    title="Full Stack Web Developer"
                    url="https://digitalis.com/"
                    company="Digitalis"
                    description={`At Digitalis I used to work on a web application that allows the extraction of information from the web, get notified if anything chances on social media such as Twitter/Facebook and more, allowing our internal teams to work more effectively.

                My primary role was to work on the microservices-based backend built using Django and DRF by either building new services or improving existing ones. I also took some of the DevOps responsibility of the project by implementing a CI infrastructure using Jenkins to test and deploy our services to AWS on ElasticBeanstalk. Occasionaly, I also helped with the React frontend building new features or bug fixing.`}
                    from="December 2019"
                    to="February 2021"
                  />
                </div>
                <div className="basis-1/2"></div>
              </div>
            </div>

            <div>
              <h2>Skills</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CVPage;
