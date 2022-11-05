import { Header } from "components/resume/header";
import Link from "next/link";
import React from "react";

const Experience = ({
  jobTitle,
  companyName,
  companyUrl,
  from,
  to = "Present",
  children,
}: {
  jobTitle: string;
  companyName: string;
  companyUrl: string;
  from: string;
  to?: string;
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="mb-4">
      <h1 className="font-semibold tracking-wide text-gray-600 uppercase">
        <Link href={companyUrl}>{companyName}</Link> - {jobTitle}
      </h1>
      <p className="mb-2 text-sm tracking-widest text-gray-500 uppercase">
        {from} - {to}
      </p>
      <div className="mb-1 text-gray-500 list-disc">{children}</div>
    </div>
  );
};

const Education = ({
  title,
  schoolName,
  location,
  from,
  to,
}: {
  title: string;
  schoolName: string;
  location: string;
  from?: string;
  to?: string;
}) => {
  return (
    <div className="mb-2">
      <h1 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
        {title}{" "}
      </h1>
      <h1 className="text-sm text-gray-500">
        <span className="italic">{schoolName}</span>,{" "}
        <span className="italic font-semibold text-gray-400">{location}</span>
      </h1>
      <span className="text-sm text-gray-500 ">
        {from ? `${from} - ${to}` : `${to}`}
      </span>
    </div>
  );
};

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="my-3 text-lg font-bold tracking-widest text-gray-400 uppercase">
      {title}
    </h1>
  );
};

const StrawberryLink = (): JSX.Element => {
  return (
    <Link href="https://strawberry.rocks/" target="_blank">
      <span className="font-mono font-bold">strawberry-graphql</span>
    </Link>
  );
};

const PyConItaliaLink = (): JSX.Element => {
  return (
    <Link href="https://pycon.it/" target="_blank">
      PyCon Italia
    </Link>
  );
};

const PoetryLink = (): JSX.Element => {
  return (
    <Link href="https://python-poetry.org/" className="font-bold">
      Poetry Package Manager
    </Link>
  );
};

