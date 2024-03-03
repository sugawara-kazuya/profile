/**
 * v0 by Vercel.
 * @see https://v0.dev/t/a332imgtvS2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            about
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="sake"
          >
            sake
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="hobby"
          >
            hobby
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48 border-y">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Kazuya Sugawara
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    I am a professional who teaches in the field of machine
                    learning and is deeply involved in the NFT business.
                  </p>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {" "}
                    On a daily basis, I work at the forefront of AI and
                    blockchain and am passionate about exploring and sharing the
                    possibilities of the future through this innovative
                    technology.
                  </p>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    My interests extend beyond the world of technology to
                    traditional Japanese culture. In particular, I am fascinated
                    by the rich flavor of sake and its production process, and
                    enjoy spending my free time trying different brands and
                    appreciating their depth. Never afraid to try new things, I
                    take pleasure in absorbing new knowledge and starting new
                    projects.
                  </p>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    This positive attitude, coupled with my inquisitiveness in
                    my field of expertise, allows me to ride the wave of
                    ever-evolving technology.{" "}
                  </p>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    I look forward to connecting, collaborating, and growing
                    with others who share my passion as we continue our journey
                    of learning and sharing. Translated with DeepL.com (free
                    version)
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Skills</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    - JavaScript
                    <br />- React.js
                    <br />- Node.js
                    <br />- DynamoDB
                    <br />- HTML/CSS
                    <br />- Tailwind CSS
                    <br />- AWS
                    <br />- Docker
                    <br />- Python
                    <br />- Django
                    <br />- tensorflow
                    <br />- lambda
                    <br />- API Gateway
                    <br />- CloudFront
                    <br />- S3
                    <br />- Route53
                    <br />- CloudFormation
                    <br />- CloudWatch
                    <br />- solidity
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hobby
                  </h1>
                </div>
                <div className="divide-y">
                  <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                    <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                      <img
                        alt="Logo"
                        className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                        height="70"
                        src="https://profile-detail.s3.ap-northeast-1.amazonaws.com/profile/yoasobi.jpeg"
                        width="140"
                      />
                    </div>
                    <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                      <img
                        alt="Logo"
                        className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                        height="70"
                        src="https://profile-detail.s3.ap-northeast-1.amazonaws.com/profile/spl.jpeg"
                        width="140"
                      />
                    </div>
                    <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                      <img
                        alt="Logo"
                        className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                        height="70"
                        src="https://profile-detail.s3.ap-northeast-1.amazonaws.com/profile/snobo.jpeg"
                        width="140"
                      />
                    </div>
                  </div>
                  <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                    <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                      <img
                        alt="Logo"
                        className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                        height="70"
                        src="https://profile-detail.s3.ap-northeast-1.amazonaws.com/profile/nft.jpeg"
                        width="140"
                      />
                    </div>
                    <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                      <img
                        alt="Logo"
                        className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                        height="70"
                        src="https://profile-detail.s3.ap-northeast-1.amazonaws.com/profile/hihonsake-sample.jpeg"
                        width="140"
                      />
                    </div>
                    <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                      <img
                        alt="Logo"
                        className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                        height="70"
                        src="https://profile-detail.s3.ap-northeast-1.amazonaws.com/profile/nft.jpeg"
                        width="140"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Education & Certifications
                  </h1>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Graduated from Hachinohe National College of Technology
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Nagaoka University of Technology Graduate School
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">
                    Certified Full-Stack Developer
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Assistant Certified Surveyor
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Ordinary Motorcycle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Contact Me
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have a question or want to collaborate? Send me a message.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    required
                    type="email"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    className="min-h-[100px]"
                    id="message"
                    placeholder="Enter your message"
                    required
                  />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function MountainIcon({ width = "24", height = "24", ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest} // 他のすべての受け入れられるプロパティをここに展開
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
