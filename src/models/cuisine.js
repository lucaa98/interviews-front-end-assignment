export default class Cuisine {
  id;
  name;

  constructor(cuisine) {
    this.id = cuisine?.id ?? null;
    this.name = cuisine?.name ?? '';
  }
}
