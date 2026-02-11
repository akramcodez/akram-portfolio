export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "history-of-programming",
    title: "History of Programming...",
    excerpt: "Programming didn't start with JavaScript or AI. It started with a question so simple it almost sounds stupid: What if we could teach machines to think?",
    image: "/blogs/programminghistory.png",
    content: `Programming didn't start with JavaScript, Python, or AI. It started with a question so simple it almost sounds stupid: **What if we could teach machines to think?** This is the story of how we tried, failed, adapted, argued endlessly and somehow built the digital world we now live in.

## Before Computers, There Was Nothing

Before laptops, servers, and smartphones, there was silence. No code. No software. No bugs. Then humans invented **numbers**. First came **one**. Later came **zero** a number so empty that people dismissed it as useless. History would prove that to be one of our worst assumptions.

Thousands of years later, electricity entered the picture. Electricity has only two states: **on** and **off**. Someone noticed the similarity. On looked like **1**. Off looked like **0**. That was the moment we accidentally created the foundation of computing.

IMAGE: /blogs/onoff.png

## Teaching Machines Using Lightning

Early computers didn’t understand words, symbols, or intentions. They understood **voltage**. Each tiny decision - on or off - became a **bit**. And when engineers grouped eight of those bits together, they unlocked numbers, characters, and meaning itself.

They called this group a **byte** - misspelled on purpose, because the future always sounds better when it’s slightly wrong. Now machines could count. And once machines could count, they could calculate. And once they could calculate, humans realized they could automate thinking.

## When Code Was Painful

Early programmers worked directly with ones and zeros. This wasn’t creativity it was punishment. So assembly language was invented. Instead of raw binary, programmers could use symbolic commands. It was still difficult, but at least it felt human.

Then came a revolutionary idea: **What if programmers wrote code for humans and let machines translate it themselves?** The compiler was born.

IMAGE: /blogs/firstcompiler.png

A compiler takes readable code and turns it into machine instructions. You never have to see the ones and zeros again and computers couldn’t be happier.

## High-Level Languages Changed Everything

With compilers came **high-level programming languages**. Languages designed for scientists. Languages designed for businesses. Languages designed for governments. Some of this code still runs global financial systems today. Nobody fully understands it. Nobody dares rewrite it.

But it works. And that’s enough.

## When Programming Got Philosophical

Then things got strange in a good way. Some languages treated **code as data**. Programs could inspect themselves. Memory could clean itself up automatically. Execution could happen live.

Programming stopped being just about controlling machines and started becoming about **expressing ideas**. In the late 1960s and early 1970s, one idea gained universal agreement: **Readable code matters.**

## Power, Speed, and Dangerous Freedom

Then came **C**.

IMAGE: /blogs/ccreator.png

C was fast. C was powerful. C trusted the programmer completely, sometimes too much. It allowed direct access to memory, which meant you could build operating systems… or crash everything instantly.

Using C, developers built Unix a philosophy disguised as an operating system. Small programs. One purpose each. Connected through simple pipes. This idea shaped everything that followed.

## Complexity Took Over

Someone eventually asked: “What if C, but with more abstraction?” That question created **C++** objects, classes, inheritance, and endless debates.

Despite the arguments, C++ built much of the modern world: game engines, browsers, databases, and infrastructure that still powers the internet today.

## A Language Explosion

The following decades were chaos - in the best way. New programming languages appeared everywhere. Each one tried to fix something broken in the last. Each one introduced new trade-offs.

Then the web happened. JavaScript was meant to be temporary. A small scripting language for browsers. It now runs servers, phones, databases, and even spacecraft. Nobody planned this.

## The “Programming Is Dead” Panic

Recently, something new arrived.

IMAGE: /blogs/allais.png

Machines started **suggesting code**. Then **writing code**. Then generating entire applications.

People panicked. “Programming is dead,” they said. But they were wrong. Typing code was never the job. Syntax was never the job. The job was - and always has been - **thinking**.

Understanding problems. Breaking reality into steps. Modeling systems. Making trade-offs. Deciding what matters. The keyboard has changed before. It will change again.

Programming isn’t dying. It’s evolving, just like it always has...`,
  },
  {
    slug: "bitcoin-from-nothing-to-decentralized-money",
    title: "Bitcoin: From Nothing to Decentralized Money",
    excerpt: "In 2008, while the world was busy watching banks fail, a small piece of code quietly appeared on the internet. This is the story of Bitcoin's journey to becoming digital gold.",
    image: "/blogs/bitcoinhistory.png",
    content: `In 2008, while the world was busy watching banks fail and governments rush to clean up the mess, a small piece of code quietly appeared on the internet. No press release. No funding round. No famous founder. Just a document uploaded by someone using the name **Satoshi Nakamoto**.

The document wasn’t dramatic. It didn’t promise to make anyone rich. It simply described a way for people to send money to each other without trusting banks. At that time, it sounded unrealistic, maybe even pointless. Money without banks? Who would take that seriously?

A few months later, Bitcoin went live.

Almost no one noticed.

In the beginning, Bitcoin had no price and no audience. It lived quietly on a few computers owned by curious programmers. People mined coins on laptops, not because they expected profit, but because they wanted to see if the system actually worked. They sent coins to each other just for fun. There was nothing to buy, nothing to sell, and no reason to believe this experiment would last.

But something important was happening in the background.

Bitcoin was running.
And it didn’t stop.

Days passed. Blocks kept getting added. Transactions kept confirming. There was no central server to shut down, no company to pressure, no button to turn it off. While most internet projects faded away, Bitcoin simply kept existing.

Eventually, people started giving it value.

At first, it was laughable. A few cents. A few dollars. In 2010, someone exchanged thousands of Bitcoins for two pizzas. At the time, it felt like a funny internet moment, nothing more. Nobody imagined that decision would become legendary.

Bitcoin still looked fragile. Still looked temporary.

But it survived.

As years went by, Bitcoin began doing something strange. It would rise in value, crash brutally, and then come back. Every crash was supposed to be the end. Every comeback brought more attention.

People discovered Bitcoin in different ways:

• Some heard about it through tech forums

• Some saw shocking price charts

• Some lived in countries where money kept losing value

• Some just liked the idea of money without permission

Each group joined for a different reason, but they all stayed for the same one: Bitcoin kept working.

Over time, Bitcoin stopped being just “internet money.” It started to feel like an alternative system running alongside the old one. One detail especially caught people’s attention: there would only ever be **21 million Bitcoins**. No exceptions. No emergency printing. No silent changes.

In a world where money could be created endlessly, that rule felt powerful.

Slowly, a new narrative formed. Bitcoin wasn’t just something you spend. It was something you hold. Something scarce. Something outside the control of governments and institutions.

People started calling it digital gold.

Bitcoin didn’t grow because everyone agreed on it. In fact, it grew because people argued about it constantly. Critics called it a bubble. Supporters called it the future. Governments tried to ban it. Media declared it dead again and again.

None of that stopped it.

Bitcoin didn’t respond.
It didn’t defend itself.
It just kept running.

That quiet persistence became its strongest feature.

Eventually, the world that once ignored Bitcoin started taking it seriously. Big companies added it to their balance sheets. Investors who once laughed at it started allocating money to it. Financial institutions built products around it. Governments stopped pretending it didn’t exist and started figuring out how to regulate it.

Bitcoin itself didn’t change during this time.

Everything else did.

Today, Bitcoin means different things to different people.

For some, it’s an investment.
For others, it’s protection against inflation.
For many, it’s a symbol of financial freedom.

But beneath all those meanings, Bitcoin remains what it always was: a decentralized network with no owner, no leader, and no off switch.

That’s why its story matters.`,
  },
  {
    slug: "open-source-decoded",
    title: "Open Source Decoded: Your First Step Into Open Source",
    excerpt: "If you keep hearing about open source and feel curious about what it is, how it can help you, its benefits, how to start contributing, and how to find good projects - you're in the right place.",
    image: "/blogs/opensource.png",
    content: `If you keep hearing about **open source** and feel curious about what it is, how it can help you, its benefits, how to start contributing, and how to find good projects - so you’re in the right place.

I’ll share **my real open-source journey**, what I learned, and the **mistakes you can avoid**.

## Why listen to me?

I’ve been contributing to open source for the past **6 months**. In **December 2025**, I made **35 PRs**, and in **January 2026**, I’ve already made **10 PRs**. I’ve contributed to projects like **Internet Archive, Activepieces, DodoPayments**, and more. You can also check out **all my merged PRs here →** akramcodez.tech/#my-work

## What is open source?

Open source means software whose **code is open and available to everyone**. This means you are free to **look at how it is built**, **use it for your own work**, **change or improve it**, and even **share your improvements with others**.

Instead of being controlled by one company, open-source projects are **built by people from all over the world**, working together. This helps beginners learn real-world coding, improve skills, and contribute to software that many people actually use.

## Benefits of open source

• Open source helps you learn in a very practical way. Instead of only watching tutorials or building small demo projects, you work on real software that people actually use.

• It improves your coding skills because you read other people’s code, understand how real projects are structured, and fix real problems. Over time, you start writing cleaner and better code.

• When you contribute to open source, all your work is public. This means your GitHub profile shows real contributions, which helps you prove your skills to recruiters, mentors, or clients without saying anything.

• Open source also teaches you how to work with others. You learn how to communicate, take feedback, follow rules, and collaborate with developers from different countries.

• It can also **help you land a job**. Many companies value open-source experience, and some even hire directly from contributors because they’ve already seen your work.

• Finally, it builds confidence. When your code gets accepted and merged, you realize that you are capable, and that feeling pushes you to grow more.

## How you can find the perfect open-source repository for yourself

First, it’s very important to have **basic to moderate knowledge of at least one tech stack**.

For example, if your stack is **MERN + TypeScript**, you should be comfortable enough to read code, understand the logic, and make small changes. Along with this, you should also understand **basic Git and GitHub flow** like forking a repo, creating branches, committing changes, and opening pull requests. You don’t need to be an expert, but you must understand what’s going on.

• Next, make yourself **very active and curious** while browsing the internet. For example, when you’re scrolling on X and see a post like *“We just hit 1k GitHub stars!”*, take that as a trigger and instantly visit the repository. Check what tech stack it uses, whether the project is active, and if there are open issues being discussed. Building this habit helps you naturally discover good and active open-source projects without forcing it.

• Many **YC-backed startups are open source**. Visit their official websites or GitHub organizations and explore their repositories. If the product interests you, chances are you’ll enjoy contributing to it.

• The **official GSoC website** is another great place. It lists many open-source organizations. Go through them and pick projects that **match your interests and skills** even if you’re not applying for GSoC.

• You can also look at tools you already use. For example, if you use **Discord**, search for *“Discord open-source alternative”*. You’ll find real, active projects solving real problems.

• Another smart trick is to **observe other open-source contributors** around you. See where they are contributing, explore those repositories, and understand why they chose them.

Finally, remember this **all of the above means nothing if you don’t put in effort**. Exploring, reading code, setting up projects, and making your first PR takes time and patience. Effort is the real key.

## How to start contributing to an open-source repository

First, let’s repeat the most important thing: you must have **basic knowledge of Git and GitHub**. You should understand things like forking a repository, cloning it, creating branches, committing changes, and opening pull requests. You can learn this from free tutorials, blogs, or videos no need for paid resources.

Now assume you’ve found a project **XYZ** that matches your tech stack and interests. It’s active, issues are being created regularly, and people are contributing. Don’t panic if the project is popular (even big repos like n8n).

The **very first step** is understanding the repository. Ask yourself:

• What problem does this project solve?

• Why do people use it? You don’t need deep knowledge just a **basic idea** of what the project does.

Once you understand the project, **fork the repository** and then **clone it to your local machine**. Good repositories always have a **README** and usually a **CONTRIBUTING guide**. These files explain:

• How to set up the project locally

• Rules for contributing

• Code style and guidelines

Reading these is **very important**.

Next, go to the **Issues** section. If you’re a beginner, start by looking for labels like good first issue or beginner. But yes, it’s true finding an unsolved good first issue is sometimes hard. If that happens, check **old issues** or open discussions.

If you still can’t find an issue, don’t worry. Use the product or application yourself. While using it, try to find **small problems** for example:

• Padding or margin issues

• Small UI bugs

• Typos or unclear text

Create an issue for it and politely ask the maintainer if you can work on it. Whether they allow it depends on the repo’s workflow, but many maintainers appreciate this.

Sometimes understanding an issue feels **out of your league**. That’s okay. If you’re stuck, you can use **AI** to help explain the issue and suggest a plan to solve it. Just make sure *you* understand the solution before implementing it.

Now create a **new branch** for your work, like fix/header-padding. Search for the related files, understand the code, reproduce the issue step by step, and then fix it. You can reproduce bugs manually or with help from AI if needed.

Once done, write a **clear commit message**, push your branch, and create a **pull request**. In the PR description, clearly explain:

• What issue you fixed

• How you fixed it

After opening the PR, **stay active**. Maintainers may request changes respond politely, make updates, and push fixes.

And finally… **Congratulations!** Your first PR gets merged into the XYZ repository. You are officially an open-source contributor.

## Common mistakes to avoid in open source

1. **Lack of consistency** - Many people contribute once or twice and then disappear. Open source rewards consistency, not one-time effort. Even small but regular contributions matter more than a single big PR.

2. **Over-relying on AI without understanding** - Using AI is fine, but blindly copy-pasting AI-generated code is a big mistake. If you can’t explain your solution or understand the code, maintainers will notice and your PR may be rejected.

3. **Choosing issues beyond your level** - Beginners often jump into complex issues too early and get stuck. This leads to frustration and burnout. Start with small, simple issues and grow step by step.

4. **Not following contribution guidelines** - Skipping the README or CONTRIBUTING file is very common. Ignoring project rules, code style, or PR format can get your PR closed even if the fix is correct.

5. **Taking reviews personally or going inactive** - Feedback is part of open source. Getting defensive, ignoring comments, or disappearing after opening a PR hurts your reputation. Always respond politely and make the requested changes.

Avoiding these mistakes will make your open-source journey smoother and much more enjoyable.

If after reading all this you feel like *“this is too much”* or *“maybe open source isn’t for me”*, remember this: **learning happens through effort and struggle**. Rejected PRs do **not** mean open source is not for you they are part of the process.

You need to be mentally strong and stay focused. Keep trying even when progress feels slow. Believe me, this is not magic. I started trying in **June 2025**, and my **first PR got merged in September**. It took time, patience, and multiple failures. every good thing takes time, and open source is no different.

That’s it for today.
If this article added even a little value to your life, please give it a like and share your **thoughts or guidance in the comments**.
Thank you.`,
  },
];