export const Resume = (): JSX.Element => {
  return (
    <div className="flex justify-center px-16 py-6 text-slate-900">
      <div className="flex flex-col justify-end gap-6">
        <div className="self-end flex-initial print:hidden">
          <Link
            href="/cv.pdf"
            className="px-8 py-4 font-mono border-2 rounded-sm border-emerald-300 text-emerald-300"
          >
            Download
          </Link>
        </div>

        <div className="max-w-5xl py-4 bg-gray-200">
          <div className="grid gap-4 mx-6 md:grid-cols-3 sm:grid-cols-1">
            <div className="col-span-3 py-4 mx-6 border-b-2 border-gray-300">
              <Header />
            </div>
            <div className="col-span-3 px-6">
              <h1 className="text-gray-500">
                I am a passionate full-stack developer with a degree in Computer
                Science and over 6+ years of experience building websites and
                products using <span className="font-bold">Python</span>,{" "}
                <span className="font-bold">GraphQL</span>,{" "}
                <span className="font-bold">React</span>,{" "}
                <span className="font-bold">Next.js</span> and{" "}
                <span className="font-bold">Typescript</span> as my favorite
                tech stack. In my free time, I also love to attend and help
                organize Python conferences such as PyCon Italia and contribute
                to open-source projects such as <StrawberryLink /> and{" "}
                <PoetryLink />.
                <br />
              </h1>
              <SectionTitle title="Experience" />
              <Experience
                jobTitle="Software Engineer"
                companyName="Made.com"
                companyUrl="https://made.com"
                from="February 2021"
              >
                <div className="ml-4">
                  <li>
                    Software development and design of the micro-services
                    sitting behind the scenes of MADE.COM responsible for
                    managing warehouses, carriers and shipping to the end
                    customer.
                  </li>
                  <li>
                    Working with different python frameworks like{" "}
                    <span className="font-bold">Starlette</span>,{" "}
                    <span className="font-bold">Flask</span>,{" "}
                    <span className="font-bold">Aiohttp</span>,{" "}
                    <span className="font-bold">FastAPI</span>, and{" "}
                    <span className="font-bold">Django Rest Framework</span>.
                  </li>
                  <li>
                    A reference point for GraphQL migration because of my
                    open-source work with the <StrawberryLink /> library. I was
                    able to give guidance on how to implement our graphql API
                    better.
                  </li>
                  <li>
                    Leading the UI development of internal administration UI
                    interfaces for managing consignments and carriers. My
                    experience with <span className="font-bold">React</span>,{" "}
                    <span className="font-bold">Typescript</span> and{" "}
                    <span className="font-bold">Next.js</span> has allowed me to
                    help the team develop these applications.
                  </li>
                  <li>
                    Refactor the public{" "}
                    <Link href="https://io.made.com/">io.Made.com</Link> blog.
                    Migrate to React and Next.js and, together with the Design
                    Team, gave it a new look.
                  </li>
                </div>
              </Experience>
              <Experience
                jobTitle="Full stack developer and Conference organizer"
                companyName="Python Italia"
                companyUrl="https://pycon.it"
                from="May 2019"
              >
                Developing and maintaining of the conference website and
                micro-services build with Python, Django, GraphQL, React,
                Next.js, Storybook, Tailwind CSS.
              </Experience>

              <Experience
                jobTitle="Core developer"
                companyName="strawberry-graphql"
                companyUrl="https://strawberry.rocks/"
                from="January 2022"
              >
                A library to create GraphQL APIs with Python, dataclasses and
                type hints.
                <li className="ml-4">
                  Feature development, bug fixing, user support and docs
                  writing.
                </li>
              </Experience>
              <Experience
                jobTitle="Full Stack Web Developer"
                companyName="Digitalis"
                companyUrl="https://digitalis.com"
                from="December 2019"
                to="February 2021"
              >
                <div className="ml-4">
                  <li>
                    Developing of a web application that allows the extraction
                    of information from the web, get notified if anything
                    chances on social media such as Twitter/Facebook and more,
                    allowing our internal teams to work more effectively.
                  </li>
                  <li>
                    Work on backend micro-services built using{" "}
                    <span className="font-bold">Django</span> and{" "}
                    <span className="font-bold">DRF</span> by either building
                    new services or improving existing ones.
                  </li>
                  <li>
                    Implemented a CI infrastructure using{" "}
                    <span className="font-bold">Jenkins</span> to test and
                    deploy our services to{" "}
                    <span className="font-bold">AWS</span> on ElasticBeanstalk.
                  </li>
                  <li>
                    Occasionally, helped with the React frontend building new
                    features or bug fixing.
                  </li>
                </div>
              </Experience>
              <Experience
                jobTitle="Web Developer"
                companyName="OT Consulting"
                companyUrl="https://www.otconsulting.com"
                from="May 2016"
                to="November 2019"
              >
                At OT Consulting I used to be a consultant for Max Mara, an
                international fashion company.
                <div className="ml-4">
                  <li>
                    helping them develop and maintain their ERP web applications
                    for inventory management.
                  </li>
                  <li>
                    developed support the new Italian&apos;s electronic invoice
                    and more.
                  </li>
                </div>
              </Experience>

              <SectionTitle title="Activity" />
              <div className="mb-4">
                <h1 className="font-semibold tracking-wide text-gray-600 uppercase">
                  Talk &quot;Automate cleaning code in a few easy steps&quot;
                </h1>
                <p className="mb-2 text-sm tracking-widest text-gray-500 uppercase">
                  <Link href="https://es.ter/europython" target="_blank">
                    https://es.ter/europython
                  </Link>
                </p>
                <div className="mb-1 text-gray-500 list-disc">
                  In these organizations, I discovered several excellent tools
                  and automation that improve your development experience. I
                  talked about them in my talk at PyCon Italia, Europython and
                  Django London meetup.
                </div>
              </div>
              <SectionTitle title="Education" />
              <Education
                title="Computer Science Degree"
                schoolName="University of Modena and Reggio Emilia"
                from="2009"
                to="2016"
                location="Italy"
              />
              <Education
                title="Diploma of Accountant, Commercial Expert and Programmer"
                schoolName={`I.T.C.G. Institute "Luigi Einaudi"`}
                to="2009"
                location="Correggio RE, Italy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
