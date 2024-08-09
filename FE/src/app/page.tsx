import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

export default function Home() {
  function CheckIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    );
  }


  function FacebookIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  }
  
  
  function LinkedinIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }
  function TwitterIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )
  }

  function XIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    );
  }
  return (
    <>
    <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Improve Your English Listening Skills with Dictate AI
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our SAAS-based AI-powered dictation tool helps you practice
                  your English listening skills through interactive exercises
                  and real-time feedback.
                </p>
                <div className="space-x-4 mt-6">
                  <Link
                    href={"/signin"}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Try it now
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Image
                  src="/placeholder.svg"
                  width="550"
                  height="400"
                  alt="Hero"
                  className="mx-auto aspect-[4/3] overflow-hidden rounded-t-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
          id="features"
        >
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Practice Your English Listening Skills
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered dictation tool offers a range of features to
                  help you improve your English listening comprehension.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Audio Recognition</h3>
                <p className="text-sm text-muted-foreground">
                  Our advanced speech recognition technology accurately
                  transcribes audio in real-time, providing you with instant
                  feedback on your listening skills.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Practice Mode</h3>
                <p className="text-sm text-muted-foreground">
                  Engage in interactive exercises that challenge your listening
                  comprehension and help you identify areas for improvement.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Social Sharing</h3>
                <p className="text-sm text-muted-foreground">
                  Share your progress and achievements with friends and
                  classmates, and connect with a community of English learners.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Personalized Feedback</h3>
                <p className="text-sm text-muted-foreground">
                  Receive detailed feedback on your performance, including areas
                  for improvement and personalized recommendations to help you
                  reach your goals.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Adaptive Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Our AI-powered platform adapts to your skill level, providing
                  you with increasingly challenging exercises to help you
                  progress at your own pace.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Multilingual Support</h3>
                <p className="text-sm text-muted-foreground">
                  Practice your English listening skills with audio content in
                  multiple languages, allowing you to develop a more
                  well-rounded understanding of the language.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Overview
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Discover Dictate AI
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the features and capabilities of our AI-powered
                  dictation tool, designed to help you improve your English
                  listening skills.
                </p>
              </div>
            </div>
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src="/placeholder.svg"
                    width="550"
                    height="400"
                    alt="Dictate AI Overview"
                    className="mx-auto aspect-[4/3] overflow-hidden rounded-t-xl object-cover"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/placeholder.svg"
                    width="550"
                    height="400"
                    alt="Dictate AI Overview"
                    className="mx-auto aspect-[4/3] overflow-hidden rounded-t-xl object-cover"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/placeholder.svg"
                    width="550"
                    height="400"
                    alt="Dictate AI Overview"
                    className="mx-auto aspect-[4/3] overflow-hidden rounded-t-xl object-cover"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious/>
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
          id="testimonials"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                What Our Users Say
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our satisfied customers about how Dictate AI has
                helped them improve their English listening skills.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 bg-background shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-full w-12 h-12 bg-[#55efc4] text-3xl flex items-center justify-center">
                    😊
                  </div>
                  <div className="grid gap-1 items-start text-sm">
                    <div className="font-bold">Sarah</div>
                    <p>
                      {'"'}Dictate AI has been a game-changer for my English\n
                      listening practice. The real-time feedback and\n
                      personalized exercises have helped me make significant\n
                      progress.{'"'}
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-background shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-full w-12 h-12 bg-[#ffeaa7] text-3xl flex items-center justify-center">
                    🤓
                  </div>
                  <div className="grid gap-1 items-start text-sm">
                    <div className="font-bold">Michael</div>
                    <p>
                      {'"'}I{"'"}ve tried many different tools for improving my
                      English\n listening, but Dictate AI is by far the most
                      effective.\n The social sharing feature has also helped me
                      stay\n motivated.{'"'}
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-background shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-full w-12 h-12 bg-[#fdcb6e] text-3xl flex items-center justify-center">
                    😄
                  </div>
                  <div className="grid gap-1 items-start text-sm">
                    <div className="font-bold">Olivia</div>
                    <p>
                      {'"'}Dictate AI has been an invaluable tool for my
                      English\n studies. The adaptive learning feature has
                      really helped\n me progress at my own pace, and the
                      personalized\n feedback is incredibly helpful.{'"'}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Start Practicing Today</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Speak Easy is the perfect tool for anyone looking to improve their English listening skills. Sign up
                  now and start practicing with our AI-powered dictation tool.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button>Try it Now</Button>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <TwitterIcon className="h-5 w-5" />
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <FacebookIcon className="h-5 w-5" />
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <LinkedinIcon className="h-5 w-5" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
      
  );
}
