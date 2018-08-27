// a shared object to store page data
// not using a flux store, as all data should be constant
// moving to Vuex would be an easy refactor if annotation editing were added

export default [
  {
    name: "planner",
    component: () => import("@/components/annotation_pages/Planner.vue"),
    title: "Flex Planner (work in progress)",
    url: "https://tasks.galan-montgomery.com/about/",
    repository: "https://github.com/GalanCM/FuzzyPlanner",
    contents: {
      image: require("@/assets/FuzzyPlanner.png"),
      description: `This is a project that I have been working on recently in order to expand my portfolio. As explained on its site, I have very little professional work that I can show publicly, so this is intended to demonstrate some of my technical and design skills. It's still early, and I still have some serious design concerns that need addressing, which I discuss below.
        From a technical perspective, it's a fairly straightforward app, written in Typescript, using a global data store (Flux pattern) to coordinate state. The biggest challenge thus far has been implementing drag-and-drop for rearranging tasks.`,
      annotations: [
        {
          header: "Drag Handle",
          explanation:
            "Indicator for rearranging tasks. It only appears on hover, and I haven't had time to properly test this yet. I like it, but it may need some re-thinking.",
          pinX: 0.264,
          pinY: 0.32
        },
        {
          header: "Text Entry",
          explanation:
            "Transparent background until focused. Intended to strengthen legibility, although it may be at the cost of discoverability.",
          pinX: 0.3,
          pinY: 0.25
        },
        {
          header: "Active Task Marker",
          explanation:
            "Added a simple color bar to increase contrast between active and completed tasks, so completed tasks can be more opaque — and legible.",
          pinX: 0.251,
          pinY: 0.26
        },
        {
          header: "New Task Button",
          explanation:
            "Bold, draws attention. Clicking creates new task, which comes pre-focused to help with discoverability of input fields.",
          pinX: 0.26,
          pinY: 0.39
        },
        {
          header: "Complete Task Toggle",
          explanation:
            "A simple, unobtrusive checkbox. As the second most important feature (after the text input), should be easily discovered. To emphasize this feature, two tasks are premade, one with the box checked.",
          pinX: 0.733,
          pinY: 0.172
        },
        {
          header: "Dropzone for Removing Tasks",
          explanation:
            "NEEDS COMPLETE REWORKING. It appears only when a task is dragged, and the task must then be dropped here to delete it. Based on informal testing, users didn't notice it, and it makes task deletion tedious.",
          pinX: 0.95,
          pinY: 0.09
        }
      ]
    }
  },
  {
    name: "miniblog",
    component: () => import("@/components/annotation_pages/Miniblog.vue"),
    title: "Miniblog",
    url: "https://www.galan-montgomery.com/miniblog",
    repository: "https://github.com/GalanCM/miniblog-code-samples",
    contents: {
      image: require("@/assets/Miniblog.png"),
      description: `An older code sample. It was intended as to be the first of several implementations of the same tool using different frameworks — this one being in React. It's fairly small and straightforward (there is no back-end API, for example), in order to keep the codebase small and easy for employers to parse.
        I've since decided that I need to show off more complex examples of what I can do, starting with the Flex Planner app.`,
      annotations: [
        {
          header: "Code Viewer Button",
          explanation:
            "This is intended as a code example, so I built in a code viewer modal, linked to with a big, hard-to-miss button.",
          pinX: 0.055,
          pinY: 0.09
        },
        {
          header: "Framework Switcher",
          explanation:
            "UNIMPLEMENTED. A widget for switching between the different versions of the site. Since I only finished the React version, I never implemented it, but left it as an indicator.",
          pinX: 0.995,
          pinY: 0.03
        },
        {
          header: "File Switcher",
          explanation:
            "A simple select widget for choosing which file to view. I hand selected some key files, so that employers could jump to the good parts.",
          pinX: 0.12,
          pinY: 0.53
        },
        {
          header: "Code View",
          explanation:
            "Not much explanation needed. It does use the actual files from the app, not copies (a fun challenge). Code highlighting should probably be implemented.",
          pinX: 0.05,
          pinY: 0.58
        },
        {
          header: "Repository Link",
          explanation:
            "MISSING FEATURE. Employers might want to see the full code.",
          pinX: 0.9,
          pinY: 0.53
        }
      ]
    }
  },
  {
    name: "getloaded-mobile",
    component: () => import("@/components/annotation_pages/Getloaded.vue"),
    title: "Getloaded Mobile v2.0",
    url: "",
    repository: "",
    contents: {
      image: require("@/assets/Getloaded.png"),
      description: `Getloaded Mobile was an app that I led development on back in 2015. The company wanted to build new apps for Android and iOS, using Phonegap to reuse as much code from our mobile website as possible. I was in charge of the coding and design of the app, leading a 5-man team. 
        This was the largest project that I have worked on to date, and I was responsible to much of the design both visually and architecturally. There are many things I would do differently today (the data flow was rather hacky). Sadly, the company was shutter by its parent a year later and the app is no longer available.`,
      annotations: [
        {
          header: "Theming",
          explanation:
            "A non-native app, it themed to replicate each platform's native look-and-feel. Not as good as a true native design, but it worked.",
          pinX: 0.005,
          pinY: 0.1
        },
        {
          header: "Main Page",
          explanation:
            "The app was a Load Board: a site where trucker could find loads, and brokers could find truckers. I designed the main page to expose starting points for each workflow. The options would change based on whether the user was a trucker, broker, or both.",
          pinX: 0.035,
          pinY: 0.3
        },
        {
          header: "Search Results Page",
          explanation:
            "The most-used page in the app. Similar to the main page, it's functionality was based on the user's permissions.",
          pinX: 0.95,
          pinY: 0.07
        },
        {
          header: "Access Main Page",
          explanation:
            "A hamburger menu that opens a drawer containing the main page, allowing user to switch paths. Results would remain in memory until a new search was initiated, which was used for route planning (the app's killer feature).",
          pinX: 0.55,
          pinY: 0.075
        },
        {
          header: "Search results",
          explanation:
            "One of the elements copied over from our mobile site. I had originally designed this a year earlier, when a senior expressed some difficulty packing so much data into so little space. Led to me becoming the 'UI Guy' at Getloaded.",
          pinX: 0.85,
          pinY: 0.61
        }
      ]
    }
  }
];
