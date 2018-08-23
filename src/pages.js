// a shared object to store page data
// not using a flux store, as all data should be constant
// moving to Vuex would be an easy refactor if annotation editing were added

export default [
  {
    name: "planner",
    component: () => import("@/components/annotation_pages/Planner.vue"),
    title: "Flex Planner",
    contents: {
      image: require("@/assets/FuzzyPlanner.png"),
      annotations: [
        {
          text: "New Task",
          pinX: 0.01,
          pinY: 0.34
        },
        {
          text: "Done",
          pinX: 0.9735,
          pinY: 0.085
        },
        {
          text: "Drag Handle",
          pinX: 0.03,
          pinY: 0.09
        }
      ]
    }
  },
  {
    name: "case-study",
    component: () => import("@/components/annotation_pages/CaseStudy.vue"),
    title: "Case Studies (from my portfolio site)",
    contents: {
      image: require("@/assets/CaseStudy.png"),
      annotations: [
        {
          text: "New Task",
          pinX: 0.01,
          pinY: 0.34
        },
        {
          text: "Done",
          pinX: 0.9735,
          pinY: 0.085
        },
        {
          text: "Drag Handle",
          pinX: 0.03,
          pinY: 0.09
        }
      ]
    }
  }
];
