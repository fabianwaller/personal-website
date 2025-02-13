import { Button } from "@/components/ui/button";
import Link from "next/link";

export type itemsType = {
  href?: string;
  title: string;
  description: string;
}[];

const ItemList = ({ title, items }: { title: string; items: itemsType }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3>{title}</h3>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <Link href={item.href} target="_blank" legacyBehavior passHref>
                <Button variant={"link"} className="ml-auto">
                  <b>{item.title}</b>
                </Button>
              </Link>
            ) : (
              <b>{item.title}</b>
            )}{" "}
            - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
