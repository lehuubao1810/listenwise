import AudioUploader from "@/components/AudioUploader";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#" rel="ugc">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-6 w-6"
          >
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" x2="12" y1="19" y2="22"></line>
          </svg>
          <span className="sr-only">Speak Easy</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
            rel="ugc"
          >
            Features
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
            rel="ugc"
          >
            Pricing
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
            rel="ugc"
          >
            About
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
            rel="ugc"
          >
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Improve Your English Listening Skills
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Speak Easy is an AI-powered dictation tool that helps you
                  practice your English listening skills. Transcribe audio
                  lessons and get instant feedback on your comprehension.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                    Try it Now
                  </button>
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                    rel="ugc"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <Image
                src="https://generated.vusercontent.net/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
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
                  listening skills.Explore the features and{" "}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Image
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="550"
                  height="400"
                  alt="Dictate AI Overview"
                  className="mx-auto aspect-[4/3] overflow-hidden rounded-t-xl object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Real-Time Transcription</h3>
                  <p className="text-sm text-muted-foreground">
                    Our advanced speech recognition technology accurately
                    transcribes audio in real-time, providing you with instant
                    feedback on your listening skills.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Personalized Exercises</h3>
                  <p className="text-sm text-muted-foreground">
                    Engage in interactive exercises that challenge your
                    listening comprehension and help you identify areas for
                    improvement.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Adaptive Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Our AI-powered platform adapts to your skill level,
                    providing you with increasingly challenging exercises to
                    help you progress at your own pace.
                  </p>
                </div>
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
                {/* <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div> */}
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Practice Your English
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered dictation tool offers a range of features to
                  help you improve your English listening comprehension.{" "}
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Audio Recognition</h3>
                <p className="text-sm text-muted-foreground">
                  Our advanced speech recognition technology accurately
                  transcribes audio in real-time, providing you with instant
                  feedback on your listening skills.{" "}
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Practice Mode</h3>
                <p className="text-sm text-muted-foreground">
                  Engage in interactive exercises that challenge your listening
                  comprehension and help you identify areas for improvement.{" "}
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Social Sharing</h3>
                <p className="text-sm text-muted-foreground">
                  Share your progress and achievements with friends and
                  classmates, and connect with a community of English learners.{" "}
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
        <div aria-roledescription="carousel" className="relative w-full max-w-4xl mx-auto" role="region">
          <div className="overflow-hidden">
            <div className="flex -ml-4" style={{
              transform: 'translate3d(0px, 0px, 0px)',
            }}>
              <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4" role="group">
                <Image
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="550"
                  height="400"
                  alt="Dictate AI Overview"
                  className="mx-auto aspect-[4/3] overflow-hidden rounded-t-xl object-cover"
                />
              </div>
              <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4" role="group">
                <Image
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="550"
                  height="400"
                  alt="Dictate AI Overview"
                  className="mx-auto aspect-[4/3] overflow-hidden rounded-t-xl object-cover"
                />
              </div>
              <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4" role="group">
                <Image
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="550"
                  height="400"
                  alt="Dictate AI Overview"
                  className="mx-auto aspect-[4/3] overflow-hidden rounded-t-xl object-cover"
                />
              </div>
            </div>
          </div>
          <button
            className="inline-flex shrink-0 items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background font-medium shadow-sm hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full -left-12 top-1/2 -translate-y-1/2"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-left h-4 w-4"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            <span className="sr-only">Previous slide</span>
          </button>
          <button className="inline-flex shrink-0 items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background font-medium shadow-sm hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full -right-12 top-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-right h-4 w-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            <span className="sr-only">Next slide</span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Overview</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover Dictate AI</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore the features and capabilities of our AI-powered dictation tool, designed to help you improve
              your English listening skills.
            </p>
          </div>
        </div>
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
              <div
                className="rounded-lg border text-card-foreground p-6 bg-background shadow-sm"
                data-v0-t="card"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full w-12 h-12 bg-[#55efc4] text-3xl flex items-center justify-center">
                    😊
                  </div>
                  <div className="grid gap-1 items-start text-sm">
                    <div className="font-bold">Sarah</div>
                    <p>
                      {'"'}Dictate AI has been a game-changer for my English
                      listening practice. The real-time feedback and
                      personalized exercises have helped me make significant
                      progress.{'"'}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="rounded-lg border text-card-foreground p-6 bg-background shadow-sm"
                data-v0-t="card"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full w-12 h-12 bg-[#ffeaa7] text-3xl flex items-center justify-center">
                    🤓
                  </div>
                  <div className="grid gap-1 items-start text-sm">
                    <div className="font-bold">Michael</div>
                    <p>
                      {'"'}I{"'"}ve tried many different tools for improving my
                      English listening, but Dictate AI is by far the most
                      effective. The social sharing feature has also helped me
                      stay motivated.{'"'}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="rounded-lg border text-card-foreground p-6 bg-background shadow-sm"
                data-v0-t="card"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full w-12 h-12 bg-[#fdcb6e] text-3xl flex items-center justify-center">
                    😄
                  </div>
                  <div className="grid gap-1 items-start text-sm">
                    <div className="font-bold">Olivia</div>
                    <p>
                      {'"'}Dictate AI has been an invaluable tool for my English
                      studies. The adaptive learning feature has really helped
                      me progress at my own pace, and the personalized feedback
                      is incredibly helpful.{'"'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Start Practicing Today
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Speak Easy is the perfect tool for anyone looking to improve
                  their English listening skills. Sign up now and start
                  practicing with our AI-powered dictation tool.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Try it Now
                </button>
                <a
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                  rel="ugc"
                >
                  Learn More
                </a>
              </div>
              <div className="flex gap-2">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Share on Twitter</span>
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Share on Facebook</span>
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">Share on LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 Speak Easy. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-xs hover:underline underline-offset-4"
            href="#"
            rel="ugc"
          >
            Terms of Service
          </a>
          <a
            className="text-xs hover:underline underline-offset-4"
            href="#"
            rel="ugc"
          >
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
