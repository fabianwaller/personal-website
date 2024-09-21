import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type JourneyDataProps = {
  title: string;
  description: string;
  time?: string;
  last?: boolean;
};

const JourneyData: React.FC<JourneyDataProps> = ({
  title,
  description,
  time,
  last,
}) => {
  return (
    <div className="grid grid-cols-[max-content_1fr] gap-x-4 sm:gap-x-6">
      <div className="sm:px-2">
        <span className="block h-[13px] w-[13px] rounded-full bg-primary"></span>
        {!last && (
          <span
            className="block w-[1px] bg-primary-foreground"
            style={{
              height: "calc(100% - .5rem - 13px)",
              transform: "translate(6px, .25rem)",
            }}
          />
        )}
      </div>

      <Card className="card mb-6 grid gap-1">
        <CardHeader className="pb-0">
          <CardTitle className="card__title">{title}</CardTitle>
          <CardDescription className="card__subtitle">
            {description}
          </CardDescription>
        </CardHeader>
        {time && (
          <CardContent>
            <p>{time}</p>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

const JourneyTabs = () => {
  return (
    <Tabs defaultValue="education" className="w-[500px] max-w-full">
      <TabsList className="mb-6 grid w-full grid-cols-2 bg-background">
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
      </TabsList>
      <TabsContent value="education">
        <JourneyData
          title="Bachelor of Computer Science"
          description="University of Saarland, Saarbrücken, Germany"
          time="2021 - 2024"
        />
        <JourneyData
          title="Abitur"
          description="Peter-Wust-Gymnasium"
          time="2013 - 2021"
          last
        />
      </TabsContent>
      <TabsContent value="experience">
        <JourneyData
          title="UX Software Engineering Intern"
          description="at Ergosign Saarbrücken, Germany"
          time="Aug - Oct 2024"
          last
        />
      </TabsContent>
    </Tabs>
  );
};

export default JourneyTabs;
