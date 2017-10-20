import { Factory } from "./factory";
import { IDCardFactory } from "./idCardFactory";
import { Product } from "./product";

const factory = new IDCardFactory();
const card1 = factory.create("太郎");
const card2 = factory.create("次郎");
const card3 = factory.create("そうすけ");
card1.use();
card2.use();
card3.use();

factory.owners.forEach((owner, number) => {
    console.log(`idNumber: ${number} name: ${owner}`);
});
