import { Button } from "@/components/ui/button";
import Link from "next/link";
import ScrollAnimated from "./ScrollAnimated";

export type itemsType = {
  href?: string;
  title: string;
  description: string;
}[];

const ItemList = ({ title, items }: { title: string; items: itemsType }) => {
  return (
    <div className="flex flex-col gap-2">
      <ScrollAnimated>
        <h3>{title}</h3>
      </ScrollAnimated>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <ScrollAnimated key={index}>
            <li>
              {item.href ? (
                <Link href={item.href} target="_blank">
                  <Button variant={"link"} className="ml-auto">
                    <b>{item.title}</b>
                  </Button>
                </Link>
              ) : (
                <b>{item.title}</b>
              )}{" "}
              - {item.description}
            </li>
          </ScrollAnimated>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
