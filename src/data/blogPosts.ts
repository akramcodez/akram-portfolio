export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "open-source-decoded",
    title: "Open Source Decoded: Your First Step Into Open Source",
    excerpt: "If you keep hearing about open source and feel curious about what it is, how it can help you, its benefits, how to start contributing, and how to find good projects - you're in the right place.",
    content: `If you keep hearing about **open source** and feel curious about what it is, how it can help you, its benefits, how to start contributing, and how to find good projects - so you're in the right place.

I'll share **my real open-source journey**, what I learned, and the **mistakes you can avoid**.

## Why listen to me?

I've been contributing to open source for the past **6 months**. In **December 2025**, I made **35 PRs**, and in **January 2026**, I've already made **10 PRs**. I've contributed to projects like **Internet Archive, Activepieces, DodoPayments**, and more. You can also check out **all my merged PRs here →** akramcodez.tech/#my-work

## What is open source?

Open source means software whose **code is open and available to everyone**. This means you are free to **look at how it is built**, **use it for your own work**, **change or improve it**, and even **share your improvements with others**.

Instead of being controlled by one company, open-source projects are **built by people from all over the world**, working together. This helps beginners learn real-world coding, improve skills, and contribute to software that many people actually use.

## Benefits of open source

• Open source helps you learn in a very practical way. Instead of only watching tutorials or building small demo projects, you work on real software that people actually use.

• It improves your coding skills because you read other people's code, understand how real projects are structured, and fix real problems. Over time, you start writing cleaner and better code.

• When you contribute to open source, all your work is public. This means your GitHub profile shows real contributions, which helps you prove your skills to recruiters, mentors, or clients without saying anything.

• Open source also teaches you how to work with others. You learn how to communicate, take feedback, follow rules, and collaborate with developers from different countries.

• It can also **help you land a job**. Many companies value open-source experience, and some even hire directly from contributors because they've already seen your work.

• Finally, it builds confidence. When your code gets accepted and merged, you realize that you are capable, and that feeling pushes you to grow more.

## How you can find the perfect open-source repository for yourself

First, it's very important to have **basic to moderate knowledge of at least one tech stack**.

For example, if your stack is **MERN + TypeScript**, you should be comfortable enough to read code, understand the logic, and make small changes. Along with this, you should also understand **basic Git and GitHub flow** like forking a repo, creating branches, committing changes, and opening pull requests. You don't need to be an expert, but you must understand what's going on.

• Next, make yourself **very active and curious** while browsing the internet. For example, when you're scrolling on X and see a post like *"We just hit 1k GitHub stars!"*, take that as a trigger and instantly visit the repository. Check what tech stack it uses, whether the project is active, and if there are open issues being discussed. Building this habit helps you naturally discover good and active open-source projects without forcing it.

• Many **YC-backed startups are open source**. Visit their official websites or GitHub organizations and explore their repositories. If the product interests you, chances are you'll enjoy contributing to it.

• The **official GSoC website** is another great place. It lists many open-source organizations. Go through them and pick projects that **match your interests and skills** even if you're not applying for GSoC.

• You can also look at tools you already use. For example, if you use **Discord**, search for *"Discord open-source alternative"*. You'll find real, active projects solving real problems.

• Another smart trick is to **observe other open-source contributors** around you. See where they are contributing, explore those repositories, and understand why they chose them.

Finally, remember this **all of the above means nothing if you don't put in effort**. Exploring, reading code, setting up projects, and making your first PR takes time and patience. Effort is the real key.

## How to start contributing to an open-source repository

First, let's repeat the most important thing: you must have **basic knowledge of Git and GitHub**. You should understand things like forking a repository, cloning it, creating branches, committing changes, and opening pull requests. You can learn this from free tutorials, blogs, or videos no need for paid resources.

Now assume you've found a project **XYZ** that matches your tech stack and interests. It's active, issues are being created regularly, and people are contributing. Don't panic if the project is popular (even big repos like n8n).

The **very first step** is understanding the repository. Ask yourself:

• What problem does this project solve?
• Why do people use it? You don't need deep knowledge just a **basic idea** of what the project does.

Once you understand the project, **fork the repository** and then **clone it to your local machine**. Good repositories always have a **README** and usually a **CONTRIBUTING guide**. These files explain:

• How to set up the project locally
• Rules for contributing
• Code style and guidelines

Reading these is **very important**.

Next, go to the **Issues** section. If you're a beginner, start by looking for labels like good first issue or beginner. But yes, it's true finding an unsolved good first issue is sometimes hard. If that happens, check **old issues** or open discussions.

If you still can't find an issue, don't worry. Use the product or application yourself. While using it, try to find **small problems** for example:

• Padding or margin issues
• Small UI bugs
• Typos or unclear text

Create an issue for it and politely ask the maintainer if you can work on it. Whether they allow it depends on the repo's workflow, but many maintainers appreciate this.

Sometimes understanding an issue feels **out of your league**. That's okay. If you're stuck, you can use **AI** to help explain the issue and suggest a plan to solve it. Just make sure *you* understand the solution before implementing it.

Now create a **new branch** for your work, like fix/header-padding. Search for the related files, understand the code, reproduce the issue step by step, and then fix it. You can reproduce bugs manually or with help from AI if needed.

Once done, write a **clear commit message**, push your branch, and create a **pull request**. In the PR description, clearly explain:

• What issue you fixed
• How you fixed it

After opening the PR, **stay active**. Maintainers may request changes respond politely, make updates, and push fixes.

And finally… **Congratulations!** Your first PR gets merged into the XYZ repository. You are officially an open-source contributor.

## Common mistakes to avoid in open source

1. **Lack of consistency** - Many people contribute once or twice and then disappear. Open source rewards consistency, not one-time effort. Even small but regular contributions matter more than a single big PR.

2. **Over-relying on AI without understanding** - Using AI is fine, but blindly copy-pasting AI-generated code is a big mistake. If you can't explain your solution or understand the code, maintainers will notice and your PR may be rejected.

3. **Choosing issues beyond your level** - Beginners often jump into complex issues too early and get stuck. This leads to frustration and burnout. Start with small, simple issues and grow step by step.

4. **Not following contribution guidelines** - Skipping the README or CONTRIBUTING file is very common. Ignoring project rules, code style, or PR format can get your PR closed even if the fix is correct.

5. **Taking reviews personally or going inactive** - Feedback is part of open source. Getting defensive, ignoring comments, or disappearing after opening a PR hurts your reputation. Always respond politely and make the requested changes.

Avoiding these mistakes will make your open-source journey smoother and much more enjoyable.

If after reading all this you feel like *"this is too much"* or *"maybe open source isn't for me"*, remember this: **learning happens through effort and struggle**. Rejected PRs do **not** mean open source is not for you they are part of the process.

You need to be mentally strong and stay focused. Keep trying even when progress feels slow. Believe me, this is not magic. I started trying in **June 2025**, and my **first PR got merged in September**. It took time, patience, and multiple failures. every good thing takes time, and open source is no different.`,
  },
];
