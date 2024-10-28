export interface Session {
  location: string;
  event: string;
}

export interface ScheduleItemProps {
  start_time: string;
  end_time: string;
  sessions: Session[];
}

export interface SingleEventScheduleItemProps extends Session {
  start_time: string;
  end_time: string;
}
