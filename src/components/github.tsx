"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "./kibo-ui/contribution-graph";

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type Props = {
  contributions: Contribution[];
  total: number;
};

const GithubGraph = ({
  contributions,
  total,
}: Props) => {
  return (
    <TooltipProvider>
      <ContributionGraph
        data={contributions}
        totalCount={total}
      >
        <ContributionGraphCalendar className="no-scrollbar cursor-pointer transition-all ease-in-out">
          {({ activity, dayIndex, weekIndex }) => (
            <Tooltip>
              <TooltipTrigger asChild>
                <g>
                  <ContributionGraphBlock
                    activity={activity}
                    dayIndex={dayIndex}
                    weekIndex={weekIndex}
                    className="cursor-pointer"
                  />
                </g>
              </TooltipTrigger>

              <TooltipContent>
                <div className="space-y-1">
                  <p className="font-semibold ">
                    {activity.date}
                  </p>

                  <p className="text-sm text-muted-foreground ">
                    {activity.count} contributions
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          )}
        </ContributionGraphCalendar>

        <ContributionGraphFooter>
          <ContributionGraphTotalCount />
          <ContributionGraphLegend />
        </ContributionGraphFooter>
      </ContributionGraph>
    </TooltipProvider>
  );
};

export default GithubGraph;