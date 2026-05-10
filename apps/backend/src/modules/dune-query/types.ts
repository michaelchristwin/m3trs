import { t, type Static } from "elysia";

// 1. Create TypeBox schema that matches the interface
export const ResultsResponseSchema = t.Object({
  execution_id: t.String(),
  query_id: t.Number(),
  is_execution_finished: t.Boolean(),
  next_offset: t.Number(),
  next_uri: t.String(),
  state: t.Enum({
    COMPLETED: "QUERY_STATE_COMPLETED",
    EXECUTING: "QUERY_STATE_EXECUTING",
    PENDING: "QUERY_STATE_PENDING",
    CANCELLED: "QUERY_STATE_CANCELLED",
    FAILED: "QUERY_STATE_FAILED",
    EXPIRED: "QUERY_STATE_EXPIRED",
  }),
  result: t.Optional(
    t.Object({
      rows: t.Array(t.Record(t.String(), t.Unknown())),
      metadata: t.Object({
        column_names: t.Array(t.String()),
        datapoint_count: t.Number(),
        execution_time_millis: t.Number(),
        pending_time_millis: t.Number(),
        result_set_bytes: t.Number(),
        row_count: t.Number(),
        total_result_set_bytes: t.Number(),
        total_row_count: t.Number(),
      }),
    }),
  ),
  error: t.Optional(
    t.Object({
      type: t.String(),
      message: t.String(),
      metadata: t.Optional(
        t.Object({
          line: t.Number(),
          column: t.Number(),
        }),
      ),
    }),
  ),
  // TimeData fields
  submitted_at: t.Date(), // or t.Date() if you transform
  execution_started_at: t.Optional(t.String({ format: "date-time" })),
  execution_ended_at: t.Optional(t.String({ format: "date-time" })),
  expires_at: t.Optional(t.String({ format: "date-time" })),
  cancelled_at: t.Optional(t.String({ format: "date-time" })),
});

// 2. Get the static type (best of both worlds)
export type ValidatedResultsResponse = Static<typeof ResultsResponseSchema>;
