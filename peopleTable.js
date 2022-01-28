export const PeopleTable = {
  props: ["person", "index"],
  data: () => ({
    attrs: [
      "height",
      "mass",
      "hair_color",
      "skin_color",
      "eye_color",
      "birth_year",
      "gender",
    ],
  }),
  emits: {
    greetCharacter: null,
  },
  template: /* html */ `
      <!-- <h2>{{ notReactive }}</h2> -->
      <button @click="$emit('greetCharacter', index % 2 === 0 ? 'Salut' : 'Bonjour')">Saluer le personnage</button>
        <table>
            <thead>
                <tr>
                    <th>Taille</th>
                    <th>Poids</th>
                    <th>Couleur des cheveux</th>
                    <th>Couleur de peau</th>
                    <th>Couleur des yeux</th>
                    <th>Date de naissance</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td v-for="(attr, i) in attrs" :key="i">
                        {{ person[attr] }}
                    </td>
                </tr>
            </tbody>
        </table>
        `,
};
