import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

const items = [
  {
    id: 1,
    date: "Aug 2011-Aug 2017",
    title: "Primary School",
    description: "Primary School Illnau, CH",
  },
  {
    id: 2,
    date: "Aug 2017-Aug 2020",
    title: "Secondary School",
    description: "Secondary School Illnau, CH",
  },
  {
    id: 3,
    date: "Aug 2020-Aug 2021",
    title: "Basic Apprenticeship Year",
    description: "NoserYoung Zurich, CH",
  },
  {
    id: 4,
    date: "Aug 2020-Aug 2024",
    title: "Vocational School",
    description:
      "Technische Berufsschule Zurich / Berufsmaturitätsschule Zurich, CH",
  },
  {
    id: 5,
    date: "Aug 2024-Aug 2028 (anticipated)",
    title: "Bachelor of Science in Computer Science",
    description: "ZHAW Zurich University of Applied Sciences, CH",
  },
];

export default function EducationTimeline() {
  return (
    <Timeline defaultValue={5}>
      {items.map((item) => (
        <TimelineItem key={item.id} step={item.id}>
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
