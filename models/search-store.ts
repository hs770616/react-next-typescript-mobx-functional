import { makeAutoObservable } from "mobx";

export default function createSearchStore() {
  const store = makeAutoObservable({
    search: "initVal" as string,
    num: 0 as number,

    updateSearch(val: string): void {
      this.search = val;
      console.log("updated! : ", this.search);
    },
    increaseNum(): void {
      this.num++;
      console.log("updated! : ", this.num);
    },

    get computedSearch(): string {
      return "hello " + this.search;
    },
    get computedDoubleNum(): number {
      return 2 * this.num;
    },
  });
  return store;
}
