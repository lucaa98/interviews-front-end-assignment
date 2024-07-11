export default class Difficulty {
  id;
  name;

  constructor(difficulty) {
    this.id = difficulty?.id ?? null;
    this.name = difficulty?.name ?? '';
  }
}
