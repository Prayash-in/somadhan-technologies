export type PostSection = {
  heading?: string;
  body: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  content: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "what-if-indias-ai-advantage-isnt-another-model",
    title: "What If India's AI Advantage Isn't Another Model?",
    excerpt:
      "For years, the AI race has been measured in parameters, GPUs and billion-dollar training runs. But what if the next race is won by building the smartest environment around the model — and that is where India's real advantage lies?",
    date: "September 01, 2026",
    readTime: "10 min read",
    tag: "Perspectives",
    content: [
      {
        body: [
          "For years, the AI race has been measured in parameters, GPUs, benchmarks and billion-dollar training runs. But what if the next AI race is won somewhere else entirely?",
          "What if the next AI race is not about building the smartest model, but building the smartest environment around it?",
        ],
      },
      {
        heading: "Imagine India in 2035",
        body: [
          "Imagine a district hospital in Assam during a sudden dengue outbreak. Doctors are overwhelmed, test results are arriving from multiple laboratories, medicine supplies are changing by the hour, and public-health officials are trying to understand which neighborhoods need immediate attention.",
          "An AI system could combine patient records, local disease patterns, hospital capacity, verified protocols, medicine inventories, weather data, and nearby clinic reports. It could remember what worked, flag conflicts, explain its sources, and communicate with doctors in their preferred language and format.",
          "The same approach could help a municipal office coordinate flood relief, a factory investigate equipment failures, a university support students, or a small business manage tax and compliance rules. The models and industries may differ, but the underlying advantage is similar: giving AI the right information, tools, memory, and safeguards at the right time.",
          "That would be a different kind of AI victory.",
        ],
      },
      {
        heading: "The AI Race Just Changed Direction",
        body: [
          "For the last few years, artificial intelligence has been defined by bigger models, more data, more computing power, and improved reasoning. The industry has focused heavily on model size, benchmarks, parameters, and training infrastructure. But once these models enter the real world, they need far more than internal knowledge. They need documents, databases, tools, user history, business rules, permissions, memory, and verification. They also need to know which information to prioritize, which actions to avoid, and how to operate within real-world constraints.",
          "The goal is no longer simply to build a smarter model. It is to build the environment that helps the model operate effectively. That environment is where Context Engineering begins.",
          "There is an important distinction between model building, prompt engineering, and context engineering. Model building attempts to improve what the AI knows and can reason about internally. Training, fine-tuning, reinforcement learning, architecture improvements, and model scaling all belong to this layer. Prompt engineering asks a narrower question: How should I instruct this model?",
          "Context engineering asks a much larger one: What should this model see, remember, retrieve, ignore, verify, and act upon while solving a problem?",
          "That difference may sound subtle, but it is fundamental. A prompt might tell an AI, “Analyze this agricultural problem.” Context engineering determines which agricultural documents the system should retrieve, which region the question concerns, which crop is involved, what the farmer previously reported, which sources are authoritative, whether the information is outdated, what tools the agent can access, which actions it is allowed to perform, how much information can fit into the context, which previous lessons should be remembered, and how incorrect assumptions should be detected.",
          "The prompt is a sentence. The context is a system. And systems are where engineering becomes interesting.",
        ],
      },
      {
        heading: "Context Isn't a Notebook. It's a Budget.",
        body: [
          "This is one of the most important shifts in modern AI engineering: context is not an unlimited notebook but a scarce computational resource.",
          "Every file, tool response, search result, interaction, and instruction consumes tokens and competes for attention. If an agent remembers everything, it can become overwhelmed — not because information is missing, but because there is too much of it.",
          "Treating context as a budget rather than a log means deciding what to retain, discard, compress, retrieve later, or reinforce at key moments.",
          "That is not prompt writing. That is engineering.",
        ],
      },
      {
        heading: "The Model Remembers — It Just Stops Listening",
        body: [
          "Imagine giving an AI agent 50,000 tokens of instructions, documentation and history. Technically, your original instruction is still there. But after dozens of tool calls, searches and outputs, the model's attention is surrounded by newer information. Your important instruction sits near the beginning while the latest error sits near the end. The model increasingly operates on what is immediately relevant to its current trajectory.",
          "This produces a phenomenon often described as instruction fade-out. The instruction hasn't disappeared. Its practical influence has.",
          "That creates an entirely different engineering problem. Instead of saying, “I told the model this at the beginning,” you start asking, “When does the model need to remember this?” That leads to event-driven reminders, structured context, state management and decision-point reinforcement.",
          "The future AI system may therefore not simply have a system prompt. It may have a context control layer constantly deciding what the model needs right now.",
        ],
      },
      {
        heading: "More Context Can Make AI Dumber",
        body: [
          "Here is the uncomfortable part: more context does not always produce better AI. It can add noise, weaken attention, and lead to worse decisions.",
          "Agentic Context Engineering (ACE) addresses this by treating context as an evolving software repository or playbook rather than repeatedly compressing it into summaries. If an API fails because a specific parameter is missing, “be careful with the API” is not enough. The system must preserve the exact condition, required parameter, and failure. The detail is the intelligence.",
          "One AppWorld example shows the risk clearly. After an agent's useful context was reduced from about 18,282 tokens to 122 tokens, its accuracy dropped from 66.7% to 57.1%.",
          "The lesson isn't that summaries are useless. The lesson is: Compression without understanding can destroy capability.",
        ],
      },
      {
        heading: "Teach AI to Forget on Purpose",
        body: [
          "Memory shouldn't mean storing everything. The system needs to distinguish between temporary context and durable knowledge. A user's casual sentence may disappear, while a validated domain rule should remain. A failed API call may become a reusable lesson, whereas a temporary tool output may be discarded after execution.",
          "This is the architecture of an AI that actually learns how to work. The goal is not to create an AI that remembers everything, but an AI that remembers what matters. That changes AI from a text-generation system into something closer to an engineered decision-support system.",
        ],
      },
      {
        heading: "The Stack Is Being Rebuilt From the Ground Up",
        body: [
          "The old AI model was simple: Data → Model → Answer",
          "The emerging stack is more complex: User → Context Engine → Retrieval → Memory → Tools → Model → Verification → Feedback",
          "The model is only one part of the system. Engineers must now decide what it should see, remember, retrieve, ignore and do when it fails. That is Context Engineering: building the environment that makes AI reliable and useful.",
        ],
      },
      {
        heading: "India's Problem Isn't Intelligence. It's Context.",
        body: [
          "India doesn't need to build the world's biggest AI model or spend hundreds of billions recreating the entire AI stack. Its advantage is different: India has a massive context problem.",
          "Hundreds of languages and dialects. Diverse levels of digital literacy. Vast agricultural, healthcare, legal, educational, industrial and government knowledge. Regional datasets. Public infrastructure. Millions of real-world situations that generic global models don't understand well.",
          "The key question isn't whether India can build an AI that knows everything. It's whether India can build AI systems that know exactly what matters in each situation. That is a context problem. And context problems are engineering problems.",
        ],
      },
      {
        heading: "The Secret Weapon: An AI That Gets Smarter Without Retraining",
        body: [
          "India's AI advantage may not come from building the biggest model, but from building the smartest system around it.",
          "An Indian startup could take a powerful open-source model and add the layers that make it useful in the real world: context retrieval, memory, knowledge graphs, tools, verification, feedback, multilingual support, and governance. Instead of forcing the model to solve everything from memory, the system gives it the right information, tools, and constraints at the right moment.",
          "That could allow a smaller model to outperform a much larger one on a specific task — not because the model is smarter, but because the surrounding system is better.",
          "The most powerful part is that the system can learn from experience without constant retraining. An agent attempts a task, records what worked, studies failures, and turns useful lessons into reusable context. A failed API call becomes a warning. A successful workflow becomes a strategy. A recurring mistake becomes something to avoid.",
          "This creates a continuous learning loop: Execute → Observe → Reflect → Curate → Reuse",
          "ACE organizes this process through three roles: the Generator performs the task, the Reflector analyzes the result, and the Curator converts valuable lessons into structured updates. Rather than rewriting its entire memory, the system adds small pieces of delta context — new knowledge that improves future decisions. Over time, the AI develops an evolving operational playbook.",
          "For India, this could be transformative. AI systems serving agriculture, healthcare, education, law, and public infrastructure could build domain-specific intelligence from real-world experience without retraining the foundational model every time they learn something new.",
          "The secret weapon may not be another model. It may be an AI system that learns how to use context better every day.",
        ],
      },
      {
        heading: "India's Real Advantage",
        body: [
          "India won't win the AI race with another giant model. It can win by transforming its vast institutional and domain knowledge into structured, retrievable, verifiable, and context-aware intelligence — building the infrastructure that gives every model the power to turn intelligence into action.",
        ],
      },
      {
        heading: "The Model Is About to Become Cheap",
        body: [
          "This is the part that should make AI companies uncomfortable. If models continue improving rapidly, the difference between the best model and the fifth-best model may become less important for many applications. Not irrelevant, but less decisive.",
          "If switching the underlying model becomes relatively easy, then the competitive advantage moves elsewhere. It will belong to the company that owns the customer relationship, controls the workflow, has the best domain context, maintains the most useful memory, operates the strongest verification system, and has accumulated years of successful and failed agent trajectories.",
          "That is a much harder moat to copy. A model can potentially be replaced overnight, but a decade of high-quality contextual knowledge is much harder to reproduce.",
        ],
      },
      {
        heading: "India Doesn't Need the Biggest Model to Win",
        body: [
          "Go back to the farmer in Assam. He doesn't care whether the underlying model has 500 billion parameters. He cares whether the answer is correct, whether it understands his language, whether the recommendation applies to his crop, whether the system remembers what happened last week, and whether it can tell him when it doesn't know.",
          "That is the real test, and it applies everywhere. A doctor doesn't necessarily need the world's largest model. They need the right clinical context. A student doesn't necessarily need the world's largest model. They need the right learning context. A government officer doesn't necessarily need the world's largest model. They need the right policy context. A developer doesn't necessarily need the world's largest model. They need the right repository, constraints, tools, and execution history.",
          "Intelligence becomes useful when it is contextualized.",
        ],
      },
      {
        heading: "India Doesn't Have to Win Every Race — Just the Right One",
        body: [
          "India may not need the biggest model or the most GPUs. Its opportunity may lie in building reliable systems around existing models. That means connecting AI to real-world knowledge, managing memory, supporting multiple languages, learning from feedback and verifying outputs.",
          "The race is not only to build smarter models. It is to build AI that can actually get things done.",
        ],
      },
      {
        heading: "The Only Question That Actually Matters for India May Not Be “Which Model?”",
        body: [
          "It may be: “What context can we give intelligence that nobody else has?”",
          "India's advantage could come from its agriculture, languages, public infrastructure, businesses, scientific institutions and diverse real-world problems. But information alone is not enough. It becomes an advantage when it is structured, retrievable, relevant, persistent, verifiable and actionable.",
          "That is the difference between having data and having context — and context may become one of the most valuable resources in the AI economy.",
        ],
      },
      {
        heading: "The Race After the Race",
        body: [
          "Perhaps one day, we will look back at the current obsession with model size the same way we look at the early obsession with processor speed. It mattered, and it still matters. But eventually, the surrounding system became just as important: the operating system, the database, the network, the software ecosystem, the developer tools, and the architecture.",
          "AI may be heading toward the same transition. The model is becoming the reasoning engine, while context is becoming the operating environment. And if that is true, the next generation of AI companies will not simply ask, “How intelligent is our model?” They will ask, “How intelligently can we construct the world around it?”",
          "That is where the opportunity becomes enormous, and perhaps where India's AI story becomes interesting. Not because India built the biggest model, trained the most parameters, or bought the most GPUs, but because India figured out something more practical: how to make intelligence useful at scale.",
          "Maybe India's AI advantage isn't another model. Maybe it is the context surrounding the model. And if India gets that right, the country won't merely be participating in the AI race. It could be competing in the race that comes after it.",
        ],
      },
    ],
  },
  {
    slug: "the-billion-person-algorithm",
    title: "The Billion-Person Algorithm",
    excerpt:
      "How Bharat could turn its population into its competitive advantage — by not copying anyone else's. A journey through Bharat's assets in the AI race, and why that matters.",
    date: "August 25, 2026",
    readTime: "11 min read",
    tag: "Perspectives",
    content: [
      {
        heading:
          "A scene from a fabric market in Surat, before getting to the argument",
        body: [
          "Imagine Meera, a small-time saree shopkeeper in Surat's textile market. It is the week before the wedding season and Meera is staring at her spreadsheets — last year's sales figures, this year's advance bookings, a supplier who has been quoting her three different rates in three different conversations. She needs to know how much stock to order before her working capital runs out, but she has no one to ask who actually knows the market besides her.",
          "She pulls out her phone and types a query in Gujarati: \u201cAa season ma kevu stock rakhvu joie?\u201d — how much stock should I keep for the season?",
          "Within seconds she has an answer — a demand forecast, derived from thousands of queries from other small-time shopkeepers, extrapolated to apply to her own mix of products, factoring in the local wedding season and the supplier's known inclination to hike prices at this time of the year.",
          "Nothing about this requires Meera to know English, or to know what a neural network is, or to be able to afford a consultant who could have helped her. What it does require is a system that has learned — from thousands of shopkeepers who have asked similar questions with similar spreadsheets — what Meera's question actually means.",
          "This system does not exist yet. Everything necessary to build it does — and this is an article about how we could build it, and why it should not look much like anything being built anywhere else in the world.",
        ],
      },
      {
        heading: "The core argument, stated plainly",
        body: [
          "India keeps trying to participate in the AI race by asking the wrong question. The wrong question is \u201chow can we catch up to the countries that have already built AI capabilities?\u201d It is the wrong question because it presumes, incorrectly, that we are on the same playing field as the US, China and the other early adopters. It is a question about catching up to countries that have more capital, more compute and more infrastructure than anyone else — and it therefore assumes that we should be thinking about how to replicate their existing approaches.",
          "The right question is actually \u201cwhat do we have that they don't?\u201d The answer to that question is people — not people as a resource to be exploited, but people as a source of diversity of lived experience and of problems that no one else has thought about solving yet.",
          "The rest of this article is about unpacking this idea — about exploring what it would mean to think of people as more than a resource, and how an AI-assisted world might be built around serving their needs rather than being built to extract from them. Before getting to that, there is one critical distinction to be made, which is also easy to conflate with the wrong question.",
        ],
      },
      {
        heading: "Scale is not the same as surveillance",
        body: [
          "When people hear \u201cIndia should turn its population into an asset\u201d, the reaction that often follows is a reasonable and valid concern: \u201cdoes that mean we want to know everything about everyone?\u201d",
          "It does not — and it shouldn't — but the reason for that is not obvious at first. There is a difference between a government that wants to know everything about everyone and a government that wants to know enough about enough people to build useful models that can help solve real-world problems. The former is a surveillance state — and, ironically, it may also be an innovation desert, because there is no incentive to let innovation take root if it can all be controlled from the top. The latter is something akin to a public good — roads, rail, electricity — but made of information and built by many people, not just one.",
          "The goal should not be to know everything about everyone. The goal should be to treat the experience of a billion people — in all its messy, inconvenient, wonderful variety — as something that can be turned into knowledge that makes their lives better. The consent of the governed should be a prerequisite to that process, as should be the transparency of the methods used — without those things, this whole endeavour is another form of surveillance that India would be better off avoiding.",
          "With that said, here are a few reasons why this sort of approach should be desirable — if not inevitable — in India.",
        ],
      },
      {
        heading: "Chapter one: from one complaint to a pattern",
        body: [
          "Why a single data point is not much, but a million of them can be.",
          "Consider the value of a single data point. One shopkeeper has miscalculated her inventory for the season. One citizen has filed a complaint about a road. One student is struggling with a lesson and has not understood the explanation.",
          "On their own they are not particularly valuable — they simply exist. No one has acted on them beyond perhaps a customer service rep acknowledging the complaint or a teacher spending a minute flagging the student for extra help. They are incidents, and as such they are not likely to lead to much beyond their immediate effect.",
          "Now imagine incidents — not identical, but similar — occurring thousands of times over. The patterns they form can be more valuable: they can be used to predict which categories of goods are most likely to sell in a given season, or what time of year supplier prices tend to peak. They can be used to determine which roads are most likely to need repair, or which areas to prioritize for maintenance. They can be used to identify weaknesses in a curriculum, or what sort of explanation works best for a given category of students.",
          "This is the value of building models from patterns. The reason such patterns are especially valuable to build in India is the diversity of experiences they are likely to be built from. One shopkeeper's inventory might be more informative in isolation than another's, but in combination with similar experiences from other shopkeepers they can begin to reflect an underlying reality. The same applies to all manner of problems and their solutions.",
          "It is crucial to remember that no individual's experience is being mined for these patterns — each one is simply being used as part of a larger set. That is the point of using scale: to get beyond the vagaries of any single experience and identify something more universal. It is also the reason such an approach would work best in India — because those universal patterns are more likely to emerge from the variety of experiences that India has to offer. A pattern from one region and one Indian season will not be much use in another region and another season, but together they can begin to reflect something akin to a national-level pattern that can be useful to many.",
        ],
      },
      {
        heading: "Chapter two: why it has to be for everyone, not the few",
        body: [
          "The danger of an AI-assisted future in India is that it will be dominated by a few large companies and institutions.",
          "There is no question that such an outcome would be preferable to the alternative — an AI-assisted future dominated by large companies and institutions elsewhere. It is still an undesirable outcome, and one that should be actively resisted. The reason is simple: the ability to solve problems at scale should not be a privilege of the few — it should be available to anyone who has the inclination and the ability to use it.",
          "That means an AI-assisted future in India should be decentralized, at least in its ability to participate in and benefit from it. It means a shopkeeper should be able to use an AI-assisted tool without having to understand much about how it works, and a student should be able to build something with it without having to understand much about how it works. It means a small-town startup should be able to rent the infrastructure it cannot afford to build, and a local government office should be able to deploy working solutions to its backlog of problems without outsourcing much of its operations to consultancies. It means researchers should be able to experiment on problems using data without having to prove their institutional affiliations first, and citizens should be able to contribute to those problems without having to understand how they are being solved.",
          "This is not only a matter of fairness — though that alone would be reason enough, if only as a counterweight to other trends. It is also a matter of practicality: the moment an AI-assisted future becomes the domain of the few, it becomes harder to solve problems at scale, because those few have much less incentive to distribute their capabilities freely. That is where the value of diversity begins to intersect with the value of scale — and why an AI-assisted future in India should be built to benefit from both.",
        ],
      },
      {
        heading: "Chapter three: every sector is sitting on a data set",
        body: [
          "How to think about AI as something that underlies everything, rather than as an industry.",
          "One of the easiest mistakes to make when thinking about AI is to mistake it for an industry. It is not — not yet — and it is much more akin to electricity or the internet, which underlie industries rather than being one themselves.",
          "Every industry in India — and indeed every individual — is sitting on top of a data set. Some of these data sets are obvious: they exist in the form of problems being reported and attempts being made to solve them. Others are latent: they exist as patterns in how problems are solved or avoided, visible only to people who know where to look.",
          "That does not mean every one of these data sets is worth building on — in fact, most probably are not. What it does mean is that the first step towards building something is recognizing that these data sets exist, and beginning the process of documenting and formalizing them. It means building an honest, updated record of the problems that people encounter — how often, where and with what effect they occur. It means building a map of what is happening, where and to whom. From there, it becomes much easier to think about what might need to be done about it.",
          "This distinction matters because it is the difference between building something that only serves to document problems and building something that can actually help solve them. It is also the reason this approach should be more viable in India than anywhere else: no other country has such a diverse, distributed set of problems, and therefore no other country has an equivalent set of potential data sets to document and formalize.",
        ],
      },
      {
        heading: "Chapter four: sovereignty is not about an Indian model",
        body: [
          "The layers of sovereignty that are rarely discussed when talking about \u201cour own model\u201d.",
          "When people talk about \u201csovereign AI\u201d in India, they often mean one specific thing — whether or not India will be able to build its own foundational model. This is a real consideration: it is difficult to have true AI sovereignty if one has to rely on other countries to host one's large language models. But it is only one layer of a much larger set of considerations.",
          "Sovereignty is much more than a foundational model — it spans compute, data, models, people, applications, research and even standards and governance. A country can have a model but not the compute to run it, the data to train it or the people to operate it. It can have all three and lack the applications to make any of it useful to everyday citizens. It can have everything and lack the research and development to improve upon it, or the governance to ensure that it is being used responsibly.",
          "There is a layer of sovereignty that is even more difficult to discuss: the ability to understand one's own country. A model that has been trained on data from around the world can be incredibly valuable, yet know very little about any one country in particular — and therefore have little ability to respond to the specific needs of any one group of citizens. It may be able to provide advice, but it will have much more difficulty providing specific solutions to local problems or understanding the nuances of local culture and context. It is much easier to have an AI that is available in India than one that understands India — and only the latter is truly sovereign.",
        ],
      },
      {
        heading:
          "Chapter five: the danger of arriving at someone else's race",
        body: [
          "Why copying the strategies of other countries will always put India behind them.",
          "This may be the most difficult argument of all to accept, but it is also the most important — India cannot win the AI race by following everyone else's lead. It does not help to look to other countries to see what we should do — not because they are doing everything wrong, but because they are arriving at many of the same ideas from different directions, and it is much more difficult to follow than to lead.",
          "If the goal is to rebuild an existing platform with a flag next to it, then the race has already been lost — India would be following in the footsteps of others, building on their infrastructure, and would therefore always be playing catch-up. If the goal is to build models on the same assumptions, the same data sets and the same design principles as everyone else, then the best that can be hoped for is competence. It is far more difficult to build something truly novel when everyone has already built something similar.",
          "The more useful question is not \u201chow can we do what they are doing?\u201d but \u201cwhat can we do that they cannot?\u201d And for India, that list is not as short as one might think. It includes everything from scale and diversity to engineering talent and a unique set of problems that the rest of the world has not had to solve yet. It includes a set of constraints that have led India to develop entirely new approaches to many different problems, as well as a much larger set of languages to work with and a much larger set of people who are used to working within those constraints.",
          "Constraints become design features. Diversity becomes a training set. A billion people become a billion participants rather than a billion potential customers. Problems become data sets. Data sets become models. Models become platforms that other countries will have to study and attempt to replicate if they want to keep up.",
        ],
      },
      {
        heading: "Closing: to Surat",
        body: [
          "We opened this essay with Meera, a small-time saree shopkeeper in Surat who asked a question in Gujarati that an AI was able to answer in the same language. Let us close this essay by talking about what it would take to get her the answer she needs.",
          "It would take treating her question as data that can be used to train future models, rather than as an inconvenient interruption to someone's day. It would take building the infrastructure to actually collect that data — her question, and the similar questions that other shopkeepers are likely to ask — and using that data to build something that can be useful to everyone. It would take resisting the temptation to simply license someone else's model and calling that a sovereign AI capability. It would take a government, a research community, a startup ecosystem and ordinary citizens who all believe that it is worth creating a map of India's problems before anyone tries to solve them.",
          "It would take accepting that none of these things are easy, and that most of them do not exist yet. But it is also true that none of these things exist anywhere else — which is exactly why they are worth pursuing in India.",
          "The AI race is still being run. The outcome is still being decided. It will not necessarily be decided by the country with the most capital or the most compute — it will be decided by the country that has learned to combine what it has in unique ways and to apply those combinations to new problems before anyone else has had the chance to copy them.",
          "Bharat does not need to catch up to anyone — Bharat needs to build the thing only Bharat could have built, in the place only Bharat occupies.",
        ],
      },
      {
        body: [
          "Written August 2026. The strategic environment in which this article is written — in terms of compute availability, data governance and the overall development of the Indian AI ecosystem — is shifting rapidly. Many of the recommendations detailed in this article may well change in the years to come. That is not a criticism of the argument; rather, it is an observation that the map is being drawn as we walk the path.",
        ],
      },
    ],
  },
  {
    slug: "why-research-first-matters-in-agri-tech",
    title: "Why research-first matters in agri-tech",
    excerpt:
      "Agriculture is a physical, seasonal system. Models that skip the field tend to fail quietly — here is why we build the other way around.",
    date: "March 18, 2026",
    readTime: "6 min read",
    tag: "Approach",
    content: [
      {
        body: [
          "Agri-tech products live or die by physical reality. A crop is not a click, a field is not a dataset, and a growing season is not a sprint. When software makes a wrong recommendation in agriculture, the cost is measured in harvests — not in latency or conversion.",
          "This is why Somadhan builds research-first: every model, advisory and product decision starts from a testable question about the physical world, and gets validated against that world before it ships.",
        ],
      },
      {
        heading: "The quiet failure of lab-only models",
        body: [
          "Many agricultural models perform beautifully on curated benchmarks and then stumble in the field. Shadows change, sensor noise appears, crop varieties differ, and weather refuses to cooperate with the test set. A model that has never been tested against these conditions does not fail loudly — it fails quietly, in thousands of small decisions.",
          "Research-first is our defence against that. It means structured data collection with agronomists, explicit hypotheses, honest benchmarks and deployments that feed results back into the model lifecycle.",
        ],
      },
      {
        heading: "What research-first looks like in practice",
        body: [
          "It looks like ground-truth protocols written before any code. It looks like measuring false negatives for disease detection because a missed case is costlier than a false alarm. It looks like publishing benchmarks so that our claims can be checked. And it looks like closing the loop: observations from every deployed advisory return to the research team as training signal.",
        ],
      },
      {
        heading: "Patient science, fast shipping",
        body: [
          "Research-first does not mean slow. It means that what ships has already earned its place. We move quickly inside the loop — rapid experiments, tight feedback, short iterations — precisely because the loop is grounded in the field.",
          "In a domain where a wrong answer costs a season, the only fast path is the rigorous one.",
        ],
      },
    ],
  },
  {
    slug: "reading-a-field-like-a-model-does",
    title: "Reading a field like a model does",
    excerpt:
      "What a neural network actually sees when it looks at a crop — and why that changes how we collect training data.",
    date: "February 09, 2026",
    readTime: "5 min read",
    tag: "Research",
    content: [
      {
        body: [
          "When we say a model 'reads' a field, we mean something precise: it converts pixels and spectra into structured signals — vigour, stress, stage, anomaly — and then into decisions. Understanding what the model sees is the difference between a tool farmers trust and a black box they ignore.",
        ],
      },
      {
        heading: "Beyond green pixels",
        body: [
          "The human eye and a computer vision model attend to different things. A model may weigh texture, canopy temperature proxies and spectral indices more heavily than overall colour. In practice this means a stressed canopy can look 'fine' in true colour while the model sees it early — but only if it was trained on that stress.",
        ],
      },
      {
        heading: "Why ground truth is the bottleneck",
        body: [
          "The gap between the field and the model is closed entirely by data. If a training set contains mostly healthy canopies photographed in good light, the model learns a world without problems. Our research protocol exists to prevent that: plots are labelled by agronomists, symptoms are photographed as they appear, and negative examples are collected as carefully as positive ones.",
        ],
      },
      {
        heading: "Trust built from transparency",
        body: [
          "Models earn trust the same way people do — through demonstrated reliability and honest limits. That is why we publish our validation methods, share error analyses and let agronomists audit model behaviour on their own fields.",
        ],
      },
    ],
  },
  {
    slug: "from-satellite-pixels-to-sowing-decisions",
    title: "From satellite pixels to sowing decisions",
    excerpt:
      "How a weather forecast, a soil map and a crop model come together into one timely recommendation.",
    date: "December 04, 2025",
    readTime: "7 min read",
    tag: "Field Notes",
    content: [
      {
        body: [
          "A sowing decision looks simple: plant now, or wait. But getting it right means combining rainfall onset forecasts, soil moisture state, variety-specific phenology and risk tolerance — and delivering the result before the window closes.",
        ],
      },
      {
        heading: "The ingredients",
        body: [
          "Our advisory pipeline fuses three layers. Satellite and in-situ sensing estimate soil moisture and field readiness. Downscaled weather models predict onset and early-season rainfall. A crop model then runs the scenarios: what does this variety need, and what is the risk profile of each sowing window?",
        ],
      },
      {
        heading: "The output is a decision, not a map",
        body: [
          "Farmers do not need more data — they need better decisions. Our output is a recommendation with a confidence level and an alternative: 'Sowing window opens 22 June with moderate risk; waiting 6 days improves emergence odds by 11%.' That sentence carries more value than a hundred maps.",
        ],
      },
      {
        heading: "What the field taught us",
        body: [
          "Early pilots taught us that trust in the recommendation depends on the alternative being explicit, and on the model admitting uncertainty. Farmers already manage risk daily; our job is to make the trade-offs legible.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
