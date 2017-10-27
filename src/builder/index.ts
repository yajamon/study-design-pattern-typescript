import * as process from "process";
import { Director } from "./director";
import { HtmlBuilder } from "./htmlBuilder";
import { TextBuilder } from "./textBuilder";

const textBuilder = new TextBuilder();
const textDirector = new Director(textBuilder);
textDirector.construct();
process.stdout.write(textBuilder.getResult());

const htmlBuilder = new HtmlBuilder();
const htmlDirector = new Director(htmlBuilder);
htmlDirector.construct();
process.stdout.write(htmlBuilder.getResult());
