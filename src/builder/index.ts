import * as process from "process";
import { Director } from "./director";
import { TextBuilder } from "./textBuilder";

const textBuilder = new TextBuilder();
const textDirector = new Director(textBuilder);
textDirector.construct();
process.stdout.write(textBuilder.getResult());
