import styles from './feed.module.css';

import { Heading } from "./feed/Heading";
import { Tools } from "./feed/Tools";
import { Table } from "./feed/Table";
import { Actions } from "./feed/Actions";

export default function Feed() {
  return <div className={`grow lg:w-[calc(100% - 20rem)] ${styles.feed}`} >
    <div className="border-2 rounded-xl rounded-b-none border-b-0">
      <Heading />
      <Tools />
    </div>
    <Table />
    <Actions />
  </div>
};
