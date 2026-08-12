const blogData = [
{ id :1,
    title: "Basics Of Web Development & Backend Development",
    summary: "Backend Development handles the behind-the-scenes logic, managing databases, server configurations, and application security to power the frontend.",
    description: `<h1>Unsung Heroes of the Web: What Does a Backend Developer Actually Do?</h1>

<p>When you scroll through a sleek website, tap a colorful button, or admire a fluid animation, you’re experiencing <strong>frontend development</strong>. But what happens behind the curtain when you log in, place an order, or send a message?</p>
<p>That’s where <strong>backend development</strong> comes in—the digital engine room powering every interactive feature on the web.</p>
<hr />
<h2>What is Backend Web Development?</h2>
<p>If web development were a house, frontend developers would design the layout, paint the walls, and choose the furniture. Backend developers, on the other hand, lay the foundation, wire the electricity, install the plumbing, and secure the front door.</p>
<p>Backend development refers to <strong>server-side operations</strong>. It includes everything the user <em>doesn't</em> directly see on screen, focusing on:</p>
<ul>
  <li><strong>Databases:</strong> Safely storing and retrieving user data, product catalogs, or media files.</li>
  <li><strong>Server Logic:</strong> Processing incoming user actions (e.g., verifying a password or checking account balances).</li>
  <li><strong>APIs (Application Programming Interfaces):</strong> Acting as the bridge that passes requests from the user's browser down to the database and back.</li>
</ul>
<hr />
<h2>Key Responsibilities of a Backend Developer</h2>
<p>Backend engineers build, maintain, and optimize the server-side code that keeps applications running smoothly and securely:</p>
<ul>
  <li>🔐 <strong>Security & Authentication:</strong> Protecting sensitive information, managing user logins, and ensuring secure payment processing.</li>
  <li>⚡ <strong>Performance & Scalability:</strong> Structuring code so websites stay fast—even when millions of users visit at once.</li>
  <li>🛠️ <strong>Database Architecture:</strong> Designing structured systems using databases like <strong>PostgreSQL</strong>, <strong>MySQL</strong>, or <strong>MongoDB</strong> to handle complex requests.</li>
  <li>🌐 <strong>API Development:</strong> Creating RESTful or GraphQL APIs that allow the front end (or mobile apps) to communicate seamlessly with the server.</li>
</ul>
<hr />
<h2>Popular Backend Tech Stack</h2>
<p>Backend developers leverage a variety of programming languages and frameworks depending on the project's scale and requirements:</p>
<ul>
  <li><strong>Languages:</strong> Python, JavaScript (Node.js), Java, Go, PHP, C#</li>
  <li><strong>Frameworks:</strong> Express.js, Django, Spring Boot, Laravel, ASP.NET Core</li>
  <li><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, Redis</li>
  <li><strong>Cloud & DevOps:</strong> AWS, Docker, Kubernetes, Nginx</li>
</ul>
<hr />
<blockquote style="border-left: 4px solid #ccc; padding-left: 10px; margin-left: 0; font-style: italic;">
  💡 <strong>The Bottom Line:</strong> A beautiful website might catch a user's attention, but a robust backend is what keeps them coming back. Without reliable backend logic, modern web applications wouldn’t be able to store data, secure information, or function dynamically.
</blockquote>`,
    author_name:"Black Devil",
    author_avatar:"/authors/author1.jpeg",
    blog_image: "/blog1.jpeg",
    posted_date:"6 Aug, 2026",
    category: "Web Development"
},
{
    id: 2,
    title: "Understanding Node.js Event Loop and Asynchronous I/O",
    summary: "Dive deep into how Node.js manages non-blocking operations efficiently using its single-threaded event loop architecture.",
    description: `<h1>Demystifying the Node.js Event Loop</h1>
<p>Node.js revolutionized backend development by introducing single-threaded, asynchronous non-blocking I/O execution. But how does it execute heavy operations without locking up the server?</p>
<hr />
<h2>The Single-Thread Mystery</h2>
<p>Traditional servers create a new thread for every client connection. Node.js takes a different approach: it operates on a <strong>single main thread</strong> backed by an event-driven mechanism.</p>
<ul>
  <li><strong>Non-Blocking I/O:</strong> File reads, database queries, and network calls are delegated so execution isn't blocked.</li>
  <li><strong>Libuv:</strong> The underlying C library that supplies the event loop and thread pool for low-level asynchronous tasks.</li>
</ul>
<hr />
<h2>Phases of the Event Loop</h2>
<p>The event loop executes through distinct phases continuously:</p>
<ol>
  <li><strong>Timers:</strong> Executes callbacks scheduled by setTimeout() and setInterval().</li>
  <li><strong>Pending Callbacks:</strong> Executes I/O callbacks deferred from previous runs.</li>
  <li><strong>Poll:</strong> Retrieves new I/O events and executes their callbacks.</li>
  <li><strong>Check:</strong> Runs callbacks scheduled via setImmediate().</li>
  <li><strong>Close Callbacks:</strong> Handles cleanup, such as socket destruction events.</li>
</ol>`,
    author_name: "Dev Guru",
    author_avatar: "/authors/author1.jpeg",
    blog_image: "/blog2.jpeg",
    posted_date: "7 Aug, 2026",
    category: "Backend Development"
  },
  {
    id: 3,
    title: "Mastering CSS Grid and Flexbox for Modern Responsive Design",
    summary: "Learn when to use Flexbox and when to use CSS Grid to build modern, pixel-perfect, and mobile-friendly layouts.",
    description: `<h1>Grid vs. Flexbox: Choosing the Right Layout Tool</h1>
<p>CSS layouts used to rely heavily on floats and positioning hacks. Modern web standards give us two powerful tools: <strong>CSS Grid</strong> and <strong>Flexbox</strong>.</p>
<hr />
<h2>Flexbox: One-Dimensional Layouts</h2>
<p>Flexbox excels when laying elements out along a single axis—either horizontal (rows) or vertical (columns).</p>
<ul>
  <li>Perfect for navigation bars, card lists, and centered alignment.</li>
  <li>Controls space distribution easily among dynamic content items.</li>
</ul>
<hr />
<h2>CSS Grid: Two-Dimensional Control</h2>
<p>CSS Grid controls both rows and columns simultaneously, making full-page structural layouts straightforward.</p>
<ul>
  <li>Defines rigid macro-layouts like headers, sidebars, content zones, and footers.</li>
  <li>Eliminates complex HTML wrapping markup for multi-column grids.</li>
</ul>`,
    author_name: "Sarah Code",
    author_avatar: "/authors/author1.jpeg",
    blog_image: "/blog3.jpeg",
    posted_date: "7 Aug, 2026",
      category:"Web Development"
  },
  {
    id: 4,
    title: "REST vs. GraphQL: Designing Modern Web APIs",
    summary: "An in-depth look comparing traditional RESTful endpoints with flexible GraphQL query interfaces.",
    description: `<h1>API Architecture Face-Off: REST vs. GraphQL</h1>
<p>Building client-server communication requires choosing an API architectural pattern. Let's compare the two leading paradigms.</p>
<hr />
<h2>REST API Essentials</h2>
<p>REST (Representational State Transfer) relies on HTTP verbs (GET, POST, PUT, DELETE) and defined endpoint routes.</p>
<ul>
  <li><strong>Pros:</strong> Built-in HTTP caching, standardized status codes, simple to understand.</li>
  <li><strong>Cons:</strong> Over-fetching and under-fetching of data across multiple resource calls.</li>
</ul>
<hr />
<h2>GraphQL Essentials</h2>
<p>GraphQL exposes a single endpoint where clients specify exact fields they require in a query statement.</p>
<ul>
  <li><strong>Pros:</strong> Exact data payload retrieval, auto-generated documentation, client flexibility.</li>
  <li><strong>Cons:</strong> Increased complexity server-side, custom caching strategies required.</li>
</ul>`,
    author_name: "Alex Turner",
    author_avatar: "/authors/author1.jpeg",
    blog_image: "/blog2.jpeg",
    posted_date: "8 Aug, 2026",
      category: "Backend Development"
  },
  {
    id: 5,
    title: "Database Indexing Essentials: Speed Up Your Database Queries",
    summary: "Discover how adding correct database indexes transforms slow database queries into lightning-fast operations.",
    description: `<h1>The Secret Sauce of Fast Queries: Database Indexing</h1>
<p>When database tables grow from thousands to millions of records, standard search queries slow down drastically. Indexing fixes this bottleneck.</p>
<hr />
<h2>How Indexes Work</h2>
<p>Think of an index like a book index at the end of a textbook. Instead of reading every page to find a topic, you jump directly to the target page.</p>
<ul>
  <li><strong>B-Tree Structure:</strong> Most relational databases use B-Trees to keep search complexity at logarithmic time.</li>
  <li><strong>Primary Key Indexes:</strong> Automatically indexed by default in standard SQL engines.</li>
</ul>
<hr />
<h2>When to Avoid Indexing</h2>
<p>Indexes are not free. Every INSERT, UPDATE, or DELETE operation requires updating corresponding index structures. Avoid over-indexing tables with high write traffic.</p>`,
    author_name: "DB Craftsman",
    author_avatar: "/authors/author1.jpeg",
    blog_image: "/blog3.jpeg",
    posted_date: "8 Aug, 2026",
      category: "Database"
  },
  {
    id: 6,
    title: "Securing Web Applications Against OWASP Top 10 Vulnerabilities",
    summary: "Protect your web application against common security threats like SQL Injection, XSS, and CSRF attacks.",
    description: `<h1>Building Secure Web Applications</h1>
<p>Security should never be an afterthought. Protecting user data against vulnerabilities keeps your site trusted and reliable.</p>
<hr />
<h2>Key Vulnerabilities to Prevent</h2>
<ul>
  <li><strong>SQL Injection (SQLi):</strong> Always use parameterized queries or ORMs rather than concatenating user inputs directly.</li>
  <li><strong>Cross-Site Scripting (XSS):</strong> Sanitize HTML output before rendering dynamic user input onto pages.</li>
  <li><strong>Cross-Site Request Forgery (CSRF):</strong> Utilize Anti-CSRF tokens for form submissions and state-changing actions.</li>
</ul>`,
    author_name: "CyberShield",
    author_avatar: "/authors/author1.jpeg",
    blog_image: "/blog2.jpeg",
    posted_date: "8 Aug, 2026",
      category: "Web Security"
  },
  {
    id: 7,
    title: "Introduction to Docker Containers and Microservices",
    summary: "Learn how containerization simplifies application deployment across development and production environments.",
    description: `<h1>Why Containerization Changed Cloud Deployment</h1>
<p>"It works on my machine" is a phrase of the past thanks to containerization tools like <strong>Docker</strong>.</p>
<hr />
<h2>Containers vs Virtual Machines</h2>
<p>Unlike Virtual Machines that require a dedicated Guest OS, Docker containers share the host kernel while maintaining isolated processes and dependencies.</p>
<ul>
  <li><strong>Lightweight:</strong> Fast startup speeds and low hardware overhead.</li>
  <li><strong>Portable:</strong> Identical behavior in local development, staging, and live environments.</li>
</ul>`,
    author_name: "DevOps Dave",
    author_avatar: "/authors/author1.jpeg",
    blog_image: "/blog3.jpeg",
    posted_date: "9 Aug, 2026",
      category:"DevOps"
  },
  {
    id: 8,
    title: "JavaScript ES6+ Features Every Web Developer Must Know",
    summary: "Upgrade your JavaScript skills with modern syntax improvements like Destructuring, Promises, and Async/Await.",
    description: `<h1>Modernizing Your JavaScript Codebase</h1>
<p>JavaScript has evolved rapidly over the last decade. Writing modern ES6+ code results in cleaner, readable, and safer web applications.</p>
<hr />
<h2>Essential Features</h2>
<ul>
  <li><strong>Arrow Functions:</strong> Concise syntax for functions with lexically bound <code>this</code> value.</li>
  <li><strong>Destructuring:</strong> Cleanly unpack properties from objects and arrays directly into variables.</li>
  <li><strong>Async / Await:</strong> Express asynchronous code flow sequentially without deep callback nesting.</li>
</ul>`,
    author_name: "Js Ninja",
    author_avatar: "/authors/author1.jpeg",
    blog_image: "/blog1.jpeg",
    posted_date: "9 Aug, 2026",
      category:"Backend Development"
  },
  {
    id: 9,
    title: "Optimizing Web Performance: Lighthouse, Assets, and Caching",
    summary: "Improve page load times and core web vitals through effective resource compression and server caching.",
    description: `<h1>Speed Matters: Web Performance Optimization</h1>
<p>Page load speed directly affects search engine rankings and user retention rates. Here is how to boost your site's performance metrics.</p>
<hr />
<h2>Actionable Optimization Steps</h2>
<ul>
  <li><strong>Image Optimization:</strong> Serve next-gen formats like WebP or AVIF with responsive sizes.</li>
  <li><strong>Browser Caching:</strong> Configure HTTP response headers like <code>Cache-Control</code> for static media.</li>
  <li><strong>Code Splitting:</strong> Minify CSS/JS files and deferred loading non-critical assets.</li>
</ul>`,
    author_name: "FastWeb Pro",
    author_avatar: "/authors/author1.jpeg",
    blog_image: "/blog3.jpeg",
    posted_date: "9 Aug, 2026",
      category:"Web Development"
  },
  {
    id: 10,
    title: "State Management in Frontend Applications Simplified",
    summary: "Explore patterns and libraries for managing global UI state effectively in modern client-side apps.",
    description: `<h1>Managing Data Flow in Complex Interfaces</h1>
<p>As frontend apps grow, managing variable data across multi-level component trees becomes challenging.</p>
<hr />
<h2>Local vs Global State</h2>
<ul>
  <li><strong>Local State:</strong> Kept inside individual UI components (e.g., dropdown toggles, form inputs).</li>
  <li><strong>Global State:</strong> Shared across multiple distinct pages and views (e.g., user authentication state, shopping cart contents).</li>
</ul>`,
    author_name: "UI Specialist",
    author_avatar: "/authors/author1.jpeg",
    blog_image: "/blog1.jpeg",
    posted_date: "9 Aug, 2026",
      category:"Web Development"
  }
]

const blogMap = blogData.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

const users =[{
    id: 1, name:"umesh", email:"example@gmail.com", password:"$2b$10$3fDNGgmPey1QuZT8TmbtK.CueASoGM2ua7lJfDLaeIunlSh9fQLQu"//umeshnailwal
},
{
    id: 2, name:"umeshnailwal", email:"example123@gmail.com", password:"$2b$10$s3w4y3RtAZCEDW0TJPJ8h.HPqzM50vycvcWT428w3m/.s0IlijOsC"//umesh
}]
const userMap = users.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});
const user_email = users.reduce((acc, item) => {
  acc[item.email] = item;
  return acc;
}, {});
module.exports = { blogData, blogMap, users, userMap, user_email}