import { Manager } from "./manager";
import { MessageBox } from "./messageBox";
import { UnderlinePen } from "./underlinePen";

const manager = new Manager();
const STRONG = "strong message";
const WARNING = "warning box";
const SLASH = "slash box";
manager.register(STRONG, new UnderlinePen("-"));
manager.register(WARNING, new MessageBox("*"));
manager.register(SLASH, new MessageBox("/"));

const p1 = manager.create(STRONG);
p1.use("Hello, world.");
const p2 = manager.create(WARNING);
p2.use("Hello, world.");
const p3 = manager.create(SLASH);
p3.use("Hello, world.");
