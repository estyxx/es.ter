import Link from "components/link";
import NextLink from "next/link"
import { TbBrandGithub, TbBrandLinkedin,TbBrandTwitter } from "react-icons/tb";

const Home = (): JSX.Element => {
  return (
    <div className="container">
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="max-w-3xl sm:mx-4">
            <div>
              <div className="mb-8">
                <h2 className="mb-4 font-mono text-emerald-300">
                  👋🏻 Hi, my name is
                </h2>
                <h1 className="mb-4 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-50 to-emerald-300">
                  Ester Beltrami.
                </h1>
                <h3 className="font-mono text-slate-400">
                  This is the very beginning of my personal portfolio 🎉
                </h3>
              </div>

              <div className="mb-8">
                <p className="mb-4 leading-relaxed text-slate-400">
                  I&apos;m a software engineer at{" "}
                  <Link href="https://www.made.com/" className="font-bold">
                    Made.com
                  </Link>{" "}
                  here in London,{" "}
                  <Link href="https://pycon.it" className="font-bold">
                    PyCon Italia
                  </Link>{" "}
                  developer and organizer,{" "}<br/>
                  <Link href="https://strawberry.rocks/" className="font-bold">
                    🍓strawberry-graphql
                  </Link>{" "}
                  core-dev, and{" "}
                  <Link href="https://python-poetry.org/" className="font-bold">
                    Poetry Package Manager
                  </Link>{" "}
                  contributor.
                </p>
                <p className="text-slate-400">
                  My favorite tech stack is <b>Python</b>, <b>GraphQL</b>,{" "}
                  <b>React</b>, <b>Next.js</b> and <b>Typescript</b>. I also
                  have experience working with <b>Agile</b>, <b>Scrum</b>,{" "}
                  <b>CI/CD</b>,<b>AWS</b>, <b>NoSQL</b>, <b>TDD</b> and more.
                </p>
              </div>

              <div>
                <NextLink
                  className="px-8 py-4 font-mono border-2 rounded-sm border-emerald-300 text-emerald-300"
                  href="/resume"
                >
                  Click here for my CV!
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute bottom-4 left-4">
          <div className="p-4">
            <Link href="https://github.com/estyxx">
              <TbBrandGithub className="hover:text-emerald-300" size="2em" />
            </Link>
          </div>
          <div className="p-4">
            <Link href="https://www.linkedin.com/in/beltramiester/">
              <TbBrandLinkedin className="hover:text-emerald-300" size="2em" />
            </Link>
          </div>
          <div className="p-4">
            <Link href="https://twitter.com/esterbeltrami">
              <TbBrandTwitter className="hover:text-emerald-300" size="2em" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
