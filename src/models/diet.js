export default class Diet {
  id;
  name;

  constructor(diet) {
    this.id = diet?.id ?? null;
    this.name = diet?.name ?? '';
  }
}
