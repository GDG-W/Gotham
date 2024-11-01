export interface Venue {
  name: string;
  size: number[];
}

export interface Event {
  title: string;
  facilitator?: string;
  venue: Venue;
  panelists?: string[];
}

export interface Session extends Event {
  session_id: number;
  duration: number;
  start_time: string;
  end_time: string;
}

export interface ScheduleData {
  general: { duration: number; start_time: string; end_time: string; events: Event[] }[];
  breakouts: {
    venue: Venue;
    duration: number;
    category: string;
    events: Session[];
    start_time: string;
    end_time: string;
  }[];
  post_breakout: { duration: number; start_time: string; end_time: string; events: Event[] }[];
}
