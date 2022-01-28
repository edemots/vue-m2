import { Person } from "./person.js";

// provide / inject

const Pagination = {
  emits: {
    goToPage: (page) => {
      return ["first", "prev", "next", "last"].includes(page);
    },
  },
  inject: ["isFirstPage", "isLastPage"],
  template: /*html*/ `
        <button @click="$emit('goToPage', 'first')" :disabled="isFirstPage">Première page</button>
        <button @click="$emit('goToPage', 'prev')" :disabled="isFirstPage">Page précédente</button>
        <button @click="$emit('goToPage', 'next')" :disabled="isLastPage">Page suivante</button>
        <button @click="$emit('goToPage', 'last')" :disabled="isLastPage">Dernière page</button>
    `,
};

const app = Vue.createApp({
  components: { Person },
  data: () => ({
    people: [],
    total: 0,
    first: "https://swapi.dev/api/people",
    prev: null,
    next: null,
  }),
  provide: function () {
    return {
      imc: this.imc,
      imcInterpretation: this.imcInterpretation,
      isFirstPage: Vue.computed(() => this.prev === null),
      isLastPage: Vue.computed(() => this.next === null),
    };
  },
  computed: {
    avgIMC() {
      return parseInt(
        this.people.reduce(
          (total, person) => ((total += this.imc(person)), total),
          0
        ) / this.people.length
      );
    },
    last() {
      return `https://swapi.dev/api/people/?page=${Math.ceil(this.total / 10)}`;
    },
  },
  methods: {
    imc(person) {
      return parseInt((person.mass / (person.height / 100) ** 2).toFixed(0));
    },
    imcInterpretation(imc) {
      if (imc > 40) return "obésité morbide ou massive";
      if (imc >= 35 && imc <= 40) return "obésité sévère";
      if (imc >= 30 && imc < 35) return "obésité modérée";
      if (imc >= 25 && imc < 30) return "surpoids";
      if (imc >= 18.5 && imc < 25) return "corpulence normale";
      if (imc >= 16.5 && imc < 18.5) return "maigreur";
      if (imc < 16.5) return "famine";
    },
    async goToPage(page) {
      return await this.getPeople(this[page]);
    },
    async getPeople(url) {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();

      this.total = result.count;
      this.prev = result.previous;
      this.next = result.next;
      this.people = result.results;
    },
  },
  async mounted() {
    await this.getPeople(this.first);
  },
});

app.component("pagination", Pagination);
app.config.unwrapInjectedRef = true;

app.mount("#app");
