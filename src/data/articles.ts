export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  body: string[];
  image: string;
  imageAlt: string;
}

export const articles: Article[] = [
  {
    id: "csr-good-intentions",
    category: "CSR Problems",
    title: "Why Malaysian CSR Programmes Fail Despite Good Intentions",
    slug: "why-malaysian-csr-programmes-fail",
    date: "2026-05-19",
    excerpt: "Many CSR programmes begin with goodwill. The harder question is whether they are built to last after the launch photo is taken.",
    image: "https://lh3.googleusercontent.com/d/1EhE7qhr0cLb3w62ImLEf60LcsPS9rGj5",
    imageAlt: "A Malaysian CSR community programme with volunteers speaking to local residents",
    body: [
      "The problem is not that Malaysian companies do not care. Many do. The problem begins when CSR is treated as an event to be completed, photographed, and reported, instead of a commitment that needs follow-through.",
      "A company may sponsor school bags for 300 students, plant trees on a Saturday, or organise a one-day clean-up with volunteers in matching shirts. These activities can be helpful. But without a clear reason for the intervention, a local partner, and a way to return later, the programme risks becoming a memory for the company more than a solution for the community.",
      "CSR fails quietly when the planning is built around internal convenience. The date suits the company calendar. The location suits the camera. The activity suits the annual report. The community's real need may be more complicated, less photogenic, and harder to solve.",
      "Good intentions are a beginning, not a strategy. Malaysian CSR needs to ask sharper questions: Who asked for this programme? Who benefits after the event is over? What changes six months later? Until those questions become normal, many CSR programmes will continue to look successful on paper while leaving very little behind."
    ]
  },
  {
    id: "csr-hidden-cost",
    category: "CSR Problems",
    title: "The Hidden Cost of CSR for Malaysian Companies",
    slug: "hidden-cost-of-csr-malaysia",
    date: "2026-05-19",
    excerpt: "CSR is often presented as goodwill, but behind the scenes it competes with staff time, logistics, reporting, and operational budgets.",
    image: "https://lh3.googleusercontent.com/d/1WKkA2UmqjKv2HEGJmM3uDT8wrrVwtlL2",
    imageAlt: "Office team planning a CSR budget and programme timeline in Malaysia",
    body: [
      "CSR sounds simple from the outside. Choose a cause, gather volunteers, give something back. Inside a company, the work is rarely that neat.",
      "There are transport costs, venue costs, food, permits, insurance, staff hours, photography, reporting, and coordination with NGOs or government agencies. For larger organisations, these costs may be absorbed as part of reputation and ESG work. For SMEs, the same effort can feel heavy.",
      "This is why some Malaysian companies default to smaller, one-off activities. They are easier to approve and easier to explain. But cheaper is not always more meaningful. A rushed donation can be less useful than a smaller, better-designed programme that solves one specific problem.",
      "The hidden cost of CSR is not only money. It is attention. If a company wants real impact, someone must own the work before, during, and after the public-facing event. Without that ownership, CSR becomes another task squeezed between deadlines."
    ]
  },
  {
    id: "csr-volunteering",
    category: "CSR Problems",
    title: "Why CSR Needs More Than One-Day Volunteering",
    slug: "csr-needs-more-than-one-day-volunteering",
    date: "2026-05-19",
    excerpt: "Volunteer days can build awareness, but they rarely solve long-term problems unless they are part of a deeper programme.",
    image: "https://lh3.googleusercontent.com/d/1biyPM7CdYv-GGUjg-3IVPBHR0YREqVN4",
    imageAlt: "Corporate volunteers in Malaysia helping at a community clean-up",
    body: [
      "One-day volunteering is popular because it is visible. Staff can participate, photos can be shared, and the company can show that people were physically present. That has value. Presence matters.",
      "But many social and environmental problems do not move at corporate event speed. A school does not improve because one team painted a classroom. A river does not recover because rubbish was removed once. A community does not become resilient because a hamper was delivered before a festival.",
      "The weakness is not volunteering itself. The weakness is when volunteering becomes the whole programme. CSR should connect the one-day activity to a longer plan: assessment, partnership, training, maintenance, and measurement.",
      "A good volunteer day should feel like an entry point, not the final chapter. It should help employees understand the issue, support a local partner, and create momentum for work that continues after everyone returns to the office."
    ]
  },
  {
    id: "csr-measurement",
    category: "CSR Problems",
    title: "The Problem With Measuring CSR Impact",
    slug: "measuring-csr-impact-malaysia",
    date: "2026-05-19",
    excerpt: "Counting participants is easy. Proving that lives, ecosystems, or communities improved is much harder.",
    image: "https://lh3.googleusercontent.com/d/1oUWvFPkWfc4jRp9_QiwU576B5ROAYl6P",
    imageAlt: "CSR team reviewing impact data and community feedback",
    body: [
      "CSR reports often count what is easiest to count. Number of volunteers. Number of trees planted. Number of beneficiaries. Number of meals distributed. These figures are useful, but they are not the same as impact.",
      "Impact asks a more uncomfortable question: what changed because of the programme? Did the students stay in school? Did the trees survive? Did the river quality improve? Did the community gain skills, income, safety, or dignity?",
      "Many organisations struggle here because impact measurement needs data, time, and honesty. It may reveal that a programme looked impressive but did not work as expected. That can be difficult for a company that wants clean success stories.",
      "Still, better measurement is not about embarrassing anyone. It is about learning. A CSR programme that admits what did not work is usually more mature than one that only reports beautiful numbers."
    ]
  },
  {
    id: "csr-sme-struggle",
    category: "CSR Problems",
    title: "Why SMEs Struggle More With CSR Than Big Corporations",
    slug: "why-smes-struggle-with-csr-malaysia",
    date: "2026-05-19",
    excerpt: "SMEs may care deeply about community issues, but they often lack the budget, staff, and reporting systems that larger companies take for granted.",
    image: "https://lh3.googleusercontent.com/d/1nwSEeW8Oq7MrqHTp-DueHOhajfkQ5rMK",
    imageAlt: "Malaysian SME owner discussing a small CSR initiative with staff",
    body: [
      "Large companies can assign CSR to departments. SMEs often assign it to whoever has time after serving customers, handling payroll, and solving daily operational problems.",
      "This does not mean SMEs are less caring. In many Malaysian towns, small business owners already support schools, religious activities, sports teams, and local families in quiet ways. The issue is that informal generosity is not always recognised as CSR, and formal CSR can feel too expensive or complicated.",
      "SMEs may also struggle with documentation. They may not have ESG reporting systems, impact templates, or staff trained to manage partnerships. What they have is local knowledge and trust, which can be powerful if matched with the right support.",
      "The future of SME CSR in Malaysia should not simply copy big corporate models. It should be simpler, practical, and rooted in the communities SMEs already know."
    ]
  },
  {
    id: "tree-photo-op",
    category: "Tree Planting",
    title: "Why Tree Planting CSR Must Be More Than a Photo Opportunity",
    slug: "tree-planting-csr-photo-opportunity",
    date: "2026-05-19",
    excerpt: "Tree planting looks good in a campaign photo, but restoration work only begins after the sapling enters the ground.",
    image: "https://lh3.googleusercontent.com/d/19IoP7ZORXR7b1p6yNw0YGv_vva_cx0mi",
    imageAlt: "Volunteers planting native tree saplings in a Malaysian rainforest restoration programme",
    body: [
      "Tree planting has become one of the easiest CSR activities to understand. It is visible, positive, and simple to communicate. A company can say it planted 1,000 trees, and everyone immediately knows what that means.",
      "But the number of trees planted is only the opening line. The better question is how many survived. In tropical conditions, young trees can fail because of heat, flooding, poor species selection, grazing, competition from weeds, or lack of maintenance.",
      "When tree planting is planned mainly for the photo, the programme may prioritise speed and visibility over ecology. Volunteers may plant whatever seedlings are available, in locations that are easy to access, without a long-term maintenance plan.",
      "Real restoration is slower. It needs native species, site preparation, monitoring, and local knowledge. A good CSR tree planting programme should be proud of the launch day, but even more serious about what happens after it."
    ]
  },
  {
    id: "tree-aftercare",
    category: "Tree Planting",
    title: "The Problem With Planting Trees Without Long-Term Care",
    slug: "tree-planting-without-long-term-care",
    date: "2026-05-19",
    excerpt: "Planting is the easy part. Caring for young trees through their vulnerable first years is where many CSR programmes become real or disappear.",
    image: "https://lh3.googleusercontent.com/d/1JtX8mqtVPA1PWOokUhfFuo5oortRy9YG",
    imageAlt: "A young native tree sapling being checked in a Malaysian restoration site",
    body: [
      "A sapling is not a forest. It is a promise that still needs years of care.",
      "Many CSR tree planting programmes focus their energy on the planting day because that is when volunteers are available and cameras are present. But aftercare is where survival is decided. Young trees may need watering, mulching, weeding, replacement planting, and protection from damage.",
      "Long-term care is less glamorous. It does not always produce dramatic photos. It requires someone to return to the site when the campaign has already moved on. That is exactly why it matters.",
      "If a company wants to fund tree planting responsibly, it should budget for maintenance and monitoring from the start. The most honest tree planting target is not how many seedlings went into the ground. It is how many trees are still alive later."
    ]
  },
  {
    id: "fish-release-risks",
    category: "Fish Release",
    title: "Fish Release Programmes: Good Intentions, Real Ecological Risks",
    slug: "fish-release-programmes-ecological-risks",
    date: "2026-05-19",
    excerpt: "Releasing fish can look compassionate, but the wrong species, location, or timing can harm the ecosystem it hopes to help.",
    image: "https://lh3.googleusercontent.com/d/1j4qZFVXdSdNoZ-lxcZ8yuGXvlO9lu6nN",
    imageAlt: "Careful fish release activity at a Malaysian river with environmental guidance",
    body: [
      "Fish release programmes are often framed as kindness. They feel symbolic: returning life to the water, supporting nature, doing something visible and hopeful.",
      "The ecological reality can be more complicated. If the wrong species is released, it may compete with native fish, spread disease, disturb the food chain, or fail to survive. Even native species can create problems if released in the wrong habitat or in unrealistic numbers.",
      "This does not mean every fish release programme is bad. It means the activity should not be designed casually. It needs advice from fisheries experts, proper species selection, health checks, permits where required, and monitoring after release.",
      "Good intentions do not protect a river. Knowledge does. A responsible CSR fish release programme should begin with ecology, not ceremony."
    ]
  },
  {
    id: "nature-local-experts",
    category: "Nature CSR",
    title: "Why CSR Nature Programmes Need Local Experts",
    slug: "csr-nature-programmes-need-local-experts",
    date: "2026-05-19",
    excerpt: "Nature programmes fail when they ignore the people who understand the land, river, species, and community context.",
    image: "https://lh3.googleusercontent.com/d/1QLZujnPwlycMSihC0kbfvKTaeTSFpicz",
    imageAlt: "Local conservation experts briefing corporate volunteers in a Malaysian forest area",
    body: [
      "Nature CSR looks simple until the land starts answering back. A river has its own history. A forest edge has its own pressures. A planting site may look empty to visitors but be meaningful to nearby communities.",
      "This is why local experts matter. They know which species belong, which areas flood, which communities use the site, which seasons are difficult, and which mistakes have already been made before.",
      "Companies sometimes approach environmental CSR as if budget is the main missing ingredient. Budget helps, but it does not replace field knowledge. Without the right partners, a well-funded programme can still plant the wrong trees, release the wrong fish, or choose a site that cannot sustain the activity.",
      "The best role for a company is not always to lead. Sometimes it is to fund, listen, support, and let the people closest to the ecosystem guide the work."
    ]
  },
  {
    id: "symbolic-to-restoration",
    category: "Nature CSR",
    title: "From Symbolic CSR to Real Restoration: What Companies Should Do Instead",
    slug: "symbolic-csr-to-real-restoration",
    date: "2026-05-19",
    excerpt: "If companies want nature CSR to matter, they need to move from one-off symbolism to partnerships that repair ecosystems over time.",
    image: "https://lh3.googleusercontent.com/d/1OuwikHlYkNx_X-g2yS4RWLoDuxHuXNXa",
    imageAlt: "A long-term Malaysian restoration programme with trees, river monitoring, and community partners",
    body: [
      "Symbolic CSR is easy to recognise. It has a ceremony, a banner, a group photo, and a number that sounds impressive. Real restoration is quieter. It is measured in survival rates, water quality, local participation, and repeated visits.",
      "Companies do not need to abandon symbolic moments. Launch events can attract attention and bring people together. But the symbol should point to something real. A tree planting ceremony should connect to maintenance. A fish release should connect to habitat protection. A donation should connect to long-term capacity.",
      "The shift is practical. Choose fewer projects and stay longer. Work with credible local partners. Budget for monitoring. Publish honest results. Let the community help define success.",
      "Malaysia does not need more CSR that looks good for one afternoon. It needs programmes that are still working when nobody is taking pictures."
    ]
  }
];
