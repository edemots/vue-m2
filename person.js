import { PeopleTable } from "./peopleTable.js";

export const Person = {
  components: { PeopleTable },
  props: {
    person: {
      type: Object,
      required: false,
      default: { name: "Toto", mass: 70, height: 180 },
      validator: function (value) {
        return (
          value.hasOwnProperty("name") &&
          value.hasOwnProperty("mass") &&
          value.hasOwnProperty("height")
        );
      },
    },
    index: Number,
  },
  data: () => ({
    greet: "",
  }),
  inject: ["imc", "imcInterpretation"],
  template: /*html*/ `
          <h2>{{ greet + ' ' + person.name }}</h2>
          <h4>En {{ imcInterpretation(imc(person)) }} (IMC: {{ imc(person) }})</h4>
          <people-table :person="person" @greet-character="(value) => greet = value" :index="index"></people-table>
      `,
};
